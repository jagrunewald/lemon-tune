import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Login.css';

export default function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLogin, setButtonLogin] = useState(true);

  function validateLogin() {
    const regex = /.+@.+\.[A-Za-z]+$/;
    const minLength = 5;

    if (password.length >= minLength && regex.test(email)) {
      setButtonLogin(false);
    } else {
      setButtonLogin(true);
    }
  }  

  function handleEmail({ target }) {
    setEmail(target.value);
  }

  function handlePassword({ target }) {
    setPassword(target.value);
    validateLogin();
  }

  function handleClick() {
    localStorage.setItem('user', JSON.stringify(email));
    navigate("/musics");
  }

  return (
    <div className='login'>
      <Header />
      <div className='login-container'>
        <label htmlFor='email' className='label'>E-mail</label>
        <input type='email' className='input' id='email' name='email' value={email} onChange={ handleEmail } />
        <label htmlFor='password' className='label'>Password</label>
        <input type='password' className='input' id='password' name='password' value={password} onChange={ handlePassword } />
        <button type='button' className='button' disabled={buttonLogin} onClick={ handleClick }>Login</button>
      </div>
    </div>
  )
}
