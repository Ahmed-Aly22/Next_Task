import React from 'react';

const Card = ({ product, fetchProductId }) => {
  return (
   
    <div key={product.id} className="flex flex-col h-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
      
    
      <div className="px-4 py-2 flex-grow">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {product.description.length > 75 ? product.description.slice(0, 75) + '...' : product.description}
        </p>
      </div>
  
     
      <img
        className="object-contain w-full h-48"
        src={product.image}
        alt="store"
      />
  
    
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${product.price}</h1>
        <button
          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          onClick={() => fetchProductId(product.id)}
        >
          Show more
        </button>
      </div>
    </div>
  
  
  );
};
export default Card;