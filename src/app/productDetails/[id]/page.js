'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "./../../../components/Loader/page.js";
function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const { id } = React.use(params); 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h1 className="mx-auto"><Loader /></h1>
 
  // <h1 className="text-center text-3xl font-semibold py-10 h-[100vh]">
    // </h1>;

  return (
    <div className="product-details  w-full flex flex-col md:flex-row justify-center items-center px-1 left-0 bg-gray-100 py-10">
      
      
      <div className="product-image w-full md:w-1/2 flex justify-center items-center   ">
        <img 
          src={product.image}  
          alt={product.title} 
          className="w-3/4 md:w-2/3 lg:w-1/2 object-contain p-5 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-white"
        />
      </div>

     
      <div className="product-info w-full md:w-1/2 flex flex-col justify-center items-start bg-white shadow-xl rounded-lg p-8 mr-12 ">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
        <h1 className="text-xl font-bold mb-4 text-gray-600">Category: {product.category}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold mt-5">Price: <span className="text-yellow-600">${product.price}</span></p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
