var React = require('react');
var FetchClientActions = require('../actions/FetchClientActions');
var FetchServerActions = require('../actions/FetchServerActions');
var ProfileStore = require('../stores/ProfileStore');

var Register = React.createClass({
  getInitialState: function() {
    return {
      visitor: ProfileStore.getCurrentUser()
    };
  },

  componentDidMount: function() {
    ProfileStore.addChangeListener(this.refresh);
  },

  refresh: function() {
    this.setState({
      visitor: ProfileStore.getCurrentUser()
    });

    //		console.log('REFRESH: '+JSON.stringify(this.state.visitor));
    if (this.state.visitor.id == null) return;

    if (this.state.visitor.type == 'customer') {
      // user just registered, redirect to account page:
      window.location.href = '/account';
      return;
    }
    if (this.state.visitor.type == 'fetcher') {
      window.location.href = '/orders';
    }
  },

  updateVisitor: function(event) {
    var updatedVisitor = {
      id: this.state.visitor.id,
      name: this.state.visitor.name,
      type: this.state.visitor.type,
      email: this.state.visitor.email,
      password: this.state.visitor.password
    };

    updatedVisitor[event.target.id] = event.target.value;
    console.log('UPDATE VISITOR: ' + JSON.stringify(updatedVisitor));
    FetchClientActions.updateCurrentUser(updatedVisitor);
  },

  register: function(event) {
    console.log('Register: ' + JSON.stringify(this.state.visitor));
    event.preventDefault();
    if (this.state.visitor.name == null) {
      alert('Please Enter Your Name.');
      return;
    }

    if (this.state.visitor.name.length == 0) {
      alert('Please Enter Your Name.');
      return;
    }

    if (this.state.visitor.email.length == 0) {
      alert('Please Enter Your Email.');
      return;
    }

    if (this.state.visitor.password.length == 0) {
      alert('Please Enter Your Password.');
      return;
    }

    FetchServerActions.createProfile(this.state.visitor);
  },

  render: function() {
    return (
      <form
        role="form"
        className="landing-wide-form landing-form-overlay dark nobottommargin clearfix"
        style={{ bottom: 36 }}
      >
        <div className="heading-block nobottommargin nobottomborder">
          <h2 style={{ color: 'white' }}>Fetching your every need</h2>

          <span>Sign up to be a fetcher or a customer</span>
        </div>
        <div className="line" style={{ margin: '20px 0 30px' }}></div>
        <div className="col_full">
          <input
            onChange={this.updateVisitor}
            id="name"
            type="text"
            className="form-control input-lg not-dark"
            placeholder="Your Name"
          />
        </div>
        <div className="col_full">
          <input
            onChange={this.updateVisitor}
            id="email"
            type="email"
            className="form-control input-lg not-dark"
            placeholder="Your Email"
          />
        </div>
        <div className="col_full">
          <input
            onChange={this.updateVisitor}
            id="password"
            type="password"
            className="form-control input-lg not-dark"
            placeholder="Choose Password"
          />
        </div>
        <div className="col_full">
          <select
            onChange={this.updateVisitor}
            id="type"
            className="form-control"
            style={{ background: '#fff' }}
          >
            <option value="customer">Customer</option>
            <option value="fetcher">Fetcher</option>
          </select>
        </div>
        <div className="col_full nobottommargin">
          <button
            onClick={this.register}
            className="btn btn-lg btn-success btn-block nomargin"
            value="submit"
          >
            START NOW
          </button>
        </div>
        <div
          className="col_full nobottommargin"
          style={{ textAlign: 'center', marginTop: 24 }}
        >
          <a href="/login">Log In</a>
        </div>
      </form>
    );
  }
});
module.exports = Register;
