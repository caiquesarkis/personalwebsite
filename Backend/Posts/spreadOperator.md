---
date: 2021-05-06
Title: "Spread Operator"
Description: "Como utilizar o spread operator no Javascript moderno ES6"
Tags: Javascript, HTML, Programming
---
Caso seja necessário combinar dois arrays ou objetos podemos utilizar o operador `...`


``` JavaScript
	const first = [1,2,3];
	const second  = [4,5,6];
	
	const combined =[...first,...second]
```
a vantagem aqui é que pode-se acrecentar items antes, depois e no meio 

``` JavaScript
const combined =[0.5,...first, 3.5 ,...second,6.5]
```
isso também permite clonar arrays
``` JavaScript
const clone [...combined]
```
essa lógica também se aplica a objetos e seus atributos
``` JavaScript
	const fisrt = { name : 'caique'};
	const second = { job : 'Professor'};
	
	const combined = {...first, ...second, location: 'Brasil'}
	// Pode-se criar um objeto a partir do primeiro e adicionar novos atributos
```
