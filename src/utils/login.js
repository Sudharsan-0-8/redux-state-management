import users from '../dummy-data/data.js';

function login(userName, password) {
  return users.map((user) => {
    if (user.userName == userName && user.password == password) {
      return user;
    }
  });
}

export default login;