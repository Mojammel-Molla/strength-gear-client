import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useAddOrderMutation,
  useGetAllCartQuery,
} from '../../redux/api/baseApi';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { data } = useGetAllCartQuery([]);
  const cart = data?.data || [];
  console.log('This is cart data', cart);
  const [addOrder, { isLoading, isError }] = useAddOrderMutation();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const order = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      totalAmount: totalPrice(),
      order: cart.map((cartItem: { _id: string; name: string }) => {
        console.log('Processing cart item:', cartItem);
        return {
          id: cartItem._id,
          name: cartItem.name,
        };
      }),
    };
    console.log('Order object:', order);

    try {
      const response = await addOrder(order).unwrap();
      console.log('Product added successfully:', response);
      toast.success('Order created successfully!', {
        duration: 3000,
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
    console.log('Form Data:', formData);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md myy-8">
      <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
      <form onSubmit={handleOrder}>
        {/* User Details */}
        <h4 className="text-lg font-semibold mb-4">User Details</h4>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Delivery Address
          </label>
          <textarea
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Payment Methods */}
        <h4 className="text-lg font-semibold mb-4">Payment Method</h4>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              className="form-radio text-indigo-600"
              type="radio"
              name="paymentMethod"
              id="cod"
              value="cod"
              checked={formData.paymentMethod === 'cod'}
              onChange={handleChange}
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              className="form-radio text-indigo-600"
              type="radio"
              name="paymentMethod"
              id="stripe"
              value="stripe"
              checked={formData.paymentMethod === 'stripe'}
              onChange={handleChange}
            />
            <span className="ml-2">Stripe</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Place Order
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default CheckoutForm;
