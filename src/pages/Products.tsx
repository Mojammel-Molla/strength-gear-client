import React, { useState } from 'react';
import { useGetAllProductsQuery } from '../redux/api/baseApi';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data, error, isLoading } = useGetAllProductsQuery();
  const products = data?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  // Filter the products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-10 px-4 lg:min-h-screen">
      {' '}
      {/* Ensure min-height for the screen */}
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex justify-between items-center mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a product..."
          className="p-2 border rounded-lg w-1/2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            className="p-2 border rounded-lg"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Strength">Strength</option>
            <option value="Cardio">Cardio</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
        {' '}
        {/* Add margin at the bottom */}
        {filteredProducts.map(product => (
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

export default Products;
