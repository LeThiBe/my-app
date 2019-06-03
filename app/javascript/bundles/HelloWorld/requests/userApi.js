// @flow
import AxiosRequest from './axiosRequest';

class User extends AxiosRequest {
  getUsersData = () => this.get('/v1/users');
}

const UserApi = new User();

export default UserApi;