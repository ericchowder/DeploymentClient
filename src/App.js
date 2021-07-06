
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { config } from './Constants'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    console.log("ENV IS: " + process.env.MY_ENV)
    axios.get(`${config.url.API_URL}/flask/hello`).then(response => {
    //axios.get(`https://flask-saas-api.herokuapp.com/flask/hello`).then(response => {
    //axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;
