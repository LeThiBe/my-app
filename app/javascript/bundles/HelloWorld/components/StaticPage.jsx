// @flow
import React from 'react';
import ListUsers from './ListUsers';
import { Link, NavLink } from 'react-router-dom'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class StaticPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      username: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.username)
    event.preventDefault()
  }

  render() {
    return (
      <React.Fragment>    
        <div className="banner" id="home">
          <div className="top-head py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 callnumber text-left">
                </div>
                <div className="col-md-6 callnumber text-right">
                  <li className="mr-3">Australia : +5687567890</li>
                  <li>Newyork : +4584567890</li>
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

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Sign Up</h2>
          <button onClick={() => this.closeModal()}>close</button>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.username}
              onChange={() => this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </Modal>

      </React.Fragment>
    );
  }
}

export default StaticPage;
