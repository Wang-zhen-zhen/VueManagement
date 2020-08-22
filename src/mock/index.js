import Mock from 'mockjs'
import User from './user'
import Users from './users'

Mock.mock('login', 'post', () => {
  return User.userInfo
})

Mock.mock(RegExp('users' + '*'), 'get', () => {
  return Users.usersInfo
})