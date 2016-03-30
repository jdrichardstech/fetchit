var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./components/Sidebar');
var Footer = require('./components/Footer');
var Register = require('./components/Register');
var Home = require('./components/containers/Home');
var Orders = require('./components/containers/Orders');
var Account = require('./components/containers/Account');
var Login = require('./components/containers/Login');
var Upload = require('./components/containers/Upload');
var Deliver = require('./components/containers/Deliver');
var About = require('./components/containers/About');
var Developer = require('./components/containers/Developer');


var App = React.createClass({
	getInitialState: function(){
		return {
			page: null
		}
	},

	componentWillMount: function(){
		var path = window.location.pathname.replace('/', ''); // http://localhost:3000/
		var currentPage = 'home';

		if (path.length > 0){ // not a home page request
			var parts = path.split('/');
			currentPage = parts[0];
		}

		this.setState({
			page: currentPage
		});
	},

	render: function(){
//		console.log('RENDER PAGE: '+this.state.page);
		var container = null;
		if (this.state.page == 'home'){
			container = <Home />
		} 
		else if (this.state.page == 'account'){
			container = <Account />
		}
		else if (this.state.page == 'login'){
			container = <Login />
		}
		else if (this.state.page == 'orders'){
			container = <Orders />
		}
		else if (this.state.page == 'upload'){
			container = <Upload />
		}
		else if (this.state.page == 'deliver'){
			container = <Deliver />
		}
		else if (this.state.page == 'about'){
			container = <About />
		}
		else if (this.state.page == 'developer'){
			container = <Developer />
		}

		return(

			<div>
		        <Sidebar />
		        {container}
		        <Footer /> 
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));