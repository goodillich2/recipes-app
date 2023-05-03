import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import authOperations from "../../redux/authOperations";
import s from "./Login.module.css"

const Login = () => { 
//   const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
    //    dispatch(authOperations.login({ email, password }));
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
      </form>
  );
}
export default Login;