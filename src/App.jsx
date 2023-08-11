import { useState } from 'react';
import Data from './Data';
import UserList from './layout/UserList';
function App() {
  const [user, userData] = useState(Data);

  return (
    <div>
      <UserList user={user} />
    </div>
  );
}

export default App;
