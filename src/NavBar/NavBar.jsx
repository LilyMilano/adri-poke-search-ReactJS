import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<header>
			<nav>
				<Link className='link' to="/">Inicio</Link>
				<Link className='link' to="/pika">Pika</Link>
				<Link className='link' to="/todo">ToDo List</Link>
				<Link className='link' to="/timer">Timer</Link>
			</nav>
		</header>
	);
};

export default NavBar;
