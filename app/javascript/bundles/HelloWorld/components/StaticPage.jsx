// @flow
import React from 'react';
import ListUsers from './ListUsers';
import { Link, NavLink } from 'react-router-dom'
import Modal from 'react-modal';
import { Formik, FormikProps, Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import LoginForm from './form/loginForm';
import HeaderForm from './Header';

class StaticPage extends React.Component {
  render() {
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
          <HeaderForm />
          <div className="container">
            <div className="banner-text">
              <div className="slider-info">
                <h3>We Provide Best Photographer</h3>
                <a className="btn btn-primary mt-3" href="services.html" role="button">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StaticPage;