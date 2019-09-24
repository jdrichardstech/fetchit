var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <div className="section topmargin-sm footer-stick">
          <section id="content">
            <div className="content-wrap">
              <div className="container clearfix">
                <div className="postcontent nobottommargin col_last clearfix">
                  <img
                    style={{ display: 'block', margin: '0 auto' }}
                    height="200px"
                    width="200px"
                    className="center"
                    alt=" "
                    src="../images/jdprofile_round.png"
                  />
                  <br />
                  <h1 style={{ textAlign: 'center' }}>The Skinny On Me</h1>
                  <p style={{ paddingLeft: 40, fontSize: '2em' }}>
                    Hi, my name is James. But people call me JD. I am an Entry
                    Level Web and iOS Developer who loves learning new
                    technologies and frameworks. I have been an enthusiast of
                    the web for years and just loved learning how computers work
                    in general. Changing careers is interesting. I just finished
                    grabbing an A.A.S degree in Computer Information Systems.
                    But my heart is really in web and iOS development. Outside
                    of that I am into all kinds of music from Electronica to R&B
                    to Opera. I also love speaking a little French and/or German
                    when I have the opportunity. But fair warning, I do sound
                    like an American. Beer is cool, I have nothing against it,
                    but I am a confirmed wine-o, red or white, and enjoy cool
                    conversations about wines. If you wanna know more check me
                    out on Linkedin, Twitter, or my github.
                  </p>
                </div>
                <div
                  style={{ paddingLeft: 75 }}
                  className="clearfix visible-md visible-lg center"
                >
                  <a
                    href="http://www.linkedin.com/in/jdrichardstech"
                    target="_blank"
                    className="social-icon si-small si-borderless si-facebook"
                  >
                    <i className="icon-linkedin"></i>
                    <i className="icon-linkedin"></i>
                  </a>

                  <a
                    href="http://www.twitter.com/jdrichardstech"
                    target="_blank"
                    className="social-icon si-small si-borderless si-twitter"
                  >
                    <i className="icon-twitter"></i>
                    <i className="icon-twitter"></i>
                  </a>
                  <a
                    href="http://www.github.com/jdrichardstech"
                    target="_blank"
                    className="social-icon si-small si-borderless si-twitter"
                  >
                    <i className="icon-github"></i>
                    <i className="icon-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <h4 className="uppercase center" style={{ paddingTop: 20 }}>
            What <span>Colleagues</span> Say?
          </h4>

          <div
            className="fslider testimonial testimonial-full"
            data-animation="fade"
            data-arrows="false"
          >
            <div className="flexslider">
              <div className="slider-wrap">
                <div className="slide">
                  <div className="testi-image">
                    <a href="#">
                      <img
                        src="images/testimonials/brian.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>Gets the job done yet cool to be around</p>
                    <div className="testi-meta">
                      Phil Markin
                      <span>Grid Media</span>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    <a href="#">
                      <img
                        src="images/testimonials/jen.png"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Very dependable guy. Good to work with and great ideas
                    </p>
                    <div className="testi-meta">
                      <span>Homeaway.com</span>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    <a href="#">
                      <img
                        src="images/testimonials/1.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>Working with JD is awesome. The dude never gives up.</p>
                    <div className="testi-meta">
                      John Douglas
                      <span>Simpligy Management Inc.</span>
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

module.exports = About;
