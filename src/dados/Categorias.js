export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(valorCategoria) {
        this.categorias.push(valorCategoria);
        this.notificar();
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}