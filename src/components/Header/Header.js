import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import './Header.css';

const Header = () => {

    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header : {count}</h1>
            <button onClick={ () => setCount("Laptop")}>Laptop</button>
            <button onClick={ () => setCount("Mobile")}>Mobile</button>
            <button onClick={ () => setCount("Camera")}>Camera</button>
        </div>
    );
};

export default Header;