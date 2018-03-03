import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Menu.css';
import MenuItem from '../MenuItem';
import BurguerMenu from '../burguerMenu/BurguerMenu';

class Menu extends Component {
	constructor(props) {
		super(props);

		this._onClick = this._onClick.bind(this);
		this.state = { isOpen: false };
	}

	_onClick() {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen });
	}

	render() {
		const { location: { pathname } } = this.props;
		const { isOpen } = this.state;

		/*
			eslint-disable jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-noninteractive-element-interactions
			*/
		return (
			<nav className="Menu" onClick={this._onClick}>
				<BurguerMenu
					isOpen={isOpen}
					onClick={() => { this.setState({ isOpen: !isOpen }); }}
				/>
				<div className={`MainMenu ${isOpen ? 'open' : ''}`}>
					<ul>
						<MenuItem label="home" to="/" path={pathname} icon="⬤" />
						<MenuItem label="sobre nós" to="/sobrenos" path={pathname} icon="⬤" />
						<MenuItem label="produtos" to="/produtos" path={pathname} icon="⬤" />
						<MenuItem label="fotos" to="/fotos" path={pathname} icon="⬤" />
						<MenuItem label="serviços" to="/servicos" path={pathname} icon="⬤" />
						<MenuItem label="contato" to="/contato" path={pathname} icon="⬤" />
					</ul>
				</div>
			</nav>
		);
		/*
			eslint-enable jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-noninteractive-element-interactions
			*/
	}
}

export default withRouter(Menu);

Menu.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};
