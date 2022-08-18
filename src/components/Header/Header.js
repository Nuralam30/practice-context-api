import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import './Header.css';

const Header = () => {

    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header : {count}</h1>
            <button onClick={ () => setCount(count + 1)}>Increamrnt</button>
        </div>
    );
};

export default Header;