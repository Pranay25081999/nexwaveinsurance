import './App.css';
import React from 'react';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Home from './Home';
import Dummy from './Dummy';

function App() {

  return (
    <div>
      
<Router>
<Routes>
  <Route index path="/" element={<RegisterForm/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Dummy" element ={<Dummy/>}/>
</Routes>
</Router>
     </div>
  )
  }




export default App;
