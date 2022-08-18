import React from 'react';

const CategoryDetails = (props) => {

    const {name} = props.product;
    return (
        <div>
            <h4>This is category details</h4>
            <h2> Selected category : {name}</h2>
        </div>
    );
};

export default CategoryDetails;