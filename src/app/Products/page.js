'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Card from './../../components/card/page';
import Loader from './../../components/Loader/page';


function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [AllProducts, setAllProducts] = useState([]);
  const router = useRouter();


  const fetchProductId = (id) => {
    router.push(`/productDetails/${id}`);
  };

 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products',{
      deliverables:5
    })
      .then((res) => {
        setAllProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = AllProducts.filter(product =>
        product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm, AllProducts]);

  return (
    <>

<div className="flex justify-center items-center m-8">
  <div className="relative w-full md:w-1/2">
  
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
    </span>

   
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onFocus={() => setIsSearchOpen(true)}
      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
      className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
    />
  </div>
</div>

    <div className="container mx-auto px-4 py-8 flex aline-center justify-center ml-10 ">
      
    
     
      {isLoading ? (
        <h1 className="ml-10 w-full"><Loader /></h1>
      ) : (
        <>
          {filteredProducts.length === 0 && searchTerm.trim() !== "" && (
            <h1 className="text-2xl font-bold text-gray-400 uppercase text-center m-10 h-[100vh]">
              No products found.
            </h1>
          )}

      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex align-center justify-center ">
            {(filteredProducts.length > 0 || searchTerm.trim() !== "" ? filteredProducts : AllProducts).map((product) => (
              <Card key={product.id} product={product} fetchProductId={fetchProductId} />
            ))}
          </div>
        </>
      )}
    
    
    </div>
    </>
  );
}

export default Products;
