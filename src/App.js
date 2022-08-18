import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {

  const [ count , setCount ] = useState(0);

  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <div className='App'>
        <h1>app js : {count}</h1>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
