import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import {removeFromCart} from "../redux/Slices/cartSlice"

const CartItem = ({item,index}) => {
    const dispatch=useDispatch()

    const removed = () => {
        dispatch(removeFromCart(item.id));
        toast.error("Removed from cart");
      };

  return (
    <div className="grid grid-cols-2 mt-5 w-full py-5  border-b-2 border-black">
        <div className="px-5 flex justify-center">
          <img src={item.images[0]} alt="img" className="h-[200px] w-[200px]" />
        </div>

        <div className=" text-sm px-2 ">
          <h1 className="text-gray-700 font-semibold text-lg text-left w-full mt-2 ">
            {item.title}
          </h1>
          <h1 className=" font-normal text-left py-5">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>

          <div className="flex justify-between items-center ">
            <p className="text-green-500 font-bold"> $ {item.price}</p>
            <div
              className="mx-5 bg-red-300 rounded-full w-8 h-8 flex justfiy-center items-center "
              onClick={removed}
            >
              <MdDeleteForever className="text-red-800 text-2xl ml-1" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItem