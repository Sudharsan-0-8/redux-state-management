import { useState } from 'react';
import { useDispatch } from 'react-redux';

import loginUtil from '../utils/login.js';
import { setLoginState } from '../redux/features/login.js';
import { setUser, unsetUser } from '../redux/features/user.js';

function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = function(event) {
    event.preventDefault();
    const [user] = loginUtil(userName, password);
    if (user != null) {
      dispatch(setLoginState(true));
      dispatch(setUser({
        userName: user.userName,
        password: user.password,
        email: user.email,
      }));
    } else {
      dispatch(setLoginState(false));
      dispatch(unsetUser());
    }
  }

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>
        login
      </button>
    </div>
  );
}

export default Login;