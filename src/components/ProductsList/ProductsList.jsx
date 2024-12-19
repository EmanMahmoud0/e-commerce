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
        <div className="">
            <h2 className="text-3xl font-semibold text-center lg:pt-6 pb-4">Explore Our Prouducts</h2>
            <hr />
            {products.length?<div className="pt-16 flex justify-center flex-wrap space-x-4 ">
            {products.map((product, index) => {
                return <div className='md:w-1/2 lg:w-1/4' key={index}>
                    <Product product={product}/>
                </div>
            })}
            </div> : <div className="flex h-screen justify-center items-center">
                <i  className="fas fa-spinner fa-spin-pulse fa-5x"></i>
            </div>  }
            

            

        </div>
    );
}
