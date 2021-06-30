import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
	constructor(props) {
		super(props);
		this.titulo = '';
		this.texto = '';
		this.categoria = 'Sem Categoria';
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

	_handleMudancaTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;
	}

	_handleMudancaTexto(evento) {
		evento.stopPropagation();
		this.texto = evento.target.value;
	}

	_criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto, this.categoria);
	}

	_handleMudancaCategoria(evento) {
		evento.stopPropagation();
		this.categoria = evento.target.value;
	}

	render() {
		return (
			<form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
				<select onChange={this._handleMudancaCategoria.bind(this)} className='form-cadastro_input'>
					<option>Sem Categoria</option>
					{this.state.categorias.map((categoria, index) => {
						return <option key={index}>{categoria}</option>;
					})}
				</select>
				<input
					className='form-cadastro_input'
					type='text'
					placeholder={'Título'}
					onChange={this._handleMudancaTitulo.bind(this)}
				/>
				<textarea
					className='form-cadastro_input'
					rows='15'
					placeholder={'Escreva sua nota...'}
					onChange={this._handleMudancaTexto.bind(this)}
				/>
				<button className='form-cadastro_submit'>Criar Nota</button>
			</form>
		);
	}
}

export default FormularioCadastro;
