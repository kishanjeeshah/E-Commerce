import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col pt-10 justify-center w-full">
        {cart.length > 0 ? (
          <div className="md:flex justify-center lg:w-10/12 mx-auto">
            {/* Cart Items Section */}
            <div className="lg:w-8/12 m-5 p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="md:w-5/12 mt-10 p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg text-green-700 font-semibold">Order Summary</h3>
              <h4 className="text-2xl text-gray-800 font-bold mt-2">Summary</h4>

              <div className="mt-5 font-semibold text-gray-700">
                <span>Total Items: <span className="font-normal">{cart.length}</span></span>
              </div>

              <div className="mt-5">
                <p className="font-bold text-gray-700">
                  Total Amount: <span className="text-black">$ {totalAmount.toFixed(2)}</span>
                </p>
                <NavLink to="/cart/checkout">
                  <button className="bg-green-600 text-white font-bold py-3 px-6 md:w-full my-3 rounded-lg hover:bg-green-500 transition duration-200">
                    Proceed to Checkout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
            <NavLink to="/products">
              <button className="bg-green-500 font-bold m-5 px-6 py-3 rounded-full hover:bg-green-600 transition duration-200">
                Start Shopping
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
