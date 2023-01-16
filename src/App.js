import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <!-- navigation --> */}

      <div className="container">
        <div className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand"><img src="images/logo.png" className="img-responsive" alt="logo" /></a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="index.html" className="active">HOME</a></li>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="portfolio.html">PORTFOLIO</a></li>
              <li><a href="contact.html">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- home section --> */}
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-3"></div>
            <div className="col-md-7 col-sm-9">
              <h3>welcome to</h3>
              <h1>Onetel Design Studio</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- divider section --> */}
      <div className="divider">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-one">
                <i className="fa fa-laptop"></i>
                <h2>Responsive</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-two">
                <i className="fa fa-mobile"></i>
                <h2>Easy to use</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="divider-wrapper divider-three">
                <i className="fa fa-life-ring"></i>
                <h2>Quick Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- about section --> */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="images/about-img.jpg" className="img-responsive" alt="about img" />
            </div>
            <div className="col-md-6 col-sm-12 about-des">
              <h2>Startup Business</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
              <a href="about.html" className="btn btn-default">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- portfolio section --> */}
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Recent Projects</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
            </div>
          </div>

          <div className="row mt30">

            <div className="col-md-4 col-sm-4 col-xs-6">
              <a href="images/portfolio-img1.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img1.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <a href="images/portfolio-img2.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img2.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <a href="images/portfolio-img3.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img3.jpg" alt="portfolio img" /></a>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6">
              <a href="images/portfolio-img4.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img4.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <a href="images/portfolio-img5.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img5.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <a href="images/portfolio-img6.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img6.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="images/portfolio-img7.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img7.jpg" alt="portfolio img" /></a>
            </div>
            <div className="col-md-12 col-sm-12">
              <a rel="nofollow" href="http://www.templatemo.com/tag/darkgray" className="btn btn-default">View More</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer section --> */}
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-md-5 col-sm-4">
              <img src="images/logo.png" className="img-responsive" alt="logo" />
              <p>Onetel is free Bootstrap v3.3.5 HTML5 layout from
                <a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent">templatemo</a> website.
                Feel free to use it for your website.</p>
              <p><i className="fa fa-phone"></i> 010-020-0340</p>
              <p><i className="fa fa-envelope-o"></i> info@company.com</p>
              <p><i className="fa fa-globe"></i> www.company.com</p>
            </div>

            <div className="col-md-3 col-sm-4">
              <h3>Useful Links</h3>
              <p><a href="#">HTML5 Templates</a></p>
              <p><a href="#">CSS3 Tricks</a></p>
              <p><a href="#">Design Blog</a></p>
              <p><a href="#">Animations</a></p>
            </div>

            <div className="col-md-4 col-sm-4 newsletter">
              <h3>Newsletter</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
              <div className="input-group">
                <form action="#" method="post">
                  <input name="email" type="email" placeholder="Enter your email" className="form-control" autorequired />
                  <button type="submit" name="submit" className="btn email">Submit</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* <!-- copyright section --> */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p>Copyright © 2084 Company Name</p>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="social-icons">
                <li><a href="#" className="fa fa-facebook"></a></li>
                <li><a href="#" className="fa fa-twitter"></a></li>
                <li><a href="#" className="fa fa-dribbble"></a></li>
                <li><a href="#" className="fa fa-pinterest"></a></li>
                <li><a href="#" className="fa fa-behance"></a></li>
                <li><a href="#" className="fa fa-envelope-o"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
