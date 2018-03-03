import React from 'react';
import PropTypes from 'prop-types';

const UtilizacaoList = ({ title, items }) => (
	<ul className="small">
		<li className="title">{title}</li>
		{ items.map(item => <li>{item}</li>) }
	</ul>
);

UtilizacaoList.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const agricultura = {
	title: 'Agricultura',
	items: [
		'Arroz',
		'Aveia',
		'Café',
		'Cevada',
		'Corretivos de solos',
		'Defensivos agrícolas',
		'Fertilizantes',
		'Milho',
		'Sementes',
		'Soja',
		'Trigo'
	]
};

const industriaAlimentos = {
	title: 'Indústria de alimentos',
	items: [
		'Ácidos cítricos',
		'Açúcar',
		'Farelos em geral',
		'Farinha de trigo e mandioca',
		'Farinha de peixe',
		'Fermento, pictina',
		'Gelatinas',
		'Sal'
	]
};

const quimicaPetroquimica = {
	title: 'Química e Petroquímica',
	items: [
		'Ácido adípico',
		'Ácido tereflá',
		'Anidro flálico',
		'Bisfenol',
		'Carbonato de bário',
		'Enxofre',
		'Piche floculado',
		'Polímeros (PP, PEAD, PEBD, PVC)',
		'Tripolifosfato de sódio'
	]
};

const minerios = {
	title: 'Minérios',
	items: [
		'Alumina',
		'Bauxita',
		'Betonita',
		'Carbureto de silício',
		'Ferro cromo',
		'Ferro silício metálico',
		'Vermiculita',
		'Zirconita'
	]
};

const Utilizacao = () => (
	<article>
		<h3>Veja abaixo alguns exemplos de <b>utilização</b></h3>
		<div className="listas">
			<UtilizacaoList
				title={agricultura.title}
				items={agricultura.items}
			/>

			<UtilizacaoList
				title={industriaAlimentos.title}
				items={industriaAlimentos.items}
			/>

			<UtilizacaoList
				title={quimicaPetroquimica.title}
				items={quimicaPetroquimica.items}
			/>

			<UtilizacaoList
				title={minerios.title}
				items={minerios.items}
			/>

		</div>
	</article>
);

export default Utilizacao;
