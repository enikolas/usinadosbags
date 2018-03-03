import React from 'react';

import './Header.css';

const Header = () => (
	<header className="Header">
		<div className="left-boxes">
			<div className="box-1 box-55px rotate-10deg" />
			<div className="box-2 box-85px rotate-40deg" />
		</div>
		<div className="logo" />
		<div className="title">
			<h1>Usina dos Bags</h1>
			<h3>Preço e qualidade, quem usa sabe!</h3>
		</div>
		<div className="right-boxes">
			<div className="box-1 box-85px rotate-40deg" />
			<div className="box-2 box-55px rotate-neg-15deg" />
		</div>
	</header>
);

export default Header;
