import Dashboard from './Dashboard';

function UserList({ user }) {
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
