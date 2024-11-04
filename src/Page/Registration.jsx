import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

function Registration({setLoggedIn}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });


  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function changeHandler(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrorMessage(''); // Clear error message on input change
  }

  function submitHandler(event) {
    event.preventDefault();
    if (form.password !== form.confirm_password) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    console.log(form);
    setLoggedIn(true);
    toast.success("Registration successful! Welcome!")
    setForm({ name: '', email: '', password: '', confirm_password: '' }); // Reset form
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex justify-center items-center flex-grow p-5 m-10 bg-gray-50 rounded-lg shadow-md">
        <div className="sm:w-1/2 flex flex-col justify-center items-center">
          <h2 className="font-semibold text-2xl mb-4">Sign Up Easily Using</h2>

          <div className="flex text-4xl m-5">
            <a href="#" className="text-[#3b5999] p-5 transition-transform transform hover:scale-110"><FaFacebook /></a>
            <a href="#" className="text-[#55acee] p-5 transition-transform transform hover:scale-110"><FaTwitter /></a>
            <a href="#" className="text-orange-800 p-5 transition-transform transform hover:scale-110"><SiGmail /></a>
          </div>

          <div className="flex w-1/2 mb-2">
            <div className="border border-black w-1/2 h-0 m-3"></div>
            <span className="font-semibold text-gray-500">OR</span>
            <div className='border border-black w-1/2 h-0 m-3'></div>
          </div>

          <form onSubmit={submitHandler} className="flex flex-col lg:w-1/2 justify-center items-center">
            {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}

            <label className="w-full">
              <input
                placeholder='Full Name'
                className='rounded-full w-full p-2 border border-gray-500 my-2 focus:outline-none focus:border-blue-500'
                type='text'
                name='name'
                value={form.name}
                onChange={changeHandler}
                required
              />
            </label>

            <label className="w-full">
              <input
                placeholder='Email'
                className='rounded-full w-full p-2 border border-gray-500 my-2 focus:outline-none focus:border-blue-500'
                type='email'
                name='email'
                value={form.email}
                onChange={changeHandler}
                required
              />
            </label>

            <label className="w-full">
              <input
                placeholder='Password'
                className='rounded-full w-full p-2 border border-gray-500 my-2 focus:outline-none focus:border-blue-500'
                type='password'
                name='password'
                value={form.password}
                onChange={changeHandler}
                required
              />
            </label>

            <label className="w-full">
              <input
                placeholder='Confirm Password'
                className='rounded-full w-full p-2 border border-gray-500 my-2 focus:outline-none focus:border-blue-500'
                type='password'
                name='confirm_password'
                value={form.confirm_password}
                onChange={changeHandler}
                required
              />
            </label>

            <button className="py-2 px-4 rounded-full text-white font-bold m-5 bg-orange-500 transition-colors duration-300 hover:bg-orange-600">
              SIGN UP
            </button>
          </form>

          <div className="flex flex-col lg:w-1/2 justify-center items-center">
            <div className="font-semibold">
              Already have an account? <NavLink to='/signin'><span className="font-bold text-green-600"> SIGN IN </span></NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Registration ;
