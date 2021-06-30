import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/App.css';
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/ArrayDeNotas';

class App extends Component {
	constructor() {
		super();
		this.notas = new ArrayDeNotas();
		this.categorias = new Categorias();
	}

	render() {
		return (
			<section className='conteudo'>
				<FormularioCadastro
					categorias={this.categorias}
					criarNota={this.notas.adicionarNota.bind(this.notas)}
				/>
				<main className='conteudo-principal'>
					<ListaDeCategorias
						adicionarCategoria={this.categorias.adicionarCaregoria.bind(this.categorias)}
						categorias={this.categorias}
					/>
					<ListaDeNotas deletarNota={this.notas.apagarNota.bind(this.notas)} notas={this.notas} />
				</main>
			</section>
		);
	}
}

export default App;
