var Profile = require('../models/Profile');
var bcrypt = require('bcrypt');
var EmailManager = require('../managers/EmailManager');
var FileManager = require('../managers/FileManager');
var fs = require('fs');
var Promise = require('bluebird');

module.exports = {

	get: function(params, isRaw, completion){
		Profile.find(params, function(err, profiles){
			if (err){
				completion(err, null);
			    return;
			}

			if (isRaw == true){
				completion(null, profiles);
				return;
			}

			var list = [];
			for (var i=0; i<profiles.length; i++){
				var profile = profiles[i];
				list.push(profile.summary());
			}

			completion(null, list);
		    return;
		});
	},

	getById: function(id, completion){
		Profile.findById(id, function(err, profile){
			if (err){
				var error = {message:'Profile Not Found'};
				completion(error, null);
			    return;
			}

			if (profile == null){
				var error = {message:'Profile Not Found'};
				completion(error, null);
			    return;
			}

			completion(null, profile.summary());
		});
	},

	post: function(params, completion){
		// Hash the password:
		var hashedPassword = bcrypt.hashSync(params['password'], 10); // w3$rpfjaqpw3fr2134faw
		params['password'] = hashedPassword;

		Profile.create(params, function(err, profile){
			if (err){
				completion(err,null);
				return;
			}

			var path = 'public/email/newcustomernoticfication.html';
			FileManager.fetchFile(path)
			.then(function(data){
				var profileSummary = profile.summary();
				var html = data;
				// var html = data.replace('{{address}}', orderSummary['address']);
				// html = html.replace('{{order}}', orderSummary['order']);

				return ProfileController.notifyProfiles(profile.summary(), html, 'You have successfully registered');

				//this block is now place in the notifyProfiles function
				// 	ProfileController.get({type:'fetcher'}, false, function(err, results){
				// 	if (err){

				// 	}

				// 	var recipients = [];
				// 	for (var i=0; i<results.length; i++){
				// 		var fetcher = results[i];
				// 		recipients.push(fetcher.email);
				// 	}

				// 	EmailManager.sendBatchEmail('jdrichardstech@gmail.com', recipients, 'Order Notification Promise', html, null);
				// });
					EmailManager.sendEmail('jdrichardstech@gmail.com', profile.email, subject, note, null);
				resolve();

			})
			.catch(function(err){

				});




			completion(null, profile.summary());
		});
	},

	put: function(id, params, completion){

		Profile.findByIdAndUpdate(id, params, {new:true}, function(err, profile){
			if (err){
				completion(err, null);
			    return;
			}

			completion(null, profile.summary());
		});
	},

	
	//send batch email to profiles that fit filters
	notifyProfiles: function(filters, note, subject){
		return new Promise(function (resolve,reject){
			
				Profile.find(filters, function(err, profiles){
				if (err){
					reject(err)
				}
				else{

					var recipients = [];
					for (var i=0; i<profiles.length; i++){
						var profile = profiles[i];
						recipients.push(profile.email);
					}

					EmailManager.sendBatchEmail('jdrichardstech@gmail.com', recipients, subject, note, null);
					resolve();
				}
			});
			// ProfileController.get(filters, false, function(err, results){
			// 	if (err){
			// 		reject(err);
			// 	}
			// 	else{
			// 		var recipients = [];
			// 		for (var i=0; i<results.length; i++){
			// 			var fetcher = results[i];
			// 			recipients.push(fetcher.email);
			// 		}

			// 		EmailManager.sendBatchEmail('jdrichardstech@gmail.com', recipients, subject, note, null);
			// 		resolve();
			// 	}
			// });

		});
	}




}