import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import logo from './logo.png';
import bigbag01 from './bigbag01.png';
import bigbag02 from './bigbag02.png';
import bigbag03 from './bigbag03.png';

const Home = () => (
	<div className="Home">
		<section className="banner">
			<h1>Big Bags semi novos e usados</h1>
		</section>

		<section className="content">
			<p>
				Nossos bigs bags são confeccionados em material de Polipropileno
				tratado contra raios ultra violeta.
			</p>
			<p>
				Trabalhamos com toda gramatura existente e também podem ser fabricados
				em tecido laminado.
			</p>
		</section>

		<section className="images">
			<Link to="/novocatalogo">
				<figure className="logo">
					<img src={logo} alt="Logo da empresa Usina dos Bags" />
					<figcaption>Conheça nosso Catálogo!</figcaption>
				</figure>
			</Link>
			<figure className="bigbag">
				<img src={bigbag01} alt="Big bag com válvula superior" />
			</figure>
			<figure className="bigbag">
				<img src={bigbag02} alt="Big bag com boca superior aberta" />
			</figure>
			<figure className="bigbag">
				<img src={bigbag03} alt="Big bag com válvula superior e válvula inferior" />
			</figure>
		</section>
	</div>
);

export default Home;
