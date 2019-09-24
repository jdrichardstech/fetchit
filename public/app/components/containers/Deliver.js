var React = require('react');

var Deliver = React.createClass({
  render: function() {
    return (
      <div>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="heading-block center nobottomborder bottommargin-lg">
                <h1>Want To Be A Fetcher?</h1>
                <span>Join Fetcher and Set the Standard of Rapid Delivery</span>
              </div>

              <div className="col_one_third">
                <div className="feature-box fbox-center fbox-effect">
                  <div className="fbox-icon">
                    <a href="#">
                      <i className="icon-calendar i-alt"></i>
                    </a>
                  </div>
                  <h3>Schedule</h3>
                  <p>You decide what days and hours you work.</p>
                </div>
              </div>

              <div className="col_one_third col_last">
                <div className="feature-box fbox-center fbox-light fbox-effect">
                  <div className="fbox-icon">
                    <a href="#">
                      <i className="icon-thumbs-up"></i>
                    </a>
                  </div>
                  <h3>On Time</h3>
                  <p>Always punctual serving the clients needs.</p>
                </div>
              </div>

              <div className="col_one_third">
                <div className="feature-box fbox-center fbox-dark fbox-effect">
                  <div className="fbox-icon">
                    <a href="#">
                      <i className="icon-clock i-alt"></i>
                    </a>
                  </div>
                  <h3>100% Quality</h3>
                  <p>Represent Fetch with quality fetching</p>
                </div>
              </div>

              <div className="clear"></div>

              <div className="fancy-title title-bottom-border">
                <h3>Your Job As A Fetcher</h3>
              </div>

              <p>
                Fetch and Deliver client orders in a punctual and pleasant
                manner
              </p>

              <div className="accordion accordion-bg clearfix">
                <div className="acctitle">
                  <i className="acc-closed icon-ok-circle"></i>
                  <i className="acc-open icon-remove-circle"></i>Requirements
                </div>
                <div className="acc_content clearfix">
                  <ul className="iconlist iconlist-color nobottommargin">
                    <li>
                      <i className="icon-ok"></i>Good Attitude
                    </li>
                    <li>
                      <i className="icon-ok"></i>Good Communication Skills
                    </li>
                    <li>
                      <i className="icon-ok"></i>Team Player
                    </li>
                    <li>
                      <i className="icon-ok"></i>Computer and iPhone literate
                    </li>
                  </ul>
                </div>

                <div className="acctitle">
                  <i className="acc-closed icon-ok-circle"></i>
                  <i className="acc-open icon-remove-circle"></i>What we Expect
                  from you?
                </div>
                <div className="acc_content clearfix">
                  <ul className="iconlist iconlist-color nobottommargin">
                    <li>
                      <i className="icon-plus-sign"></i>Fetch custom orders for
                      clients
                    </li>
                    <li>
                      <i className="icon-plus-sign"></i>Deliver no questions
                      asked with a positive attitude
                    </li>
                    <li>
                      <i className="icon-plus-sign"></i>Log and claim orders
                      using mobile devices
                    </li>
                  </ul>
                </div>

                <div className="acctitle">
                  <i className="acc-closed icon-ok-circle"></i>
                  <i className="acc-open icon-remove-circle"></i>What you ve
                  got?
                </div>
                <div className="acc_content clearfix">
                  You know New York city like the back of your hand and can
                  reach any destination and find any fetchers item at any given
                  moment. You thrive on punctuality and customer service. You
                  are a team player yet have an entrepreneurial spirit. You love
                  to fetch!
                </div>
              </div>

              <a
                href="#"
                data-scrollto="#job-apply"
                className="button button-3d button-black nomargin"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Deliver;
