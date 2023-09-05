import { useState, useEffect, useReducer } from 'react';
// Branch feature

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);
  const [isEven, setisEven] = useState(true);
  useEffect(() => {
    if (state.count % 2 == 0) {
      setisEven(true);
    } else {
      setisEven(false);
    }
  }, [state.count]);

  return (
    <div>
      <div className="div">
        <h1>Count : {state.count}</h1>
        <h2>{'Even number: ' + isEven} </h2>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
