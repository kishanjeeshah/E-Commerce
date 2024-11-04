import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import toast from 'react-hot-toast';
import Image from "../Images/photo.jpg"

const Profile = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    toast("You have successfully logged out.", {
      icon: '👋',
      style: {
        border: '1px solid #f44336',
        padding: '16px',
        color: '#f44336',
      },
    });
    navigate("/");
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col p-5 md:p-20 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center">My Profile</h1>

      <div className="flex p-3 my-3 shadow-md bg-white rounded-lg w-full max-w-xs md:max-w-md items-center">
        <img src={Image} alt="profile" width={70} className="rounded-full" />
        <div className="m-2">
          <p className="font-bold">Kissu Shah</p>
          <p className="font-light">kissu@gmail.com</p>
        </div>
      </div>

      <div className="w-full max-w-xs md:max-w-md">
        <ul className="font-bold p-5 shadow-lg bg-white rounded-lg">
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/personal-details')}>
            Personal Details <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/my-orders')}>
            My Orders <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/shipping-address')}>
            Shipping Address <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/payment-methods')}>
            Payment Methods <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/promo-codes')}>
            Promo Codes <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/my-reviews')}>
            My Reviews <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => navigateTo('/settings')}>
            Settings <IoIosArrowBack className="inline mt-1" />
          </li>
          <li className="flex justify-between items-center my-4 cursor-pointer hover:bg-red-100 text-red-600 p-2 rounded" onClick={handleLogout}>
            Logout <IoIosArrowBack className="inline mt-1" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
