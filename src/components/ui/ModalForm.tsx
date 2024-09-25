import React, { useState } from 'react';
import { useAddProductMutation } from '../../redux/api/baseApi';

interface ModalFormProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ setIsModalOpen }) => {
  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    inStock: true,
    price: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      name: formData.name,
      category: formData.category,
      description: formData.description,
      imageUrl: formData.imageUrl,
      inStock: true,
      price: formData.price,
    };

    try {
      const response = await addProduct(product).unwrap();
      console.log('Product added successfully:', response);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Add New Product</h2>
          <form onSubmit={handleSubmit} className="md:space-y-4">
            <div>
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* <div className="flex flex-col">
              <label className="block text-gray-700 mb-2">Stock Status</label>
              <select
                name="inStock"
                value={formData.inStock}
                onChange={handleChange}
                className="p-2 border rounded-md"
              >
                <option value="inStock">In Stock</option>
                <option value="outOfStock">Out of Stock</option>
              </select>
            </div> */}

            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
