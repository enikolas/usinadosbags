import React from 'react';

import './Footer.css';
import logoSolucoesIndustriais from './logo-solucoes-industriais-white.png';

const Footer = () => (
	<footer className="Footer">
		<div className="left">
			<h5>Usina dos Bags</h5>
			<p>SP +55 11 2087-1383</p>
			<p>SP +55 11 2087-1384</p>
			<p>SP +55 11 4962-1384</p>
			<p>SP +55 11 9 8740-0139</p>
			<p>vendas@usinadosbags.com.br</p>
		</div>
		<div className="right">
			<h5>Copyright © 2009-2018</h5>
			<p>Todos os direitos reservados</p>
			<p>
				<a href="http://www.solucoesindustriais.com.br/empresa/movimentacao-e-armazenagem/grupo-usina-dos-bags/produtos/todos">
					<img src={logoSolucoesIndustriais} alt="Soluções Industriais" />
				</a>
			</p>
		</div>
	</footer>
);

export default Footer;
