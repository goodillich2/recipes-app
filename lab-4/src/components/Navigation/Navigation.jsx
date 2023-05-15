import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={s.nav }>
        <NavLink to='/' className={navData => navData.isActive ? s.active : s.link} >Home</NavLink>
        <NavLink to='/recipes' className={navData => navData.isActive ? s.active : s.link} >Recipes</NavLink>
        <NavLink to='/user' className={navData => navData.isActive ? s.active : s.link} >User</NavLink>
        <NavLink to='/login' className={navData => navData.isActive ? s.active : s.link} >Login</NavLink>
        <NavLink to='/signup' className={ navData => navData.isActive ? s.active : s.link } >Sign up</NavLink>
    </nav>
    )}

export default Navigation;