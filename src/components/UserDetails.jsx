import { useSelector } from 'react-redux';

function UserDetails() {

  const { value: user } = useSelector((state) => state.user);
  const { value: { isLoggedIn } } = useSelector((state) => state.login);

  if(!isLoggedIn) {
    return (
      <div>
        no user is logged in
      </div>
    )
  }
  
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        UserName: {user.userName}
        <br />
        Name: {user.name}
        <br />
        Mail: {user.email}
      </div>
    </div>
  );
}

export default UserDetails;