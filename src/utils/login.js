import users from '../dummy-data/data.js';

function login(userName, password) {
  return users.filter((user) => {
    return (user.userName == userName.toLowerCase() && user.password == password) 
  });
}

export default login;