import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { addToCart } from "../redux/Slices/cartSlice";

const PostDetails = ({IsLoggedIn}) => {
  const disptach =useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);

  const post = posts.find((post) => post.id === parseInt(id));
  const discountedPrice = (post.price - (post.price * post.discountPercentage) / 100).toFixed(2);
  
  if (!post) return <div className="text-center">Post not found</div>;

  const handleAddToCart = () => {
    if (IsLoggedIn) {
      disptach(addToCart(post));
      toast.success("Added to Cart")
    } else {
      alert("Login Your Account")
      navigate('/registration')
    }
  };

  const handleBuy = () => {
    if (IsLoggedIn) {
      navigate("/cart")
      disptach(addToCart(post));
      toast.success("Added to Cart")
    } else {
      alert("Login Your Account")
      navigate('/registration')
    }

  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto p-6">
        <button onClick={() => navigate(-1)} className="text-blue-600 font-semibold mb-4 inline-block">
          &larr; Back to Posts
        </button>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <img
            src={post.images[0]}
            alt={post.title}
            className="flex h-72 object-cover rounded-md mb-4 shadow-lg"
          />
          <p className="mt-2 text-gray-700">{post.description}</p>
          <div className="mt-4">
            <span className="font-semibold text-lg">Price: </span>
            <span className="text-xl font-bold text-gray-900">$ {post.price}</span>
          </div>
          <p className="text-green-600 text-lg font-semibold mt-2">{post.discountPercentage}% off</p>
          <div className="mt-4">
            <span className="font-semibold text-lg">Discount Price: </span>
            <span className="text-xl font-bold text-gray-900">$ {discountedPrice}</span>
          </div>

          <div className="flex mt-4">
            <button
              className="bg-green-700 text-white rounded-lg font-semibold text-sm p-2 mx-1 transition duration-300 hover:bg-green-600"
              onClick={handleBuy}>
              Buy Now
            </button>
            <button
              className="bg-gray-700 text-white rounded-lg font-semibold text-sm p-2 mx-1 transition duration-300 hover:bg-gray-600"
              onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>


        <div className="mt-4">
  <h2 className="text-lg font-semibold mb-2 border-b-2 border-gray-300 pb-2">Product Details</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Brand:</strong> <span className="font-normal">{post.brand}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Category:</strong> <span className="font-normal">{post.category}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Availability:</strong> <span className="font-normal">{post.availabilityStatus}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Dimensions:</strong> <span className="font-normal">{`${post.dimensions.width} x ${post.dimensions.height} x ${post.dimensions.depth} cm`}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Stock:</strong> <span className="font-normal">{post.stock}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Minimum Order Quantity:</strong> <span className="font-normal">{post.minimumOrderQuantity}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Shipping Info:</strong> <span className="font-normal">{post.shippingInformation}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Return Policy:</strong> <span className="font-normal">{post.returnPolicy}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Warranty:</strong> <span className="font-normal">{post.warrantyInformation}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>Weight:</strong> <span className="font-normal">{post.weight} kg</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <p className="font-semibold"><strong>SKU:</strong> <span className="font-normal">{post.sku}</span></p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg shadow col-span-1 sm:col-span-2">
      <p className="font-semibold"><strong>Tags:</strong> <span className="font-normal">{post.tags.join(', ')}</span></p>
    </div>
  </div>
</div>


          <div className="mt-6">
            <h2 className="text-lg font-semibold">Reviews:</h2>
            {post.reviews.map((review, index) => (
              <div key={index} className="review-card border-b py-2">
                <p className="review-rating"><strong>Rating:</strong> {review.rating}</p>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostDetails;
