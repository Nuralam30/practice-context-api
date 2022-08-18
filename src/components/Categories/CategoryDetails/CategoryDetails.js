import React from 'react';

const CategoryDetails = (props) => {
    const { count } = props;
    return (
        <div>
            <h4>This is category details : {count}</h4>
        </div>
    );
};

export default CategoryDetails;