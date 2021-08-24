import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [gods, setGods] = useState([])

  const fetchGods = () => {
    fetch("http://localhost:3000/gods")
    .then(res => res.json())
    .then(data => setGods(data))
  }
  
  useEffect(() => {
    fetchGods()
  }, [])

  return (
    <div className="App">
      <h1>Hello Zagreus</h1>
    </div>
  );
}

export default App;
