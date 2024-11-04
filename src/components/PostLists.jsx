import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const PostLists = ({ post , IsLoggedIn }) => {

  const {cart} =useSelector(state=>state)
  const dispatch = useDispatch();
  const discountedPrice = (post.price - (post.price * post.discountPercentage) / 100).toFixed(2);
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (IsLoggedIn) {
      dispatch(addToCart(post));
      toast.success("Added to Cart")
    } else {
      alert("Login Your Account")
      navigate('/registration')
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(post.id));
    toast.error("Removed from Cart")
  };

  const ClickHandler = () => {
    navigate(`/post/${post.id}`);
  };  

  return (
    <div className="flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-lg bg-white shadow-md hover:shadow-lg border border-gray-200">
      
      <div>
      <img
            src={post.images[0]}
            alt={post.title}
            className="flex h-72 object-cover rounded-md mb-4 shadow-lg"
          />
      </div>

      <div onClick={ClickHandler} className="font-semibold text-lg text-gray-800 hover:underline cursor-pointer">
        {post.title}
      </div>

      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <span className="font-light text-sm line-through text-gray-500">
            {'$ ' + post.price}
          </span>
          <span className="font-semibold text-sm text-green-500 px-2">
            {post.discountPercentage + '%'}
          </span>
        </div>
        <div className="font-semibold  text-gray-900">
          {'$ ' + discountedPrice}
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-yellow-500 flex">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < post.rating ? 'text-yellow-500' : 'text-gray-300'} />
          ))}
        </span>
        <span className="ml-2 text-sm text-gray-600">({post.rating})</span>
      </div>

      <div className="flex gap-4 mt-4">
      {
        cart.some((p)=>p.id === post.id) ?
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700 
        hover:text-white transition duration-300 ease-in "
         onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>) : 
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
         onClick={handleAddToCart}>
          Add to Cart
        </button>)
      }
      </div>
    </div>
  );
};

export default PostLists;
