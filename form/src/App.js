import './App.css';
import { useRef, useState } from 'react';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#0000");

  const submit = e => {
    e.preventDefault();
    alert(`${title}, ${color}`)
  };

  return (
    <form onSubmit={submit}>
      <input  type='text' placeholder='color title...'/>
      <input  type='color'/>
      <button>ADD</button>
    </form>
  );
}

export default App;
