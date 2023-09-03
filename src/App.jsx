import { useState } from 'react';

function App() {
  const [isOpen, setisOpen] = useState(true);

  return (
    <div>
      <div className="div">
        <button onClick={() => setisOpen(!isOpen)}>
          {isOpen ? 'Close the gate' : 'Open the gate'}
        </button>
        <h2>Gate is {isOpen ? 'Open' : 'Closed'}</h2>
      </div>
    </div>
  );
}

export default App;
