import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Login.css';

export default function Login () {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLogin, setButtonLogin] = useState(true);

  useEffect(() => {
    localStorage.clear();
  });

  function validateLogin() {
    const regex = /.+@.+\.[A-Za-z]+$/;
    const minLength = 5;

    if (name !== '' && regex.test(email) && password.length >= minLength) {
      setButtonLogin(false);
    } else {
      setButtonLogin(true);
    }
  }

  function handleName({ target }) {
    setName(target.value);
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
    localStorage.setItem('name', JSON.stringify(name));
    navigate('/albums');
  }

  return (
    <div className='login'>
      <Header />
      <div className='login-container'>
        <label htmlFor='name' className='label'>Name or Nickname</label>
        <input type='text' className='input' id='name' name='name' value={name} onChange={ handleName } />
        <label htmlFor='email' className='label'>E-mail</label>
        <input type='email' className='input' id='email' name='email' value={email} onChange={ handleEmail } />
        <label htmlFor='password' className='label'>Password</label>
        <input type='password' className='input' id='password' name='password' value={password} onChange={ handlePassword } />
        <button type='button' className='button' disabled={buttonLogin} onClick={ handleClick }>Login</button>
      </div>
    </div>
  )
}
