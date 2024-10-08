import { Link } from 'react-router-dom';
import {
  useDeleteFromCartMutation,
  useGetAllCartQuery,
} from '../../redux/api/baseApi';

const Cart: React.FC = () => {
  const { data } = useGetAllCartQuery([]);
  const cart = data?.data || [];
  const [deleteFromCart, { isLoading, isError }] = useDeleteFromCartMutation();
  console.log(cart);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteFromCart(id).unwrap();
        console.log('Product deleted successfully');
      } catch (error) {
        console.error('Failed to delete the product:', error);
      }
    }
  };
  // Helper to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle quantity change (increase/decrease)
  const handleQuantityChange = (id: number, amount: number) => {
    console.log(id, amount);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <Link to="/payment-history">
          <button className="bg-green-600 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-500 ease-in-out ">
            Payment History
          </button>
        </Link>
      </div>
      {/* Cart Items */}
      {cart?.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart?.map(item => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b pb-4 mb-4"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">
                  Stock: {item.stock ? 'Out of stock' : 'available'}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <button
                  className="p-2 bg-gray-300 rounded-md"
                  onClick={() => handleQuantityChange(item._id, -1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="p-2 bg-gray-300 rounded-md"
                  onClick={() => handleQuantityChange(item._id, 1)}
                  disabled={item.quantity === item.stock}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                className="text-red-500 ml-4"
                onClick={() => handleDelete(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          {/* Pricing Details */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Pricing Details</h3>
            <p className="text-lg">
              Total Price:${calculateTotalPrice()}
              <span className="font-semibold">
                {/* ${calculateTotalPrice().toFixed(2)} */}
              </span>
            </p>
          </div>
          {/* Proceed to Checkout */}
          <Link to={'/check-out'}>
            <button
              className={`mt-6 w-full mx-auto py-3 rounded-md text-white ${
                cart?.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {cart?.length === 0 ? 'Item Out of Stock' : 'Proceed to Checkout'}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
