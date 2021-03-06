var Order = require('../models/Order');
var EmailManager = require('../managers/EmailManager');
var FileManager = require('../managers/FileManager');
var ProfileController = require('../controllers/ProfileController');
var fs = require('fs');
var Promise = require('bluebird');

//--------------Promise Methods ---------------------

//moved to a File manager class
// var fetchFile = function(path){
// 	return new Promise(function (resolve, reject){
// 		fs.readFile(path, 'utf8', function(err,data){
// 			if(err){
// 				reject(err);
// 			}
// 			else{
// 				resolve(data);
// 			}

// 		});

// 	});
// }

// filters are the profiles, note is body of html and subject is the subject notification
//this function should be moved to the profile controller
// var notifyProfiles= function(filters, note, subject){
// 	return new Promise(function (resolve,reject){
// 		ProfileController.get(filters, false, function(err, results){
// 			if (err){
// 				reject(err);
// 			}
// 			else{
// 				var recipients = [];
// 				for (var i=0; i<results.length; i++){
// 					var fetcher = results[i];
// 					recipients.push(fetcher.email);
// 				}

// 				EmailManager.sendBatchEmail('jdrichardstech@gmail.com', recipients, subject, note, null);
// 				resolve();
// 			}
// 		});

// 	});
// }

//this also worked with argument below simply customer.order instead of _id:customer.order
var notifyProfile = function(filters, note, subject) {
  return new Promise(function(resolve, reject) {
    ProfileController.getById(filters, function(err, profile) {
      if (err) {
        reject(err);
      } else {
        EmailManager.sendEmail(
          'jdrichardstech@gmail.com',
          profile.email,
          subject,
          note,
          null
        );
        resolve();
      }
    });
  });
};

module.exports = {
  get: function(params, isRaw, completion) {
    Order.find(params, function(err, orders) {
      if (err) {
        completion(err, null);
        return;
      }

      if (isRaw == true) {
        completion(null, orders);
        return;
      }

      var list = [];
      for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        list.push(order.summary());
      }

      completion(null, list);
      return;
    });
  },

  getById: function(id, completion) {
    Order.findById(id, function(err, order) {
      if (err) {
        var error = { message: 'Order Not Found' };
        completion(error, null);
        return;
      }

      if (order == null) {
        var error = { message: 'Order Not Found' };
        completion(error, null);
        return;
      }

      completion(null, order.summary());
    });
  },

  post: function(params, completion) {
    Order.create(params, function(err, order) {
      if (err) {
        completion(err, null);
        return;
      }

      var path = 'public/email/email.html';
      FileManager.fetchFile(path)
        .then(function(data) {
          var orderSummary = order.summary();
          // html = data;
          var html = data.replace('{{address}}', orderSummary['address']);
          html = html.replace('{{order}}', orderSummary['order']);

          return ProfileController.notifyProfiles(
            { type: 'fetcher' },
            html,
            'An Order Came In'
          );

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
        })
        .catch(function(err) {});

      completion(null, order.summary());
    });
  },

  put: function(id, params, completion) {
    Order.findByIdAndUpdate(id, params, { new: true }, function(err, order) {
      if (err) {
        completion(err, null);
        return;
      }

      // delivery person is claiming an order:
      if (params['fetcher'] != null) {
        var path = 'public/email/customernotification.html';
        FileManager.fetchFile(path)
          .then(function(data) {
            var orderSummary = order.summary();
            // var html = data;
            var html = data.replace('{{order}}', order.order);
            return ProfileController.notifyProfiles(
              { _id: order.customer },
              html,
              'Fetch Order Claimed'
            );
          })
          .catch(function(err) {});

        // fs.readFile(path, 'utf8', function (err, data) {
        // 	if (err) { }

        // 	// var orderSummary = order.summary();
        // 	// var html = data;
        // 	// html = html.replace('{{order}}', order.order);

        // 	// ProfileController.getById(order.customer, function(err, profile){
        // 	// 	if (err){

        // 	// 	}

        // 	// 	EmailManager.sendEmail('jdrichardstech@gmail.com', profile.email, 'Your Order Has been Claimed.', html, null);
        // 	// });
        // });
      }

      completion(null, order.summary());
    });
  }
};
