export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
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
      func(this.categorias);
    });
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);

    this.notificar();
  }
}