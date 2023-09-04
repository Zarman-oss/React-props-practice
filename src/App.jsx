import { useState, useEffect } from 'react';
// Branch feature
function App() {
  const [count, setCount] = useState(0);
  const [isEven, setisEven] = useState(true);
  useEffect(() => {
    if (count % 2 == 0) {
      setisEven(true);
    } else {
      setisEven(false);
    }
  }, [count]);

  return (
    <div>
      <div className="div">
        <h1>Count : {count}</h1>
        <h2>{'Even number: ' + isEven} </h2>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
