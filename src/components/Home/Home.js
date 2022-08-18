import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '3px solid red', padding: '20px'}}>
            <h1>This is home page : {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;