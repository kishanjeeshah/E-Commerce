import React from 'react';

const MyReviews = () => {
  return (
    <div className="p-20 mt-10">
      <h2 className="text-xl font-bold">My Reviews</h2>
      {/* Mock reviews data */}
      <ul>
        <li className="my-2">Product A: ★★★★☆ - Great product!</li>
        <li className="my-2">Product B: ★★★☆☆ - It's okay.</li>
      </ul>
    </div>
  );
};

export default MyReviews;
