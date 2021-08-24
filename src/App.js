import './App.css';
import {useState, useEffect} from 'react'
import Gods from './components/Gods';

function App() {

  const [gods, setGods] = useState([])

  const fetchGods = async () => {
    await fetch("http://localhost:3000/gods")
    .then(res => res.json())
    .then(data => setGods(data))
  }
  
  useEffect(() => {
    fetchGods()
  }, [])

  return (
    <div>
      <h1>Hello Zagreus</h1>
      <Gods gods={gods} />
    </div>
  );
}

export default App;
