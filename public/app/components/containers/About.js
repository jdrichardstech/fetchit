var React = require('react');



var About = React.createClass({
	render: function(){
		return(

			<div>

										<div className="section topmargin-sm footer-stick">

					<h4 className="uppercase center">What <span>Clients</span> Say?</h4>

					<div className="fslider testimonial testimonial-full" data-animation="fade" data-arrows="false">
						<div className="flexslider">
							<div className="slider-wrap">
								<div className="slide">
									<div className="testi-image">
										<a href="#"><img src="images/testimonials/3.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. Repellendus, vero numquam?</p>
										<div className="testi-meta">
											Steve Jobs
											<span>Apple Inc.</span>
										</div>
									</div>
								</div>
								<div className="slide">
									<div className="testi-image">
										<a href="#"><img src="images/testimonials/2.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
										<div className="testi-meta">
											
											<span>Envato Inc.</span>
										</div>
									</div>
								</div>
								<div className="slide">
									<div className="testi-image">
										<a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
									</div>
									<div className="testi-content">
										<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
										<div className="testi-meta">
											John Doe
											<span>XYZ Inc.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>


			</div>
			);
	}

});

module.exports=About;