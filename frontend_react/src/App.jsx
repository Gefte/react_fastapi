import axios from "axios";
import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [ body, setBody] = useState('')
  useEffect( () => {
    axios
    .get("http://0.0.0.0:8000/get_data")
    .then((response) => {
      const data = response.data
      setBody(data['body'])
    }).catch((e) => {
      //Placeholder
    })
  }, [])
  return (
    <div>
      <h1>Tomate Cru</h1>
      {body}
    </div>
  );
}

export default App;
