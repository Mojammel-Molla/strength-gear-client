import { useParams } from 'react-router-dom';
import {
  useAddToCartMutation,
  useGetProductByIdQuery,
} from '../redux/api/baseApi';
import { useDispatch } from 'react-redux';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id!);

  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = () => {
    const cartData = {
      name: product?.data.name,
      price: product?.data?.price,
      imageUrl: product?.data?.imageUrl,
      category: product?.data?.description,
      description: product?.data?.description,
      inStock: true,
      quantity: 1,
    };

    addToCart(cartData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;
  if (!product) return <div>No product found!</div>;

  return (
    <div>
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-lg mx-auto my-10">
        <img
          src={product?.data?.imageUrl}
          alt={product?.data.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">
            {product?.data?.name}
          </h2>
          <p className="text-gray-600 mt-2">${product?.data?.price}</p>
          <p className="text-sm text-gray-500 mt-2">
            {product?.data?.description}
          </p>
          <p
            className={`mt-3 font-semibold ${
              product?.data?.inStock ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product?.data?.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          <button
            onClick={handleAddToCart}
            className={`mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg  transition-colors ${
              product?.data?.inStock
                ? 'hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
