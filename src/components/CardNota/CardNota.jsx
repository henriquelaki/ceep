import React, { Component } from 'react';
import './style.css';
import { ReactComponent as DelIcon } from '../../assets/img/delete.svg';

class CardNota extends Component {
	constructor(props) {
		super(props);
		this.titulo = props.nota.titulo;
		this.texto = props.nota.texto;
		this.props = props;
	}

	apagar() {
		this.props.deletarNota(this.props.index);
	}

	render() {
		return (
			<section className='card-nota'>
				<header className='card-nota_cabecalho'>
					<h3 className='card-nota_titulo'>{this.titulo}</h3>
					<DelIcon onClick={this.apagar.bind(this)} />
					<h4>{ this.props.categoria}</h4>
				</header>
				<p className='card-nota_texto'>{this.texto}</p>
			</section>
		);
	}
}

export default CardNota;
