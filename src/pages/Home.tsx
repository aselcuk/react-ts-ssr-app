import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => { setCount(count => count + 1) }}>Counter</button>
      <Link to='/about'>
        go to about page
      </Link>
    </div>
  )
}
