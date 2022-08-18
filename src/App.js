import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {

  const [ count , setCount ] = useState('laptop');

  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <div className='App'>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
