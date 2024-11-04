import { useState } from "react";
import { BsPersonCheck, BsPersonFillAdd } from "react-icons/bs";
import { FaBattleNet, FaPersonBooth } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({IsLoggedIn}) {
  const cart = useSelector((state) => state.cart);
  const navigate= useNavigate()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // Manage search bar visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 justify-between md:items-center font-bold bg-gray-500 w-full">
      <div className="flex justify-between items-center">
        <div className="text-3xl md:text-5xl px-4 text-teal-800">
          <FaPersonBooth />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className="flex md:items-center justify-center">
        <NavLink to="/" className="text-red-700 text-4xl md:text-5xl">
          <FaBattleNet />
        </NavLink>
        <NavLink
          to="/"
          className="md:block md:font-semibold text-lg text-gray-800 hover:text-teal-600"
        >
          <strong>E - COMMERCE</strong>
        </NavLink>
      </div>

      <div
        className={`flex flex-col md:flex-row md:gap-10 text-2xl md:text-3xl px-4 ${
          isMobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="flex gap-4 mt-4 md:mt-0">
          <button onClick={toggleSearchBar} aria-label="Search" className="hover:text-gray-300">
            <IoSearchOutline />
          </button>

          <NavLink to="/cart" aria-label="Shopping Cart">
            <button className="hover:text-gray-300 mx-5">
              <TfiShoppingCartFull className='text-2xl' />
            </button>
            <div className="relative">
              {cart.length > 0 && (
                <div className="absolute left-5 bottom-4 p-3 w-5 h-5 text-pretty font-semibold text-xl text-green-950 rounded-full flex justify-center items-center animate-bounce">
                  {cart.length}
                </div>
              )}
            </div>
          </NavLink>

          <div aria-label="Profile">
            {IsLoggedIn ? (
              <button className="text-green-900 font-bold hover:text-green-700">
                <BsPersonCheck onClick={()=>(navigate('/profile'))} />
              </button>
            ) : (
              <button className="hover:text-gray-300">
                <NavLink to="/registration">
                  <BsPersonFillAdd />
                </NavLink>

              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
