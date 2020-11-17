export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    //Padrão observable. 
    //Armazena quem precisa ser notificado quando meus dados da classe forem modificados.
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  //Padrão observable.
  //Armazeno uma função para ser executada quando meus dados forem modificados.
  inscrever(func) {
    this._inscritos.push(func);
  }

  //Padrão observable.
  //Remove a função da minha array quando o objeto que armazena essa função não existir mais.
  desinscrever(func) {
    //Filtra as funções e remove a passada como parâmetro.
    this._inscritos = this._inscritos.filter(f => f !== func);
  }

  //Executa todas as funções passadas como parâmetro para os meus inscritos.
  notificar() {
    this._inscritos.forEach(func => {
      //Passo para a função os dados da minha classe.
      func(this.notas);
    });
  }
}

class Nota{
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}