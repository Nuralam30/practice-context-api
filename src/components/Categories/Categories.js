import React from 'react';
import CategoryDetails from './CategoryDetails/CategoryDetails';

const Categories = (props) => {
    const { count } = props;
    return (
        <div>
            <h2>This is categories </h2>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Categories;