//var FetchDispatcher = require('../dispatcher/FetchDispatcher');
//var FetchConstants = require('../constants/FetchConstants');
var APIUtils = require('../utils/APIUtils');

module.exports = {
  createProfile: function(profile) {
    APIUtils.register(profile);
  },

  login: function(profile) {
    APIUtils.login(profile);
  },

  getCurrentUser: function() {
    APIUtils.checkCurrentUser();
  },

  updateProfile: function(profile) {
    APIUtils.updateProfile(profile);
  },

  submitOrder: function(order) {
    // console.log('FETCH SERVER ACTIONS - SUBMIT ORDER: '+JSON.stringify(order));
    APIUtils.createOrder(order);
  },

  fetchOrders: function(params) {
    APIUtils.getOrders(params);
  },

  updateOrder: function(orderId, params) {
    // console.log('UPDATE ORDER - '+orderId+': '+JSON.stringify(params));
    APIUtils.updateOrder(orderId, params);
  }
};
