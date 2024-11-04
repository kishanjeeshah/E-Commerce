import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="p-20 mt-10">
      <h2 className="text-xl font-bold">Personal Details</h2>
      <form>
        <div className="my-3">
          <label className="block mb-1">Name:</label>
          <input type="text" className="border p-2 w-full" placeholder="Your Name" />
        </div>
        <div className="my-3">
          <label className="block mb-1">Email:</label>
          <input type="email" className="border p-2 w-full" placeholder="Your Email" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
