var React = require('react');



var Deliver = React.createClass({
	render: function(){
		return(

			<div>
				<section id="content">

						<div className="content-wrap">

							<div className="container clearfix">

				<div className="heading-block center nobottomborder bottommargin-lg">
									<h1>Want To Be A Fetcher?</h1>
									<span>Specializes in creating Brand Identity for emerging Startups</span>
				</div>

				<div className="col_one_third">
						<div className="feature-box fbox-center fbox-effect">
							<div className="fbox-icon">
								<a href="#"><i className="icon-calendar i-alt"></i></a>
							</div>
							<h3>Responsive Layout</h3>
							<p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
						</div>
					</div>

					<div className="col_one_third">
						<div className="feature-box fbox-center fbox-dark fbox-effect">
							<div className="fbox-icon">
								<a href="#"><i className="icon-clock i-alt"></i></a>
							</div>
							<h3>Retina Graphics</h3>
							<p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
						</div>
					</div>

					<div className="col_one_third col_last">
						<div className="feature-box fbox-center fbox-light fbox-effect">
							<div className="fbox-icon">
								<a href="#"><i className="icon-thumbs-up"></i></a>
							</div>
							<h3>On Time</h3>
							<p>Canvas includes tons of optimized code that are completely customizable and deliver fast performance.</p>
						</div>
					</div>

					<div className="clear"></div>
				
								

							
							</div>
						</div>

				</section>
			</div>
			);
	}
});

module.exports = Deliver;