import React, { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {
	constructor() {
		super();
		this.state = { categorias: [] };
		this._novasCategorias = this._novasCategorias.bind(this);
	}
	componentDidMount() {
		this.props.categorias.subscribe(this._novasCategorias);
	}

	componentWillUnmount() {
		this.props.categorias.unsubscribe(this._novasCategorias);
	}

	_novasCategorias(categorias) {
		this.setState({ ...this.state.categorias, categorias });
	}

	_handleEventoInput(e) {
		let valorCategoria = e.target.value;
		e.key === 'Enter' && this.props.adicionarCategoria(valorCategoria);
	}
	render() {
		return (
			<section className='lista-categorias'>
				<ul className='lista-categorias_lista'>
					{this.state.categorias.map((categoria, index) => (
						<li key={index} className='lista-categorias_item'>
							{categoria}
						</li>
					))}
				</ul>
				<input
					className='lista-categorias_input'
					type='text'
					placeholder='Adicionar Categoria'
					onKeyUp={this._handleEventoInput.bind(this)}
				/>
			</section>
		);
	}
}

export default ListaDeCategorias;
