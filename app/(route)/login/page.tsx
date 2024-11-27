"use client"

import React, { useState } from 'react'


const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900">
      <div className="relative w-[22rem] md:w-[28rem] bg-slate-950/80 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-900">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Welcome Back
        </h1>
        <p className="text-sm text-center text-gray-400 mb-8">
          Login to access your account
        </p>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(data)=>setEmail(data.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(data)=>setPassword(data.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-400 hover:text-indigo-300">
            Register Now
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default page