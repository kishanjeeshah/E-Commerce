import React from 'react';

const PromoCodes = () => {
  return (
    <div className="p-20 mt-10">
      <h2 className="text-xl font-bold">Promo Codes</h2>
      <form>
        <input type="text" className="border p-2 w-full" placeholder="Enter Promo Code" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Apply</button>
      </form>
      {/* Display applied promo codes */}
    </div>
  );
};

export default PromoCodes;
