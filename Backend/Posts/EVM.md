---
date: 2021-05-06
Title: "Ethereum vitual machine"
Description: "Notas sobre a Máquina virtual do etherium"
Tags: EVM, Ethereum vitual machine
---

## Definition
O [[EVM Ethereum vitual machine|EVM]] é uma [[Virtual machines|Virtual machine]], ou seja, ela traduz código escrito em linguagens de alto nível em bytes que o computador consegue interpretar. Essa máquina virtual é uma cpu simulada, que roda simultâneamente em diversas máquinas, em cima de uma implementação do protocolodo do [[Ethereum]] chamado `geth`. 


## Compilation Process
Inicialmente o código escrito em solidity é compilado por um compilador de solidity que então produz dois arquivos: Code.bin e Code.abi. O arquivo Code.bin é o programa que será distribuido pelas máquinas que compõem a blockchain e então será executado  pelo [[EVM Ethereum vitual machine|EVM].  O segundo arquivo, Code.abi, é uma interface que diz a programas externos como interagir com o código na blockchain.
## Etherium transactions
### Transaction Fields
*Elementos de um bloco no blockchain*

Campo|Descrição
---|---
Nonce | O número da trasação para uma conta, este começa em zero.
Gas Price| O preço em Wei que essa transação vai pagar por unidade de gas
Gas Limit|O valor máximo de gás que essa transação pode utilizar
To |O endereço para o qual se está mandando a transação
 Value|A quantidade de Wei enviada
Data|Dados que serão transferidos para o endereço
v, r, s |Components da assinatura da transação

### Exemplos de transação
- Transação de valor
	- Gas Limit: 21000 (valor mínimo de gás para realizar uma trasação)
	- To: O endereço que eu quero enviar o ether
	- Data: Vazio
- Deploy de contrato(Contract Deployment)
	- To: Vazio
	- Data: O código `init` que irá configurar o estado do contrato e realizar o deploy
- Chamado de função(Function Call)
	- Data: Dados de entrada que o código que está contido no blockchain irá utilizar e processar(função que será chamada e parâmetros)

## Stack, Memory, Storage, Code, CallDAta, Logs
O [[EVM Ethereum vitual machine|EVM]] é um processador baseado em [[Stack(pilha)|Stack]]. 
Dentro do [[EVM Ethereum vitual machine|EVM]] podemos acessar e guardar a informação  em 6 lugares diferentes




--- 

## Referências e recursos
- [EVM: From Solidity to byte code, memory and storage](https://www.youtube.com/watch?v=RxL_1AfV7N4&ab_channel=EthereumEngineeringGroup)
- [What is Ethereum Virtual Machine (EVM)? Programmer explains](https://www.youtube.com/watch?v=GPoze5RmDVU&ab_channel=IvanonTech)