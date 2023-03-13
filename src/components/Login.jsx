import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loginUtil from '../utils/login.js';
import { setLoginState } from '../redux/features/login.js';
import { setUser, unsetUser } from '../redux/features/user.js';

function Login() {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { value: { isLoggedIn } } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  if(isLoggedIn) {
    return (
      <div className="login"></div>
    )
  }
  
  const handleSubmit = function(event) {
    event.preventDefault();
    const [user] = loginUtil(userName, password);
    console.log(user);
    if (user) {
      dispatch(setLoginState({ isLoggedIn: true }));
      dispatch(setUser({
        userName: user.userName,
        name: user.name,
        email: user.email,
      }));

      setUserName('');
      setPassword('');
    } else {
      dispatch(setLoginState({ isLoggedIn: false }));
      dispatch(unsetUser());
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type='text'
        onChange={(e) => setUserName(e.target.value)}
        placeholder={'username'}
      />
      <br />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder={'password'}
      />
      <br />
      <button onClick={(e) => handleSubmit(e)}>
        login
      </button>
    </div>
  );
}

export default Login;