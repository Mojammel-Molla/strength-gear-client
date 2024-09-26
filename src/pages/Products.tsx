import React, { useState } from 'react';
import { fakeProducts } from '../../public';
import { useGetAllProductsQuery } from '../redux/api/baseApi';

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
    <div className="container mx-auto py-10 px-4 lg:h-screen">
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
            <option value="Weight ">Weight</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
