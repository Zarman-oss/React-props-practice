import { useEffect, useState } from 'react';

function Button() {
  const { count, setCount } = useState(0);

  useEffect(() => {
    setCount + 1;
  }, [count]);
  return <div>Button</div>;
}

export default Button;
