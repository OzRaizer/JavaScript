function calcularSomaEMedia() {
    
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
  
  calcularSomaEMedia();