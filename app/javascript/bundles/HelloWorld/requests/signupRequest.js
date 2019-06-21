// @flow
import AxiosRequest from './axiosRequest';

class SignUp extends AxiosRequest {
  signup = (data: any) => this.post({ url: 'http://localhost:3000/v1/signup', data });
}

const SignupRequest = new SignUp();

export default SignupRequest;
