import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from './CategoryDetails/CategoryDetails';


const allProducts = [
    {name: 'Asus', category: 'laptop'}, {name: 'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'},
    {name: 'Cannon', category: 'camera'}, {name: 'Sony', category:'camera'}
]

const Categories = () => {

    const [category] = useContext(CategoryContext);

    const [ products, setProducts ] = useState([]);

    useEffect( () =>{
        const matchedProducts = allProducts.filter( pd => pd.category === category.toLowerCase())
        setProducts(matchedProducts)
    }, [category])

    return (
        <div>
            <h2>This is categories : {category}</h2>
            {
                products.map( pd => <CategoryDetails key={pd.name} product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;