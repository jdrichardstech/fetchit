var React = require('react');
var ProfileStore = require('../../stores/ProfileStore');
var OrderStore = require('../../stores/OrderStore');
var FetchServerActions = require('../../actions/FetchServerActions');
var FetchClientActions = require('../../actions/FetchClientActions');
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
var Time = require('react-time');

var Orders = React.createClass({
  getInitialState: function() {
    return {
      currentUser: ProfileStore.getCurrentUser(),
      orders: OrderStore.getOrders('array'),
      selectedOrder: {
        id: null,
        order: '',
        address: '',
        fetcher: '',
        status: '',
        timeplaced: Date.now,
        cost: 0
      },
      showModal: false
    };
  },

  componentDidMount: function() {
    ProfileStore.addChangeListener(this.refreshCurrentUser);
    OrderStore.addChangeListener(this.refreshOrders);
    FetchServerActions.getCurrentUser();
  },

  refreshCurrentUser: function() {
    this.setState({
      currentUser: ProfileStore.getCurrentUser()
    });

    console.log('REFRESH: ' + JSON.stringify(this.state.currentUser));
    if (this.state.currentUser.id == null) return;

    if (this.state.currentUser.type != 'fetcher') {
      alert('You are not authorized to view this page!');
      return;
    }

    FetchServerActions.fetchOrders({
      status: 'pending'
    });
  },

  refreshOrders: function() {
    if (this.state.selectedOrder.id == null) {
      this.setState({
        orders: OrderStore.getOrders('array')
      });

      return;
    }

    // var order = OrderStore.getOrder(this.state.selectedOrder.id);
    // console.log(JSON.stringify(order));

    this.setState({
      orders: OrderStore.getOrders('array'),
      selectedOrder: OrderStore.getOrder(this.state.selectedOrder.id)
    });
  },

  claimOrder: function(event) {
    var order = this.state.orders[event.target.id];
    if (order.fetcher.length > 0) {
      alert('This order was already claimed. Sorry!');
      return;
    }

    console.log('Claim Order: ' + JSON.stringify(order));
    FetchServerActions.updateOrder(order.id, {
      fetcher: this.state.currentUser.id
    });
  },

  closeModal: function() {
    this.setState({
      showModal: false
    });
  },

  showModal: function(event) {
    event.preventDefault();
    // var order = this.state.orders['fetcher'];
    // var status = this.state.orders['status'];
    // if(order != this.state.currentUser.id){
    // 	this.setState({
    // 	selectedOrder: OrderStore.getOrder(event.target.id),
    // 	showModal: false
    // });
    // 	alert("This order has been claimed. Fetch again!");

    // 	return;
    // }

    var order = OrderStore.getOrder(event.target.id);
    if (order.fetcher == '') {
      alert('to update please claim order');
      return;
    }

    if (order.fetcher != this.state.currentUser.id) {
      alert('nice try');
      return;
    }

    if (order.status == 'delivered') {
      alert('already delivered');
      return;
    }

    this.setState({
      selectedOrder: OrderStore.getOrder(event.target.id),
      showModal: true
    });
  },

  updateSelectedOrder: function(event) {
    event.preventDefault();
    var order = Object.assign({}, this.state.selectedOrder);
    order['cost'] = event.target.value;
    FetchClientActions.updateSelectedOrder(order);
  },

  saveSelectedOrder: function(event) {
    console.log('saveSelectedOrder' + JSON.stringify(this.state.selectedOrder));
    var orderId = this.state.selectedOrder.id;
    var params = {
      cost: this.state.selectedOrder.cost,
      status: 'delivered',
      timeDelivered: Date.now()
    };

    FetchServerActions.updateOrder(orderId, params);
    this.setState({
      showModal: false
    });
  },

  truncate: function(text, limit) {
    if (text.length < limit) return text;

    return text.substring(0, limit) + '...';
  },

  render: function() {
    var orderList = null;
    var _this = this;
    var row = null;

    if (this.state.orders != null) {
      orderList = this.state.orders.map(function(order, i) {
        // if(order.status =="delivered"){
        // 	row = '';
        // }
        if (order.fetcher.length > 0) {
          // this order is claimed
          row = (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <a onClick={_this.showModal} id={order.id} href="#">
                  {_this.truncate(order.order, 20)}
                </a>
              </td>
              <td>{order.address}</td>
              <td>{order.status}</td>
              <td>
                <Time value={order.timeplaced} format="YYYY/MM/DD" />
              </td>
              <td>
                <button
                  onClick={_this.claimOrder}
                  id={i}
                  className="btn btn-danger"
                >
                  Claimed
                </button>
              </td>
            </tr>
          );
        } else {
          row = (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <a onClick={_this.showModal} id={order.id} href="#">
                  {_this.truncate(order.order, 20)}
                </a>
              </td>
              <td>{order.address}</td>
              <td>{order.status}</td>
              <td>
                <Time value={order.timeplaced} format="YYYY/MM/DD" />
              </td>
              <td>
                <button
                  onClick={_this.claimOrder}
                  id={i}
                  className="btn btn-success"
                >
                  Claim
                </button>
              </td>
            </tr>
          );
        }

        return row;
      });
    }

    return (
      <div className="container" style={{ padding: 60, minHeight: 300 }}>
        <h1>
          Welcome {this.state.currentUser.firstName.toUpperCase()}{' '}
          <i className="fa fa-thumbs-o-up" /> ! <br />
          Please Pick a Delivery Job
        </h1>
        <table className="table" style={{ fontSize: 16 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <span style={{ fontFamily: 'Lato', fontSize: 14 }}>Orders</span>
              </th>
              <th>
                <span style={{ fontFamily: 'Lato', fontSize: 14 }}>
                  {' '}
                  Address
                </span>
              </th>
              <th>
                <span style={{ fontFamily: 'Lato', fontSize: 14 }}>Status</span>
              </th>
              <th>
                <span style={{ fontFamily: 'Lato', fontSize: 14 }}>
                  Placed;
                </span>
              </th>
              <th>
                <span style={{ fontFamily: 'Lato', fontSize: 14 }}>&nbsp;</span>
              </th>
            </tr>
          </thead>
          <tbody>{orderList}</tbody>
        </table>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header
            closeButton
            style={{ textAlign: 'center', padding: 32 }}
          >
            <h2>{this.state.selectedOrder.order}</h2>
          </Modal.Header>
          <Modal.Body>
            <p style={{ textAlign: 'center' }}>
              {this.state.selectedOrder.address}
            </p>
            <input
              onChange={this.updateSelectedOrder}
              value={this.state.selectedOrder.cost}
              className="form-control"
              type="text"
              placeholder="Cost"
            />
            <button
              onClick={this.saveSelectedOrder}
              className="btn btn-success"
            >
              Done
            </button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

module.exports = Orders;
