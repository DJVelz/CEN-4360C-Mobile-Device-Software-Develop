import './App.css';
import { useRef } from 'react';

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  
  const submit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='color title...'/>
      <input type='color'/>
      <button>ADD</button>
    </form>
  );
}

export default App;
