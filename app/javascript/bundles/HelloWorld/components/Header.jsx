// @flow
import React from 'react';
import LoginForm from '../form/loginForm';

const Header = () => (
  <div className="banner" id="home">
    <div className="top-head py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 callnumber text-left">
          </div>
        </div>
      </div>
    </div>

    <div>
      <nav className="mnu navbar-light">
        <div className="logo" id="logo">
          <h1><a href="index.html">Fotog</a></h1>
        </div>
        <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li className="mr-lg-4 mr-3 active"><a href="index.html">Home</a></li>
          <li className="mr-lg-4 mr-3">
            <label htmlFor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" ></span> </label>
            <a href="#">Dropdown <span className="fa fa-angle-down" ></span></a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li><a href="services.html">Services</a></li>
              <li><a href="gallery.html">Gallery</a></li>
            </ul>
          </li>

          <li className="mr-lg-4 mr-3" ><a onClick={() => this.openModal()} href="#">Log In</a></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
              
    <div className="container">
      <div className="banner-text">
        <div className="slider-info">
          <h3>We Provide Best Photographer</h3>
          <a className="btn btn-primary mt-3" href="services.html" role="button">Read more</a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;