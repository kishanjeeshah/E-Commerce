import React from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Bestselling = () => {
  const posts = useSelector(state => state.posts);
  const navigate = useNavigate();

  // Sort the posts by rating in descending order and take the top 10
  const topRatedPosts = [...posts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  const ClickHandler = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="py-10 px-4 bg-gray-100 ">

      <h2 className="text-3xl font-bold text-center mb-8">Top 10 Highest Rated Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topRatedPosts.length > 0 ? (
          topRatedPosts.map(post => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
              <img src={post.images[0]} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 
                onClick={() => ClickHandler(post.id)}
                className="text-lg font-semibold mb-2 cursor-pointer hover:underline"
              >
                {post.title}
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 line-through">{`$ ${post.price.toFixed(2)}`}</span>
                <span className="text-lg font-bold text-red-500">{`$ ${(post.price - (post.price * post.discountPercentage / 100)).toFixed(2)}`}</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span>{post.rating}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No top-rated products available.</p>
        )}
      </div>
    </div>
  );
};

export default Bestselling;
