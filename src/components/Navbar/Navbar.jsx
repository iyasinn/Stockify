import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div id="logo">
					<img src="logo.png" />
					<p>Stockify</p>
				</div>
				<div className="nav-elements">
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/b">Stocks</NavLink>
						</li>
						<li>
							<NavLink to="/c">News</NavLink>
						</li>
						<li>
							<NavLink to="/d">About</NavLink>
						</li>
						<li>
							<NavLink to="/e">Contact</NavLink>
						</li>
					</ul>
				</div>
				<div>Login</div>
			</div>
		</nav>
	);
};

export default Navbar;
