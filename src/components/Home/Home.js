import React from 'react';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div style={{border: '3px solid red', padding: '20px'}}>
            <h1>This is home page </h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;