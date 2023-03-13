import { useDispatch, useSelector } from 'react-redux';

import { setLoginState } from '../redux/features/login.js';
import { unsetUser } from '../redux/features/user.js';

function Logout() {

  const { value: { isLoggedIn } } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  if(!isLoggedIn) {
    return (
      <div className="logout"></div>
    )
  }
  
  const logout = function(event) {
    event.preventDefault();
    dispatch(setLoginState({ isLoggedIn: false }));
    dispatch(unsetUser());
  }
  
  return (
    <div className="logout">
      <button 
        onClick={logout}
      >logout</button>
    </div>
  );
}

export default Logout;