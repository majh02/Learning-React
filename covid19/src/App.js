import './App.css';
import Header from './Component/Header'
import Contents from './Component/Contents'
import {useState} from 'react'

function App() {
  const {contryName, setContryName} = useState("kr")
  return (
    <div className="App">
      <Header value = {contryName} onChange={(e)=>setContryName(e.target.value)}/>
      <Contents contryName = {contryName}/>
    </div>
  );
}

export default App;
