import { useState } from 'react';
import Data from './Data';
import Dashboard from './layout/Dashboard';

function App() {
  const [user, userData] = useState(Data);

  return (
    <div>
      <Dashboard user={user} />
    </div>
  );
}

export default App;
