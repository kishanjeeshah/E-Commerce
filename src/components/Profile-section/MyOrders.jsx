import React from 'react';

const MyOrders = () => {
  return (
    <div className="p-20 mt-10">
      <h2 className="text-xl font-bold">My Orders</h2>
      {/* Mock data for orders */}
      <ul>
        <li className="my-2">Order #123 - Delivered</li>
        <li className="my-2">Order #124 - In Transit</li>
        <li className="my-2">Order #125 - Cancelled</li>
      </ul>
    </div>
  );
};

export default MyOrders;
