import { createSelector } from 'reselect';

export const selector = state => state.user

export const usersSelector = createSelector(
  selector, user => ({ users: user.users })
)