//   Calculadora de ICMS

const valor = parseInt(prompt('Informe o valor do produto: '))

operador = '%'

const valorICMS = parseInt(prompt('Qual o valor atual do ICMS? '))

calculoICMS = valorICMS / 100

ICMS = valor*calculoICMS

ValorTotal = ICMS+valor

alert('Seu ICMS é de R$' + ICMS +  '\nSeu produto custa R$' + valor + "\nSeu produto irá custar no total R$" + ValorTotal)

