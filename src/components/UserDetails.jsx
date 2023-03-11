import { useSelector } from 'react-redux';

function UserDetails() {

  const { value: user } = useSelector((state) => state.user);
  const { value: { isLoggedIn } } = useSelector((state) => state.login);

  return (
    <div>
      UserName: {user.userName}
      <br />
      Name: {user.name}
      <br />
      Mail: {user.email}
    </div>
  );
}

export default UserDetails;