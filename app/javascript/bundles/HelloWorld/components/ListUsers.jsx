import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/AppActions';
import { usersSelector } from '../selectors/userSelector'

class ListUsers extends React.Component<any, any> {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    
    return (
      <div className="row">
      <ul>
        {
          users && users.map(user => 
            <li>
            {
              user.name
            }
            </li>
          )
        }
      </ul>
      </div>
    );
  }
}

export default connect(
  usersSelector,
  {
    getUsers,
  },
)(ListUsers);