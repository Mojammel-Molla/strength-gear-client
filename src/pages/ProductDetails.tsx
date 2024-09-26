import { useNavigate, useParams } from 'react-router-dom';
import {
  useAddToCartMutation,
  useGetProductByIdQuery,
} from '../redux/api/baseApi';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(id!);

  const product = data?.data || [];
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    const cartData = {
      name: product?.name,
      price: product?.price,
      imageUrl: product?.imageUrl,
      category: product?.description,
      description: product?.description,
      inStock: product?.inStock,
      quantity: 1,
    };

    try {
      await addToCart(cartData).unwrap();
      toast.success('Product added successfully');
      setTimeout(() => {
        navigate('/');
      }, 2000);

      console.log('Product added to cart successfully');
    } catch (error) {
      toast.error('Product already added');
      console.error('Failed to add product to cart:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;
  if (!product) return <div>No product found!</div>;

  return (
    <div>
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-lg mx-auto my-10">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="h-48 w-full "
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{product?.name}</h2>
          <p className="text-gray-600 mt-2">${product?.price}</p>
          <p className="text-sm text-gray-500 mt-2">{product?.description}</p>
          <p
            className={`mt-3 font-semibold ${
              product?.inStock ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product?.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          <button
            onClick={handleAddToCart}
            className={`mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg  transition-colors ${
              product?.inStock
                ? 'hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed disabled'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default ProductDetails;
