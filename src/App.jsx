import { useState, useEffect } from 'react';
// Branch feature
function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => setApiData(data));

    return () => {};
  }, []);

  return (
    <div>
      <div className="div">
        {Object.keys(apiData).length > 0 && JSON.stringify(apiData)}
      </div>
    </div>
  );
}

export default App;
