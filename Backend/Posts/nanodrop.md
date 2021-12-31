---
date: 2021-05-06
Title: "Entendendo a tensão superficial"
Description: "Entenda a tensão superficial com gotas simuladas"
Tags: Physics, Math, Programming
---

## Resumo
Nesse artigo você aprenderá, através de **simulações interativas** e alguns conceitos, o que é a tensão superficial e como ela surge.




## Tensão Superficial
é a propriedade da superfície de um líquido que permite a ele resistir à forças externas, devido a natureza **coesiva** de suas moléculas.

É muito provável que você já tenho ouvido falar sobre a tensão superficial, esse fenômeno pode ser notado em nosso cotidiano, por exemplo, se enchermos um copo com água acima do nivel máximo, percebe-se que a água não escoa imediatamente, invés disso, nota-se a formação de uma cúpula.

<img src="https://live.staticflickr.com/4072/4429208363_3bf26923d0_b.jpg" alt="surface tension on glass of water" width="850" height="500"/>

**Outros exemplos** 
- Formação de gotas
- Bolhas de sabão 
- Futuação de objetos mais densos que a água 

## Forças Coesivas

Moléculas de um líquido podem apresentar 3 tipos de interação intermolecular:

- Dipolo-Dipolo
- Van Der Waals
- Pontes de Hidrogênio

Vamos nos ater somente as forças de Van Der Waals.

Em princípio átomos são eletricamente neutros, no entanto pode acontecer de um átomo se polarizar aleatóriamente e virar um mini imã. Isso acontece devido ao constante movimento dos elétrons que, eventualmente, estarão situados em maior quantidade em um dos hemisférios do átomo, gerando um acúmulo de cargas negativas numa região  e uma ausência na outra. Nesse instante, se um outro átomo estiver nas proximidades, este será afetado pela influência daquele, de forma que os elétrons do segundo serão afastados pelo polo negativo do primeiro e por consequência irão se concentrar na região oposta, gerando assim um segundo imã, o que causará uma atração entre ambos. Essa força é muito fraca e sua influência cai rapidamente com a distância, sendo assim, qualquer energia cinética adicional pode rompê-la, logo ela só manterá uma estrutura coesa caso esteja em baixas temperaturas. Essas interações definem propriedades importantes como o ponto de ebulição e fusão. Podemos observar o comportamento entre dois átomos na simulação a seguir:



<iframe height='300'  scrolling='no' title='lj-box' src='https://caiquesarkis.gitlab.io/lj-box/' frameborder='no' allowtransparency='false' allowfullscreen='true' style='width: 100%'></iframe>

## Como surge a tensão superficial

Vamos utilizar a simulação abaixo para ganhar uma intuição de como a **Tensão Superficial** surge. Para isso selecione a quantidade de partículas e aperte em **Start**. Em seguida, coloque o **Target Temperature**(Temperatura Alvo) na extrema extrema direita(Alta Temperatura), espere um tempo para que o sistema entre em equilíbrio, logo após mova para a esquerda(Baixa Temperatura). Dessa forma, ficará visível o efeito da temperatura na estrutura formada.

*Para mais intruções sobre a simulação veja a seção **Instruções** no final da página.*


<iframe height='900'  scrolling='no' title='Nanodrop' src='https://frugal-soft-condensed-matter-group.gitlab.io/nanodrop/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Nota-se que as partículas avermelhadas encontram-se na parte mais externa da estrutura, enquanto as mais internas tem cor verde. Isso acontece pois (não era pra ter virgula depois do pois) as partículas da borda estão sendo atraídas por todas as outras sem nenhuma atração contrária para equilibrá-las (aqui mudei tudo), já para as partículas internas, existe atração em todas as direções de forma que as forças se cancelam, assim como no [Cabo de Guerra](https://brasilescola.uol.com.br/educacao-fisica/cabo-guerra.htm) , quando os dois times estão equiparados. Dessa forma, as partículas mais externas são fortemente atraídas para o centro da estrutura criando uma camada muito coesa, que impede as partículas centrais de escorrerem para fora do menisco (cúpula no copo cheio de água) ou de se espalharem pelas superfície caso estejam numa gota, esse efeito é a **tensão superficial**.



## Conclusão
Podemos notar que essa propriedade misteriosa, que está presente em vários aspectos de nossa vida, pode ser explicada através de propriedades mais elementares, como as forças coesivas. Assim, observando as simulações, ganhamos intuição visual do que acontece entre duas partículas e vemos como essa propriedade escala e ganha força  para um grande número de átomos. Em suma, observamos a emergência de padrões na estrutura que são explicados pelas partes e definem eventos que acontecem em escala macroscópica.



## Instruções

* **Initialize**: Inicia a simulação
* **Faster**:  Aumenta a energia cinética total do sistema          
* **Slower**: Diminui a energia cinética total do sistema  
* **Gravity**: Não implementado. 
* **Target Temperature**: Energia Cinética desejada. 
* **Target Temperature**:Energia cinética atual do sistema. 
* **Código de cores**: Alto potencial de atração (vermelho), Alto potencial de atração (verde). 

## Referências

1. [Potencial de Lennard Jones](www.example.com)
2. [Artigo Wikipedia](https://en.wikipedia.org/wiki/Capillary_action) sobre efeitos capilares
3. [Artigo Wikipedia](https://en.wikipedia.org/wiki/Surface_tension) sobre tensão superficial
4. [Crash Chemistry cademy](https://www.youtube.com/channel/UCqL65NPW4ajAT5ahA3RkNJQ) 
5. [Video](https://www.youtube.com/watch?v=zMzqiAuOSz0) Sobre tensão superficial
6. [Website do Prof. Schroeder's]( http://physics.weber.edu/schroeder/) Inspiração das simulações feitas nesse post
7. [Repositório Gitlab](https://gitlab.com/frugal-soft-condensed-matter-group/nanodrop) do projeto NanoDrop
8. [Insetos, Partículas e suas Interações com Superfícies Líquidas](https://frugal-soft-condensed-matter-group.gitlab.io/fisex_website/pt-br/blog/2021/03/10/insetos-part%C3%ADculas-e-suas-intera%C3%A7%C3%B5es-com-superf%C3%ADcies-l%C3%ADquidas/)
9. [Tensão Superficial](https://www.usgs.gov/special-topic/water-science-school/science/surface-tension-and-water?qt-science_center_objects=0#qt-science_center_objects)



