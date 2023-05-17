import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import s from "./Login.module.css"

const Login = () => { 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');


  const navigate = useNavigate()

    const handleChange = (e) => {
        switch (e.target.name) {
            case "password":
                setPassword(e.target.value);
             break;
            case "email":
                setEmail(e.target.value);
            break;
            default:
                return;
        }
    };

    const onHandleSubmit = (e) => { 
      e.preventDefault();
    
      fetch('http://localhost:8800/login', {
        method: 'POST',
        body: JSON.stringify({ password, email }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('User name or password are incorrect');
          } else {
            return response.json();
          }
         })
        .then(data => setMessage(data.message))
        .then(data => {
                  setTimeout(() => {
        navigate('/recipes');
        }, 1000);
        })
        .catch(error => setMessage(error.message))

      setEmail('');
      setPassword('');
    }
  
    return (
      <form onSubmit={onHandleSubmit} className={s.form}>
        <h2 className={s.header}>Welcome back!</h2>
        <p className={s.text}>login here using your email and password</p>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          placeholder="Email"
          className={s.input}
        />
        <input
          type="text"
          name="password"
          required
          value={password}
          onChange={handleChange}
          placeholder="Password"
          className={s.input}
        />
        <button type="submit" className={s.button}>Log In</button>
        {message && <p className={s.message}>{message}</p>}
      </form>
  );
}
export default Login;