import './App.css';
import { useRef, useState } from 'react';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#0000");

  const submit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`)
    /* Resets values */
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type='text' placeholder='color title...'/>
      <input ref={hexColor} type='color'/>
      <button>ADD</button>
    </form>
  );
}

export default App;
