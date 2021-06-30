export default class Categorias {
	constructor() {
		this.categorias = [];
		this._subscribed = [];
	}

	adicionarCaregoria(novaCategoria) {
		this.categorias.push(novaCategoria);
		this.notify();
	}

	subscribe(func) {
		this._subscribed.push(func);
	}

	unsubscribe(func) {
		this._subscribed = this._subscribed.filter((f) => f !== func);
	}

	notify() {
		this._subscribed.forEach((func) => func(this.categorias));
	}
}
