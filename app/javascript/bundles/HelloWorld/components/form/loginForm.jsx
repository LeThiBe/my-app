import React from 'react';
import { Form, Field, ErrorMessage, withFormik, FormikBag } from 'formik';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { login } from '../../actions/AppActions'


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const Login = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Form className="login100-form validate-form" onSubmit={handleSubmit}>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-50 p-r-50 p-b-30">
              <span className="login100-form-title p-b-55">
                Login
              </span>

              {/* <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                <Field className="input100" type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                  <div className="err-message"><ErrorMessage name="name" /></div>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope"></span>
                </span>
              </div> */}

              <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                <Field className="input100" type="text" name="email" placeholder="Email"/>
                  <div className="err-message"><ErrorMessage name="email" /></div>
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

              <div className="contact100-form-checkbox m-l-4">
                <Field className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>
              
              <div className="container-login100-form-btn p-t-15">
              	<input type="submit" name="submit" id="submit" className="login100-form-btn" value="Login"/>
              </div>

              <div className="text-center w-full p-t-25">
                <span className="txt1">
                  Not a member?
                </span>

                <a className="txt1 bo1 hov1" href="#">
                  Sign up now							
                </a>
              </div>
            </div>
          </div>
        </div>
    </Form>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: () => ({
    password: '123123',
    email: 'le.thi.be@sun-asterisk.com',
  }),
  validationSchema: LoginSchema,
  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: {login} } = formikBag;
    login({ values, meta: { setErrors } });
  },
})(Login);

export default connect(null, {login})(LoginForm);