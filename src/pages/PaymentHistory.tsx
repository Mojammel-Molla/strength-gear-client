import React from 'react';
import { useGetAllOrdersQuery } from '../redux/api/baseApi';
// const orderData = {
//   _id: '66f5191bc0cde3d45c5697c2',
//   address: '123 Main Street, Apartment 4B',
//   email: 'customer@example.com',
//   name: 'John Doe',
//   paymentMethod: 'credit_card',
//   phone: '123-456-7890',
//   totalAmount: 150.75,
//   orders: [
//     {
//       id: 'prod001',
//       name: 'Wireless Headphones',
//       _id: '66f5191bc0cde3d45c5697c3',
//     },
//     {
//       id: 'prod002',
//       name: 'Bluetooth Speaker',
//       _id: '66f5191bc0cde3d45c5697c4',
//     },
//     {
//       id: 'prod003',
//       name: 'Smartphone',
//       _id: '66f5191bc0cde3d45c5697c5',
//     },
//   ],
// };

const PaymentHistory: React.FC = () => {
  const { data } = useGetAllOrdersQuery([]);
  const ordersData = data?.data || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>

      {/* Iterate through each order */}
      {ordersData?.map((order, orderIndex) => (
        <div key={order._id} className="mb-8">
          {/* Order Information */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold">Order #{orderIndex + 1}</h3>
            <p>
              <strong>Name:</strong> {order.name}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.paymentMethod}
            </p>
            <p>
              <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
            </p>
          </div>

          {/* Orders Table */}
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Product ID</th>
              </tr>
            </thead>
            <tbody>
              {order?.orders?.map((product, productIndex) => (
                <tr key={product._id} className="border-t">
                  <td className="border px-4 py-2 text-center">
                    {productIndex + 1}
                  </td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;
