import './App.css';
import {useState, useEffect} from 'react'
import Gods from './components/Gods';
import Boons from './components/Boons';

function App() {

  const [gods, setGods] = useState([])
  const [boons, setBoons] = useState([])

  const fetchGods = async () => {
    await fetch("http://localhost:3000/gods")
    .then(res => res.json())
    .then(data => setGods(data))
  }

  const fetchBoons = async () => {
    await fetch("http://localhost:3000/boons")
    .then(res => res.json())
    .then(data => setBoons(data))
  }
  
  useEffect(() => {
    fetchGods()
    fetchBoons()
  }, [])

  return (
    <div>
      <h1>Hello Zagreus</h1>
      <Gods gods={gods} boons={boons} />
      <Boons boons={boons} />
    </div>
  );
}

export default App;
