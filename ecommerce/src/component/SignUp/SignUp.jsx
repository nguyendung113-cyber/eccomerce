import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate} from 'react-router-dom';

function SignUp(){
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/register', formData);
      console.log('Registration successful:', response.data);
      setRedirect(true);
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  if(redirect) {
    return <Navigate to={'/signin'}/>
}

    return(
     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-[400px] sm:max-w-md">
          <h2 className="mt-6 text-center  text-3xl font-extrabold text-gray-900">
              Sign up your account
          </h2>
          <p className="mt-2 text-center  text-sm text-gray-600 max-w">
              Or 
              <Link to="/signin" className="font-medium ml-1 text-blue-600 hover:text-blue-500">
                  sign in
              </Link>
          </p>
      </div>
      <div className="max-w-4xl mt-8 bg-white  mx-auto font-[sans-serif] p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-col gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
            <input name="firstname" type="text"   
            
onChange={handleChange}             className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input name="lastname" type="text"            
onChange={handleChange}             className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter last name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <input name="email" type="text" 
onChange={handleChange}             className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter email" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="numberphone" type="number" 
onChange={handleChange}             className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter mobile number" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input name="password" type="password" 
onChange={handleChange}             className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter password" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input name="confirmPassword" type="password" 
            onChange={handleChange}  
            className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"              placeholder="Enter confirm password" />
          </div>
        </div>

        <div>
                      <button type="submit"
                          className="group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Sign up
                      </button>
                  </div>
      </form>
    </div>
</div>
    )
}

export default SignUp;