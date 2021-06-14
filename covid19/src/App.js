import './App.css';
import Header from './Component/Header'
import Contents from './Component/Contents'
import {useState} from 'react'

function App() {
  const [contryName, setContryName] = useState('kr');
  console.log(contryName);
  return (
    <div className="App">
      <Header contryName = {contryName} onChange={(e)=>setContryName(e.target.contryName)}/>
      <Contents contryName = {contryName}/>
    </div>
  );
}

export default App;
