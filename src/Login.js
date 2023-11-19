import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateInput(username, password)) {
  
      if (username === 'CarM4' && password === '123456') {
        navigate('/admin');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } else {
      setErrorMessage('Invalid input. Please enter a valid username and password.');
    }
  };

  const validateInput = (username, password) => {
    return username.trim() !== '' && password.trim() !== '';
  };

  return (
    <div className="login container-fluid">

      <form onSubmit={handleLogin}>
       <p><IoIosLock className='me-1 mb-1'/>Please Enter Your Login Details</p>
        <hr></hr>
        <label>
        <FaRegUser className='me-1' />
           Username:<br/>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
        </label>
        <br /><br />
        <label>
        <IoIosLock /> Password:<br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </label>
        <br /><br />
        {errorMessage && <div className="error-message" style={{color:"red",marginLeft:"65px"}}>{errorMessage}</div>}
        <button type="submit" className='btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
