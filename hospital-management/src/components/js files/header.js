import React from "react";
import { NavLink } from "react-router-dom";
import "../css files/header.css"

const Header = () => {
    return (
        <div className="a">
            <NavLink to="/" activeClassName="is-active" exact = {true}>BookAppointment</NavLink>
            <NavLink to="/createuser" activeClassName="is-active">Appointment</NavLink>
            
        </div>
    );
};
export default Header;