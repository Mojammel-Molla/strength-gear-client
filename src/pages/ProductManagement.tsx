import React, { useState } from 'react';
import ProductTable from '../components/ui/ProductTable';
import ModalForm from '../components/ui/ModalForm';

const ProductManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="h-20 flex justify-start md:ml-5 items-center">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
        >
          Add Product
        </button>
        {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
      </div>

      <ProductTable />
    </div>
  );
};

export default ProductManagement;
