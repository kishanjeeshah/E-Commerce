import Image from "../Images/project.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setposts } from "../redux/Slices/PostSlice";
import Bestselling from "../components/Bestselling";

function Home({LoggedIn}) {
  const dispatch = useDispatch();
  const Api = "https://dummyjson.com/products?limit=200";

  async function fetchdata() {
    try {
      const response = await fetch(Api);
      const output = await response.json();
      const alldata = output.products;
      dispatch(setposts(alldata));
      console.log(alldata); // Comment out in production
    } catch (error) {
      alert("Something went wrong");
      dispatch(setposts([])); // Clear posts on error
    }
  }

  useEffect(() => {
    fetchdata();
  },[]);

  return (
    <div className="flex flex-col items-center w-full pt-12">
      <div className="bg-green-800 flex flex-col justify-center items-center m-3 p-2 bg-cover w-full" style={{ backgroundImage: `url(${Image})`  } }>
        <img className="m-5 rounded-lg" src={Image} alt="Project Showcase" />
        <div className="md:flex justify-center items-center font-bold text-white sm:text-4xl space-x-8">
          <div>L E T S</div>
          <div>S H O P</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl m-2">ALL PRODUCTS</h2>
        <p className="text-red-700">Simple to Complex</p>
        <NavLink to='/products'>
          <button className="bg-orange-400 hover:bg-orange-500 text-white p-3 m-5">View All Products</button>
        </NavLink>
      </div>

      <Bestselling/>

      
    </div>
  );
}

export default Home;
