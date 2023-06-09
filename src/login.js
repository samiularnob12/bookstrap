import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div class='container'>
      <div class='d-flex justify-content-center h-100'>
        <div class='card'>
          <div class='card-header'>
            <h3 style={{ color: 'white' }}>Sign In</h3>
          </div>
          <div class='card-body'>
            <form>
              <div class='input-group form-group'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>
                    <i class='fas fa-user'></i>
                  </span>
                </div>
                <input
                  type='email'
                  placeholder='email'
                  id='email'
                  className='inputLogin'
                  value={email}
                />
              </div>
              <div class='input-group form-group'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>
                    <i class='fas fa-key'></i>
                  </span>
                </div>
                <input
                  type='password'
                  placeholder='password'
                  id='password'
                  className='inputLogin'
                  value={password}
                />
              </div>
              <div class='row align-items-center remember'>
                <input type='checkbox' />
                Remember Me
              </div>
              <div class='form-group'>
                <button type='submit' className='button-20'>
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class='card-footer'>
            <div class='d-flex justify-content-center links'>
              Don't have an account?<a href='/signup'>Sign Up</a>
            </div>
            <div class='d-flex justify-content-center'>
              <a href='/signup'>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
