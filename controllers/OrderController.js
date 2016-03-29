var Order = require('../models/Order');
var EmailManager = require('../managers/EmailManager');


module.exports = {

	get: function(params, isRaw, completion){
		Order.find(params, function(err, orders){
			if (err){
				completion(err, null);
			    return;
			}

			if (isRaw == true){
				completion(null, orders);
				return;
			}

			var list = [];
			for (var i=0; i<orders.length; i++){
				var order = orders[i];
				list.push(order.summary());
			}

			completion(null, list);
		    return;
		});
	},

	getById: function(id, completion){
		Order.findById(id, function(err, order){
			if (err){
				var error = {message:'Order Not Found'};
				completion(error, null);
			    return;
			}

			if (order == null){
				var error = {message:'Order Not Found'};
				completion(error, null);
			    return;
			}

			completion(null, order.summary());
		});
	},

	post: function(params, completion){

		Order.create(params, function(err, order){
			if (err){
				completion(err, null);
			    return;
			}

			var orderSummary = order.summary;
			var emailText = 'The following order has been placed: '+orderSummary['order']+'<br />Address: '+order['address'];

			EmailManager.sendEmail('info@thegridmedia.com', 'dan.kwon234@gmail.com', 'Order Notification', emailText, null);
			completion(null, order.summary());
		});
	},

	put: function(id, params, completion){

		Order.findByIdAndUpdate(id, params, {new:true}, function(err, order){
			if (err){
				completion(err, null);
			    return;
			}

			// delivery person is claiming an order:
			if (params['fetcher'] != null)
				EmailManager.sendEmail('info@thegridmedia.com', 'dan.kwon234@gmail.com', 'Your Order Has been Claimed.', JSON.stringify(order.summary()), null);
			
			completion(null, order.summary());
		});
	}



}