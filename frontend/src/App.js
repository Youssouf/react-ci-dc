/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [userName, setUserName] = useState('');
  useEffect(()=>{
    getNames();
  }, [])
  const getNames = async ()=>{
    const response = await axios.get("/names");
    console.log(response);
    setUserName(response.data)
  }
  return (
    <div>
     <h1>My Frontend !!!</h1>
     <h2>My name is {userName}</h2>
    </div>
  );
}

export default App;
