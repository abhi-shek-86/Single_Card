import React from 'react';
import ProductsData from './Data.jsx';
import Product from './Product.jsx';
import '../../index.css'


const Products = () => {
  return (
    <div id='container'>
        {
            ProductsData.products.map((p)=>{
                return(
                    <div>
                        <Product singleProp = {p} />
                    </div>
                )
            })
        }
    </div>
  );
};

export default Products;
