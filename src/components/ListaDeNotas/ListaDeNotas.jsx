import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css';

class ListaDeNotas extends Component {
	constructor() {
		super();
		this.state = { notas: [] };
		this._novasNotas = this._novasNotas.bind(this);
	}

	componentDidMount() {
		this.props.notas.subscribe(this._novasNotas);
	}

	componentWillUnmount() {
		this.props.notas.unsubscribe(this._novasNotas);
	}

	_novasNotas(notas) {
		this.setState({ ...this.state, notas });
	}

	render() {
		return (
			<ul className='lista-notas'>
				{this.state.notas.map((nota, index) => (
					<li key={index} className='lista-notas_item'>
						<CardNota
							nota={nota}
							deletarNota={this.props.deletarNota}
							index={index}
							categoria={nota.categoria}
						/>
					</li>
				))}
			</ul>
		);
	}
}

export default ListaDeNotas;
