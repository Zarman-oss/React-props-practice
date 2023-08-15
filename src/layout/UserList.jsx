import Dashboard from './Dashboard';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserList() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user || user.length === 0) {
    return <h1>No user data ._.</h1>;
  }

  return (
    <div>
      {user.map((item) => (
        <Dashboard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default UserList;
