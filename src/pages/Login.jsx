import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext';
import './styleLogin.css'

const Login = () => {


  const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth()

  return (
    <form className='form' onSubmit={handleSubmit}>

      <div className='input-container'>
        <label htmlFor="formBasicEmail" className='label'>
          Email address
        </label>
        <input
          id="formBasicEmail"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && (
          <div className='error-text'>
            {errors.email}
          </div>
        )}
      </div>

      <div className='input-container'>
        <label htmlFor="formBasicPassword" className='label'>
          Password
        </label>
        <input
          id="formBasicPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.password && (
          <div className='error-text'>
            {errors.password}
          </div>
        )}
      </div>

      <button type="submit" className='button-submit'>
        Submit
      </button>
    </form>
  );
};


export default Login