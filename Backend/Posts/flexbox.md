---
date: 2021-05-06
Title: "Como utilizar o flexbox"
Description: "Aprenda a posicionar elementos utilizando o flexbox"
Tags: CSS, HTML, Programming
---

# CSS
## Flex-Box

O sistema de coordenadas é cartesiano, no entanto, o Y é invertido, assim como o sistema de coordenadas do canvas. 

### Display
``` CSS
div{
	display: flex
}
```
A propriedade `display` alinha todos os elementos ao longo do eixo principal (X) da esquerda para a direita. 

### Flex Wrap
``` CSS
div{
	display: flex
	
	flex-wrap: wrap;
}
```

Quando definimos apenas o elemento com a propriedade `flex` por padrão quando os elementos começarem a ultrapassar a largura da tela eles serão expremidos. Para solucionar isso utilizamos o comando `flex-wrap`, este define que ao chegar no limite os elementes deverão quebrar a linha.

### Flex Direction

``` CSS
div{
	display: flex
	
	flex-wrap: wrap;
	
	flex-direction: row-reverse; 
}
```

A propriedade  `flex-direction` indica qual a direção do eixo principal. Por padrão temos o valor de `row` , que define a direção do eixo da esquerda para a direita. No entanto, se colocarmos `row-reverse` iremos inverter o sentido do eixo. 

Se quisermos que o eixo principal seja o Y teremos que declarar `flex-direction` como `column` . De forma análoga, podemos ter o `column-reverse` invertendo o novo eixo principal.

### Align Items
``` CSS
div{
	display: flex
	
	flex-wrap: wrap;
	
	flex-direction: row; 
	
	align-items: baseline;
	
}
```

A propriedade  `align-items` diz respeito ao alinhamento dos objetos ao longo do eixo cruzado (secundário), e tem como valor padrão `baseline`.  Se quisermos centralizar os elementos basta modificar o valor para `center`.

### Justify Content

``` CSS
div{
	display: flex
	
	flex-wrap: wrap;
	
	flex-direction: row; 
	
	justify-content: space-between;
	
}
```

A propriedade  `justify-content` alinha os itens ao longo do eixo principal. Uma possibilidade de valor para essa propriedade é o `space-between` que da um espaçamento equidistante entre os elementos filhos. Outra possibilidade seria o `space-around` define um espaçamento entre os elementos em si e entre os elementos e a borda, cada elemento terá um valor à esquerdar e à direita iguais.

### Flex Basis
``` CSS
.pai{
	display: flex;
	width: 500;
}

.child_1{
	flex-basis: 100px;
}

child_2{
	flex-basis: 200px;
}
```

A propriedade  `flex-basis` define o tamanho inicial do elemento filho. No exemplo acima, temos que o elemento pai tem 500px de largura, o filho 1 tem 100px e o filho 2 200px. Isso significa que os elementos não ocuparão totalmente o espaço alocado pelo pai. No entanto, se quisermos que os elementos ocupem todo o espaço podemos utilizar o comando `flex-grow`, que irá acrescer os elementos de forma proporcional.

### Flex Grow
``` CSS
.child_1{
	flex-basis: 100px;
	flex-grow: 2;
}

child_2{
	flex-basis: 200px;
	flex-grow: 1;
}
```

Os pesos associados a propriedade `flex-grow` dizem em termos de proporção relativa quanto os elementos irão preencher. Neste caso o filho 1 irá crescer  $\frac{2}{3}$ do  espaço sobrando do elemento pai e o filho 2 $\frac{1}{3}$.

### Flex Shrink
``` CSS
.pai{
	display: flex;
	width: 500;
}

.child_1{
	flex-basis: 300px;
	flex-shrink: 2;
}

child_2{
	flex-basis: 300px;
	flex-shrink: 1;
}
```

Caso os elementos ultrapassem o limite imposto pelo elemento pai temos que definir um fator de encolhimento definida pela propriedade `flex-shrink`. Quanto maior esse valor menor será o tamanho final do elemento.


## Media Queries
### 

```CSS
@media (max-width:600px){
	.my-div{
		background-color:red;
	}
}
```
Aqui temos uma media querie que ajuda na responsividade do site. Neste caso a propriedade `max-width`  dentre do querie diz que quando a largura maxima for 600px os elementos declarados dentro devem assumir novos valores, neste caso estamos modificando os valores da classe `my-div`.


Também é possível juntar condições utilizando a palavra `and`.
```CSS
@media (max-width:600px) and (min-with:500px){
	.my-div{
		background-color:red;
	}
}
```
Neste caso a cor vermelha so será utlizada quando o tamnho da tela estiver entre esses dois valores.