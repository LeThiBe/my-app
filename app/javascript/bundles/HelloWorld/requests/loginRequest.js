// @flow
import AxiosRequest from './axiosRequest';

class Login extends AxiosRequest {
  login = (data: any) => this.post({url: '/v1/login', data });
}

const LoginRequest = new Login();
export default LoginRequest;