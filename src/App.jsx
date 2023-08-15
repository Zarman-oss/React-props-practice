import { useState } from 'react';
=======
// import { useState } from 'react';
  // Branch feature
// import Data from './Data';
import UserList from './layout/UserList';
import { UserProvider } from './context/UserContext';


function App() {
  // const [user, userData] = useState(Data);

  return (
    <UserProvider>
      <div>
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
