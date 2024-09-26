import React from 'react';
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from '../../redux/api/baseApi';
import toast, { Toaster } from 'react-hot-toast';
const ProductTable: React.FC = () => {
  const { data: products } = useGetAllProductsQuery();
  const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  const handleEdit = product => {};

  const handleDelete = async id => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        toast.success('Product deleted successfully');
        await deleteProduct(id).unwrap();
        console.log('Product deleted successfully', id);
      } catch (error) {
        console.error('Failed to delete the product:', error);
      }
    }
  };
  return (
    <div className="w-full  overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 font-semibold uppercase">
            <th className="px-4 py-2 md:px-6 md:py-3 border-b">Product Name</th>
            <th className="px-4 py-2 md:px-6 md:py-3 border-b">Price</th>
            <th className="px-4 py-2 md:px-6 md:py-3 border-b">Category</th>
            <th className="px-4 py-2 md:px-6 md:py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map(product => (
            <tr key={product?._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 md:px-6 md:py-4">{product.name}</td>
              <td className="px-4 py-2 md:px-6 md:py-4">${product.price}</td>
              <td className="px-4 py-2 md:px-6 md:py-4">{product.category}</td>
              <td className="px-4 py-2 md:px-6 md:py-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600 md:px-4 md:py-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 md:px-4 md:py-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default ProductTable;
