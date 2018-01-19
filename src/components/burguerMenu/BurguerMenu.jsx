import React from 'react';

import './BurguerMenu.css'

const BurguerMenu = ({ isOpen, onClick }) => (
	<div className={`BurguerMenu ${isOpen ? 'open' : ''}`}>
		<button
			onClick={() => { onClick() }}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
			</svg>
		</button>
	</div>
)

export default BurguerMenu;
