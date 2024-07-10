/*function calcularSomaEMedia() {
    
    let soma = 0;
    let quantidade = 0;
    let entrada;
  
    while (true) {
      entrada = prompt("Digite um número (ou digite 'sair' para encerrar):");
  
      if (entrada.toLowerCase() === 'sair') {
        break;
      }
  
      const numero = parseFloat(entrada);
  
      if (!isNaN(numero)) {
        soma += numero;
        quantidade++;
        const media = soma / quantidade;
        alert(`Soma atual: ${soma}\nMédia atual: ${media}`);
      } else {
        alert("Entrada inválida. Por favor, digite um número.");
      }
    }
  }
  
  calcularSomaEMedia(); */

  class Produto {
    constructor(nome, cor, peso, tipo, preco) {
      this.nome = nome;
      this.cor = cor;
      this.peso = peso;
      this.tipo = tipo;
      this.preco = preco;
    }
  
    descricao() {
      return `Nome: ${this.nome}\nCor: ${this.cor}\nPeso: ${this.peso}kg\nTipo: ${this.tipo}\nPreço: R$${this.preco.toFixed(2)}`;
    }
  }
  class Carrinho {
    constructor() {
      this.produtos = [];
    }
    
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    removerProduto(nome) {
      this.produtos = this.produtos.filter(produto => produto.nome !== nome);
    }
  
    totalCarrinho() {
      return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
  
    exibirCarrinho() {
      if (this.produtos.length === 0) {
        return "O carrinho está vazio.";
      }
  
      let descricao = "Produtos no carrinho:\n";
      this.produtos.forEach(produto => {
        descricao += produto.descricao() + "\n\n";
      });
  
      descricao += `Total: R$${this.totalCarrinho().toFixed(2)}`;
      return descricao;
    }
  }
  
  const maca = new Produto('Maçã', 'vermelha', 0.2, 'fruta', 2.50);
  const alface = new Produto('Alface', 'verde', 0.3, 'verdura', 1.50);
  const leite = new Produto('Leite', 'branco', 1.0, 'bebida', 4.00);
  
  const carrinho = new Carrinho();
  
  carrinho.adicionarProduto(maca);
  carrinho.adicionarProduto(alface);
  carrinho.adicionarProduto(leite);
  
  console.log(carrinho.exibirCarrinho());
  
  carrinho.removerProduto('Alface');
  
  console.log(carrinho.exibirCarrinho());
