import React from 'react';
import { useGetAllProductsQuery } from '../../redux/api/baseApi';
import { TProduct } from '../../types';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const products = data?.data || [];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-3xl font-extrabold text-center uppercase mb-6">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: TProduct) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full "
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2">
                {product.description}
              </p>
              <p
                className={`mt-3 font-semibold ${
                  product.inStock ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
              <Link to={`products/${product._id}`}>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
