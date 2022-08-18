import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const { count } = props;
    return (
        <div style={{border: '3px solid red', padding: '20px'}}>
            <h1>This is home page : {count}</h1>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;