
import './App.css';

import Login from './components/Login.jsx';
import UserDetails from './components/UserDetails.jsx';
import Logout from './components/Logout.jsx';

function App() {
  return (
    <div>
      <Login />
      <Logout />
      <UserDetails />
    </div>
  )
}

export default App;