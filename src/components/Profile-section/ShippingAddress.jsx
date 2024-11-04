import React from 'react';

const ShippingAddress = () => {
  return (
    <div className="p-20 mt-10">
      <h2 className="text-xl font-bold">Shipping Address</h2>
      <form>
        <div className="my-3">
          <label className="block mb-1">Address:</label>
          <input type="text" className="border p-2 w-full" placeholder="Your Address" />
        </div>
        <div className="my-3">
          <label className="block mb-1">City:</label>
          <input type="text" className="border p-2 w-full" placeholder="City" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Address</button>
      </form>
    </div>
  );
};

export default ShippingAddress;
