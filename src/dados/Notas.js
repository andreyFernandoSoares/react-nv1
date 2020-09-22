export default class Notas {

    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.notas));
    }

    criarNota(titulo, texto, categoria){
        const nota = new Nota(titulo, texto, categoria);
        this.notas.push(nota);
        this.notificar();
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}