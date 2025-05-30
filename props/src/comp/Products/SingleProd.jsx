import React from 'react';
import ProductsData from './Data.jsx';
import { useParams } from 'react-router-dom';

const SingleProd = () => {
    const { id } = useParams();
    const matched = ProductsData.products.find((x) => x.id === Number(id));

    if (!matched) {
        return <p>Product not found</p>;
    }

    return (
        <div id='card'>
            <img src={matched.thumbnail} alt={matched.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{matched.title}</h3>
            <p><b>Category:</b> {matched.category}</p>
            <p><b>Price: ₹</b>{matched.price}</p>
            <p><b>Description:</b> {matched.description}</p>
        </div>
    );
};

export default SingleProd;
