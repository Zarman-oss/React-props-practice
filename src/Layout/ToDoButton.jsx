import { useEffect, useState } from 'react';

function Button() {
  const { count, setCount } = useState(0);

  useEffect(() => {}, []);
  return <div>Button</div>;
}

export default Button;
