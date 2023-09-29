import { useEffect, useState } from 'react';

function Button() {
  const { count, setCount } = useState(0);

  useEffect(() => {
    count - 1;
  }, [setCount, count]);
  return <div>Button</div>;
}

export default Button;
