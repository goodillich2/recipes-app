import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import s from "./SignUp.module.css"

const SignUp = () => { 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState('');
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
           case "name":
                setName(e.target.value);
            break;
            default:
                return;
        }
    };

    const onHandleSubmit = async (e) => { 
      e.preventDefault();
      fetch('http://localhost:8800/signup', {
        method: 'POST',
        body: JSON.stringify({name, password, email}),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error))
      
      setTimeout(() => {
      navigate('/recipes');
    }, 1500);
      setMessage('');
      setEmail('');
      setPassword('');
      setName('');
    };
     
   
  
    return (
      <form onSubmit={onHandleSubmit} className={s.form}>
        <h2 className={s.header}>Sign Up Now</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Name"
          className={s.input}
        />
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
          type="password"
          name="password"
          required
          value={password}
          minLength={4}
          onChange={handleChange}
          placeholder="Password"
          className={s.input}
        />
        <button type="submit" className={s.button}>Sign Up</button>
        {message && <p className={s.message}>{message}</p>}
      </form> 
  );
}

export default SignUp;

