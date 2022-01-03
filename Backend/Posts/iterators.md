---
date: 2021-05-06
Title: "Iteradores Javascript"
Description: "Como utilizar iteradores no Javascript moderno ES6"
Tags: Javascript, HTML, Programming
---


O que o iterador **forEach** faz?

Esse método percorre um array, passando cada elemento para uma 'callback function'. Ela não retorna nada.

```JavaScript
const numbers = [1,3,4,5];

const seeNumbers = numbers.forEach(number => {
	console.log("Do you like the number " + number)
});
```



O que o iterador **Filter** faz? #flashcard  #programing 


Esse método retorna apenas os elementos que ao passarem por uma operação lógica retornam `true`

```javascript
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(randomNumber => {
 return randomNumber < 250;
});
```


O que o iterador **Map** faz? #flashcard  #programing 

Esse método percorre um array e devolve um array no final.

```javascript
const numbers = [1,3,4,5];

const squared = numbers.map(number => {
	return number*number
});
```

Vamos supor a seguinte situação, temos um array com strings e queremos criar dinâmicamente uma lista em  html onde o conteudo serão os elementos do array
``` JavaScript
	
	const colors = ['red','green','blue'];
	const items = colors.map(color => `<li>${color}</li>`)

```

**colors.map()** é a nova função que permite iterar sobre todo o array um item de cada vez retornando um novo array, dentro do método temos uma função de flecha que recebe cada valor da iteração e coloca dentro do parâmetro color, esse parâmetro é colocado dentro da string através do **template literal** que é uma forma parecida com o python de colocar variaveis dentro de strings, utiliza-se `${variavel}` dentro de ` (``) `.