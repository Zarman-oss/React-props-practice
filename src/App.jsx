import { useEffect, useReducer } from 'react';
// Branch feature

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count + 1 };
    case 'setEven':
      return {
        ...state,
        isEven: action.payload,
      };
    default:
      throw new Error();
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, isEven: 'false' });
  // const [count, setCount] = useState(0);
  // const [isEven, setIsEven] = useState(true);
  useEffect(() => {
    const isCountEven = state.count % 2 === 0;
    dispatch({ type: 'setEven', payload: isCountEven });
  }, [state.count]);

  return (
    <div>
      <div className="div">
        <h1>Count : {state.count}</h1>
        <h2>{'Even number: ' + state.isEven} </h2>
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
