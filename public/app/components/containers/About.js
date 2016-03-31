var React = require('react');



var About = React.createClass({
	render: function(){
		return(

			<div>

				<div className="section topmargin-sm footer-stick">
					<section id="content">

						<div className="content-wrap">

							<div className="container clearfix">

								
								<div className="postcontent nobottommargin col_last clearfix">
								<img style={{display:'block', margin:'0 auto'}}height="150px" width="150px" className="center"alt = " " src="../images/jdgrafitti_round.png" />
									<br />
									<h1 style={{textAlign:'center'}}>About the Developer</h1>
									<p style={{paddingLeft:40}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eos quibusdam accusamus. Maiores, distinctio similique at fugiat reiciendis corporis pariatur. Iusto, molestiae odio ullam quas ratione! Explicabo, sunt, totam mollitia eveniet quasi commodi maxime impedit quos magni deleniti? Laborum, ad, necessitatibus minima officiis mollitia commodi quia dolore enim animi doloribus.</p>

									<p style={{paddingLeft:40}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, tempora, ullam tempore dicta consectetur qui enim earum odio nobis cum perspiciatis possimus expedita quae suscipit quibusdam ipsam aperiam atque dignissimos illo commodi quaerat temporibus consequuntur nemo fuga neque minus iusto natus vero dolor id cupiditate placeat esse ratione recusandae dolorem aliquam eius facilis repellat architecto reprehenderit odit rerum totam modi corporis pariatur doloribus magni error porro harum sint! Libero, consequatur, tempore minima tenetur quo vel modi incidunt officiis doloribus enim facere atque iusto cupiditate sint illum cumque iste reprehenderit nihil dolores saepe repellendus rerum dolore minus fugiat harum fugit dicta.</p>

								</div>
								<div className="clearfix visible-md visible-lg">
			                        <a href="http://www.linkedin.com/in/jdrichardstech" target="_blank" className="social-icon si-small si-borderless si-facebook">
			                            <i className="icon-linkedin"></i>
			                            <i className="icon-linkedin"></i>
			                        </a>

			                        <a href="http://www.twitter.com/jdrichardstech" target="_blank" className="social-icon si-small si-borderless si-twitter">
			                            <i className="icon-twitter"></i>
			                            <i className="icon-twitter"></i>
			                        </a>
			                         <a href="http://www.github.com/jdrichardstech" target="_blank" className="social-icon si-small si-borderless si-twitter">
			                            <i className="icon-github"></i>
			                            <i className="icon-github"></i>
			                        </a>
			                    </div>

							</div>
						</div>
					</section>

					<h4 className="uppercase center" style={{paddingTop:20}}>What <span>Clients</span> Say?</h4>

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