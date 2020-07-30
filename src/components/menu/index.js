import React from 'react';
import Logo from '../../assets/img/32c3a6.png'
import './menu.css';
//import ButtonLink from './components/buttonLink';
import Button from '../button';

function Menu(){
	return (
		<nav className="menu">
			<a href="/">
				<img src={Logo} alt="CodFlix" className="logo" />
			</a>

			{/*</nav>ButtonLink href="/" className="button-link">Novo Video</ButtonLink>*/}
			<Button as="a" href="/" className="button-link">Novo Video</Button>
		</nav>
	);
}

export default Menu;