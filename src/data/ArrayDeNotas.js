export default class ArrayDeNotas {
	constructor() {
		this.notas = [];
		this._subscribed = [];
	}

	adicionarNota(titulo, texto, categoria) {
		const novaNota = new Nota(titulo, texto, categoria);
		this.notas.push(novaNota);
		this.notify();
	}

	apagarNota(index) {
		this.notas.splice(index, 1);
		this.notify();
	}

	subscribe(func) {
		this._subscribed.push(func);
	}

	unsubscribe(func) {
		this._subscribed = this._subscribed.filter((f) => f !== func);
	}

	notify() {
		this._subscribed.forEach((func) => func(this.notas));
	}
}

export class Nota {
	constructor(titulo, texto, categoria) {
		this.titulo = titulo;
		this.texto = texto;
		this.categoria = categoria;
	}
}
