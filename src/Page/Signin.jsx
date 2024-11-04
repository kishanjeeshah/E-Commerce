import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signin({setLoggedIn}) {

    const [form,setform]=useState({email:'', password:''})
    const navigate = useNavigate()



    function changeHandler(event){
        const {name,value}=event.target
        setform({...form,[name]:value})
    }

    function submitHandler(event)
    {
        event.preventDefault()
        setLoggedIn(true)
        toast.success("Login successful! Welcome!")
        navigate('/')
        console.log(form)
      
    }
  return (

    <div>

    <div class="flex  justify-center p-5 m-10">

        <div class="sm:w-1/2 flex flex-col justify-center items-center">

        <div class="font-semibold text-2xl my-2 py-2">
            Login your Account
        </div>

        <form onSubmit={submitHandler} class="flex flex-col lg:w-1/2 justify-center items-center">

          <label class="w-full">
            <input
            placeholder='Email'
            class='rounded-full w-full p-2 border border-gray-500 my-2'
            type='email'
            name='email'
            value={form.email}
            onChange={changeHandler}
            required
            />
          </label>

          <label class="w-full">
            <input
            placeholder='password'
            class='rounded-full w-full p-2 border border-gray-500 my-2'
            type='password'
            name='password'
            value={form.password}
            onChange={changeHandler}
            required
            />
          </label>

          <button class="py-2 px-3 rounded-full text-white font-bold m-10 bg-green-500">
              SIGN IN
          </button>

        </form>

        <div class="absolute">
            <span class="relative top-10 left-24 text-red-800 font-semibold">Forget password ?</span>

        </div>

        </div>
        
    
    </div>


    </div>



  )
}

export default Signin