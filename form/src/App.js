import './App.css';
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#0000");

  const submit = e => {
    e.preventDefault();
    alert(`${title}, ${color}`)
    setTitle("");
    setColor("#000");
  };

  return (
    <form onSubmit={submit}>
      <input 
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        type='text' 
        placeholder='color title...'
      />
      <input  
        value={color}
        onChange={(event) =>
          setColor(event.target.value)
        }
        type='color'
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
