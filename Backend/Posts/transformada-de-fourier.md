---
date: 2021-05-06
Title: "Transformada de fourier"
Description: "Propriedades da transfomada de fourier"
Tags: Math
---

## Qual a relação da transformada com a função delta?
Sabemos que 

$$\tag{0} f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(k) e^{-ikx} dk$$   

$$\tag{1}F(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{ikx} dx$$ 


Queremos achar a [[Transformada de Fourier]] da função [[Delta de Dirac]], portanto

$$\tag{3}\Delta(k) =  \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \delta (x) e^{ikx} dx$$ 


Como $\delta (x)$  é zero em todos os pontos menos em x=0. Temos que


$$\tag{4}\Delta(k) =  \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \delta (o) e^{0} dx = \frac{1}{\sqrt{2\pi}}$$ 

realizando a transformada inversa

$$\tag{5} \delta(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \left [ \cos(-kx) + i \sin(kx) \right]  dk$$ 


Como $\sin$ é impar $\int_{-\infty}^{\infty} \sin(-kx) dk = 0$

já para $\cos$, todas as diferentes frequências irão sofrer interferência destrutiva com excessão do ponto $x=0$  que todas as funções terão valor 1.


Essas características concordam com as da função [[Delta de Dirac]]


## Exemplo 

Considere a função 

$$\tag{6}f(x) = 
        \begin{cases}

             1, & |x| \le a \\

             0, & |x| \geq a

       \end{cases}$$ 


realizando a transformada 


$$F(k) =  \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty}  e^{ikx} dx = \frac{1}{\sqrt{2\pi}} \frac{e^{ikx}}{ik} \vert _{-a}^{a}$$ 

$$= \frac{1}{\sqrt{2\pi}} \frac{1}{ik} \left ( e^{ika} - e^{-ika} \right) = \frac{2}{k \sqrt{2\pi} \sin(ka)}$$ 


realizando a transformada inversa 

$$f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \frac{2}{k \sqrt{2\pi}} \sin(ka) e^{-ikx}  dk =$$ 

$$= \frac{1}{\pi} \int_{-\infty}^{\infty} \frac{e^{ika} - e^{-ika}}{2ik} e^{-ikx} dk$$ 

$$ = \frac{1}{2\pi i} \left ( \int_{-\infty}^{\infty} \frac{e^{ik( a-x)}}{k}  dk -  \int_{-\infty}^{\infty} e^{-ik ( a+x)} dk \right)$$ 


Devido a complixidade da integral tomaremos a sua derivada em relação à $x$ 

$$\tag{7} \frac{d f(x)}{dx} - \delta (x-a) + \delta(x+a)$$ 


A função que, quando derivada da a funçõa delta é a função degrau.


## Propriedades importantes


### a)
Se $f(x)$  for real, $F^* (k) = F(-k)$ 

como 

$$\tag{8}F(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{ikx} dx$$ 


$$\tag{9}F^* (k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-ikx} dx = F*(-k)$$ 

---
### b) 

Se $f(x)$  for par, $F(k)$ é real 

$$\tag{10}F(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{ikx} dx$$


$$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \cos(kx) dx + i \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \sin(kx) dx$$ 

Como o produto de $f(x) \sin(kx)$  é impar sua integral no intervalo simétrico é nula, dessa forma, restando apenas a parte real.

Seguindo a mesma lógica com $f(x)$ ímpar, $F(k)$ será somente imaginário.

---
### d)

> Adotando a seguinte notação $\mathcal{F} \left [f(x) \right] = F(k)$ 


$$\mathcal{F} \left [e^{ax}f(x)\right]  = F(k-ia)$$ 


$$ \mathcal{F} \left [e^{ax}F(X)\right]  = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{i(k-ia)}x dz = F(k-ia)$$ 


---
### e)


$$\mathcal{F} \left [f(x-a)\right]  = e^{ika}F(k)$$ 

$$\mathcal{F} \left [f(x-a)\right] = \int_{-\infty}^{\infty} f(x-a) e^{ikx} dx$$

realizando a seguinte mudança de variável $y=x-a$ e $x=y+a$. Portanto

$$\frac{1}{\sqrt{2\pi} }\int_{-\infty}^{\infty}  f(y) e^{ik(y+a)} dy = e^{ika}F(k)$$ 



---
### f) 

$$\mathcal{F} \left [\frac{d f(x)}{d x} \right]  = -ikF(k)$$ 


$$\mathcal{F} \left [\frac{d f(x)}{d x} \right] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f^{'} e^{ikx} dx$$ 

realizando uma integração por partes


--- 

# Referências e recursos
- 