// @flow
import React from 'react';
import ListUsers from './ListUsers';
import { Link, NavLink } from 'react-router-dom'
import Modal from 'react-modal';
import { Formik, FormikProps, Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import LoginForm from './form/loginForm';

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

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

class headerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      username: ''
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  handleChange = event => {
    this.setState({ username: event.target.value });
  }

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    return (
      <React.Fragment>    
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
        <Modal isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example">
          <LoginForm
            values={values}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

const StaticPage = withFormik({
  mapPropsToValues: () => ({
      name: '',
      password: '',
      email: '',
    }),
    validationSchema: SignupSchema,
    handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(headerForm);

export default StaticPage;