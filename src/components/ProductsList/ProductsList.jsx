import React, { useEffect, useState } from "react";
import style from "./ProductsList.module.css";
import  axios  from 'axios';
import Product from '../Product/Product.jsx';

export default function ProductsList() {
    let productListUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    async function getProuducts() {
        try {
            const { data } = await axios.get(productListUrl);
            setProducts(data);
            console.log(products[0]);
            
            
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProuducts();
    }, []);

    return (
        <>
            <h2 className="md:text-3xl font-semibold text-center pt-16 pb-4">Explore Our Products</h2>
            <hr />
            {products.length?<div className="pt-16 flex justify-center flex-wrap gap-5">
            {products.map((product, index) => {
                return <div className='w-72 md:w-1/3 lg:w-1/4' key={index}>
                    <Product product={product}/>
                </div>
            })}
            </div> : <div className="flex h-screen justify-center items-center">
                <i  className="fas fa-spinner fa-spin-pulse fa-5x"></i>
            </div>  }
            
        </>
    );
}
