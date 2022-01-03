---
date: 2021-05-06
Title: "Lei de Gauss"
Description: "Notas sobre a Lei de Gaus do eletromagnetismo"
Tags: Physics, Eletromagnetism, Math
---


## Estrutura geral

- **Problema com contexto histórico no qual foi motivado** 

- **O que é necessário aprender para resolver o problema**

- **O que é um divergente**

- **Lei de Gauss na forma atual**


## Calculo vetorial
**Referências**
[Visualização de campos vetoriais](https://anvaka.github.io/fieldplay/?dt=0.01&fo=0.998&dp=0.009&cm=1&cx=0&cy=0&w=8.5398&h=8.5398)

[Derivatives of multivariable functions](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives)

> Não explique mostre uma situação e vá tirando conclusões de forma lógica para que o leitor pense que ele também poderia ter descoberto esse conceito.

- Campos vetoriais
	- Campos vetoriais podem descrever diversos fenomenos como: um campo de velocidades como o vento, gravidade ao redor de planetas e propriedades elétricas e magnéticas. Esses campos podem mudar com o tempo, que é o que acontece na natureza em geral, como por exemplo, quando uma carga se movimenta ela muda o campo e essa mudança se propaga no espaço, mas isso ja é um spoiler. A forma mais intuitiva de se entender os campos vetoriais é através da analogia do campo de velocidades de um flúido. 
- Divergente
	- O divergente em uma certa região pode ser positivo mesmo se não for num cenário como o surgimento de algo em um ponto do espaço, pode acontecer de em uma determinada região o fluido estar se movimentando mais lento que em outra parte e portanto insinuaria uma geração expontanea naquele local. 
- Rotacional
	- Aqui também analisamos o movimento de um flúido so que de uma forma diferente. Queremos saber a tendencia do flúido de rotacionar em torno de algum ponto do espaço. Algo importante de se notar é que em uma situação como um escoamento laminar em um rio onde o flúido se movimenta mais rapidamente em cima do que embaixo, mesmo sem a evidente rotação do fluido, teremos um rotacional diferente de zero pois caso colocassemos uma tábua em pé ela tenderia a rotacionar devido a diferença de forças que seriam aplicadas no topo e na base gerando um torque.










### Lei de Gauss
 
 A primeira equação de Maxwell é baseada na lei de Gauss, que estabeleceu uma conexão entre cargas elétricas estáticas e seu campo elétrico associado. A mesma pode, assim como todas as outra equações, ser escrita em duas notações: integral ou diferencial. Na primeira temos que:
 
 $$\int_{S} E \,dS = \frac{q}{ \epsilon_{0}}$$
 
 
 Esta equação descreve como o fluxo do campo elétrico que passa por uma superfície fechada é proporcional à carga total no interior da mesma (O fluxo elétrico pode ser pensado como a medida da quantidade de linhas de campo que atravessam a superfície). É importante notar que essa lei é uma reformulação da lei de Coulomb, a qual surgiu das observações de diversos físicos que já sugeriam que a força elétrica deveria seguir uma lei de inverso do quadrado assim como a lei da gravitação universal de Newton. No entanto, foi Charles Augustin Coulomb o primeiro a realizar experimentos para comprovar essa relação. Um de seus experimentos consistia da medição da força de repulsão entre duas esféras eletrizadas através de uma balança de torção. Nesse processo ele chegou à expressão análoga a de Newton, onde as massas eram substituídas por cargas elétricas.

Lei de Gauss 
$$F = K_e \frac{q_1 q_2}{r}$$ 

Lei da Gravitação 
$$F = G \frac{m_1 m_2}{r}$$ 


