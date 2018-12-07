const randomUser = require('../models/randomUser');
var async = require('async');
const mongoose = require("mongoose");

exports.insertUser = function(data) {
  //console.log(data);
  const user = new randomUser({
    gender: data[0]["gender"],
	email : data[0]["email"],
	age : data[0]["dob"]["age"],
	nat : data[0]["nat"]
  });
  console.log(user);
  user.save(function(err){
		if(err){
			console.log(err);
		}else{
			console.log("inserted");
		}
	});
};

exports.summarizeUser = function(req, res, next) {
	async.series([
	    male_summarize,
	    female_summarize
	], function (err, results) {
	    // Here, results is an array of the value from each function
	    //console.log(results[0]);
	    //console.log('\n');
	    //console.log(results[1]); // outputs: ['two', 'five']
	    req.results = results;
	    return next();
	});
    
};

exports.displayUser = function(req, res) {
		console.log(req.results);
		res.render('randomuser', {
    				title: 'RandomUsers',
    				males: req.results[0],
    				females: req.results[1]
  		});
};

//Fetching male data from mongodb 
function male_summarize(callb){
	async.waterfall(
    [
        function(callback) {
        	randomUser.distinct("nat",{"gender" : "male"}, function (err, result) {
        	if (err) {	next(err);
        	} else {
            	console.log(result);
            	callback(null, result);
        	}
        });
        },
        function(arg1, callback) {
            console.log(arg1);
            var summary = [], i = 0;
            arg1.forEach((nationality) => {
				console.log("male nationalities are"+nationality);
				randomUser.aggregate([
        			{$match:{$and: [ 
                              {nat:nationality}, 
                              {gender:"male"}
                          ]}
					},
    				{$group: {
            				_id : "$nat",
            				lessThan30: {$sum:  {  $cond: [ { $lte: ["$age", 30 ] }, 1, 0]}},
            				middle50: {$sum:  {$cond: [ {$and:[{ $gt:["$age",30]}, {$lt:["$age",50]} ]}, 1,0]}},
            				moreThan50: {$sum:  { $cond: [ { $gte: ["$age", 50 ] }, 1, 0]}}

    				}}
    				], function (err, result) {
        						if (err) {
            								next(err);
        								} else {
        									//console.log("male");
            								//console.log(result[0]);
            								summary.push(result[0]);
            								i++;
            								if(i == arg1.length){
            									callback(null, summary);
            								}
        								}
        							
    						});
			});

        }
    ],
    function (err, summary) {
        //console.log(summary);
         callb(null,summary);
    });
   
}

//Fetching male data from mongodb 
function female_summarize(callb){
	female_User = new randomUser;
	async.waterfall(
    [
        function(callback) {
        	randomUser.distinct("nat", {"gender" : "female"}, function (err, result) {
        	if (err) {	next(err);
        	} else {
            	console.log(result);
            	callback(null, result);
        	}
        });
        },
        function(arg1, callback) {
            console.log(arg1);
            var summary = [], i = 0;
            arg1.forEach((nationality) => {
				console.log("female nationalities are"+nationality);
				randomUser.aggregate([
        			{$match:{$and: [ 
                              {nat:nationality}, 
                              {gender:"female"}
                          ]}
					},
    				{$group: {
            				_id : "$nat",
            				lessThan30: {$sum:  {  $cond: [ { $lte: ["$age", 30 ] }, 1, 0]}},
            				middle50: {$sum:  {$cond: [ {$and:[{ $gt:["$age",30]}, {$lt:["$age",50]} ]}, 1,0]}},
            				moreThan50: {$sum:  { $cond: [ { $gte: ["$age", 50 ] }, 1, 0]}}

    				}}
    				], function (err, result) {
        						if (err) {
            								next(err);
        								} else {
        									//console.log("male");
            								//console.log(result[0]);
            								summary.push(result[0]);
            								i++;
            								if(i == arg1.length){
            									callback(null, summary);
            								}
        								}
        							
    						});
			});

        }
    ],
    function (err, summary) {
        //console.log(summary);
         callb(null,summary);
    });
   
}


//app.get('/randomUsers', randomCon.isAuthenticated, userController.getAccount);