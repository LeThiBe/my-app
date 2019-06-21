import React from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../actions/AppActions';
import { connect } from 'react-redux';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  age: Yup.number()
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  password_confirmation: Yup.string()
		.max(70, 'Too Long!')
	  .min(5, 'Too Short!')
    .required('Required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <Form className="login100-form validate-form" >
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-50 p-r-50 p-b-30">
              <span className="login100-form-title p-b-55">
                Sign Up
              </span>

              <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                <Field className="input100" type="text" name="name" placeholder="Name" />
                  <div className="err-message"><ErrorMessage name="name" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope"></span>
                </span>
              </div>

              <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                <Field className="input100" type="text" name="email" placeholder="Email"/>
                  <div className="err-message"><ErrorMessage name="email" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope"></span>
                </span>
              </div>

             <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                <Field className="input100" type="text" name="age" placeholder="Age" />
                  <div className="err-message"><ErrorMessage name="age" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope"></span>
                </span>
              </div>

              <div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                <Field className="input100" type="password" name="password" placeholder="Password"/>
                  <div className="err-message"><ErrorMessage name="password" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-lock"></span>
                </span>
              </div>

              <div className="wrap-input100 validate-input m-b-16" data-validate = "Password confirmation is required">
                <Field className="input100" type="password" name="password_confirmation" placeholder="Password confirmation"/>
                  <div className="err-message"><ErrorMessage name="password_confirmation" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-lock"></span>
                </span>
              </div>

              <div className="container-login100-form-btn p-t-15">
                <input type="submit" name="submit" id="submit" className="login100-form-btn" value="Sign up"/>
              </div>

              <div className="text-center w-full p-t-25">
                <span className="txt1">
                  Are you really account?
                </span>

                <a className="txt1 bo1 hov1" href="#">
                  Log in now							
                </a>
              </div>
            </div>
          </div>
        </div>
    </Form>
  );
};

const SignupForm = withFormik({
  mapPropsToValues: () => ({
    name: 'be',
    email: 'be@gmail.com',
    age: '22',
    password: '123123',
    password_confirmation: '123123',
  }),
  validationSchema: SignupSchema,
  handleSubmit: async (values, formikBag: FormikBag) => {
    const { setErrors, props: {signup} } = formikBag;
    await signup({ values, meta: { setErrors } });
	},
})(Signup);

export default connect(null, {signup})(SignupForm);