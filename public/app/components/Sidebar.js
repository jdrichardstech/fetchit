var React = require('react');

var Sidebar = React.createClass({


	
	
	render: function(){
		return (
	        <header id="header" className="no-sticky">

	            <div id="header-wrap">
	                <div className="container clearfix">
	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
	                    <div id="logo" className="nobottomborder">
	                        <a href="/" className="standard-logo" data-dark-logo="images/logo-side.png">
	                        	<img src="images/logo-side.png" alt="Canvas Logo" />
	                        </a>
	                        <a href="/" className="retina-logo" data-dark-logo="images/logo-side.png">
	                        	<img src="images/logo-side.png" alt="Canvas Logo" />
	                        </a>
	                    </div>

	                    <nav id="primary-menu">
	                        <ul>
	                            <li>
	                                <a href="/"><div>Home</div></a>
	                            </li>
	                            <li>
	                                <a href="/about"><div>About</div></a>
	                            </li>
	                            <li>
	                                <a href="/deliver"><div>Want To Be A Fetcher?</div></a>
	                            </li>    
	                        </ul>
	                    </nav>
	                </div>
	            </div>
	        </header>			
		);
	}

});

module.exports = Sidebar;