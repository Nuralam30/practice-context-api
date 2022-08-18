import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);

    return (
        <div>
            <h4>This is category details</h4>
            <h2> Selected category : {category}</h2>
        </div>
    );
};

export default CategoryDetails;