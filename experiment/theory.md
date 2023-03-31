# Theory 
In all the previous experiments, we dealth with codes over binary alphabet. Codes can also be constructed over fields of size greater than $2$. In this experiment, we shall focus on finite fields in general. We will describe prime fields, construction of fields of size which is a power of prime, primitive element of a field, minimal polynomials and sub-fields of a finite field.

The theory associated with Experiment-6 is divided into six parts:

(1) Prime Fields  <br />
(2) Ring of polynomials and Extended Euclidean algorithm  <br />
(3) Construction of finite fields of prime power  <br />
(4) Primitive Element of a field  <br />


## 1 &nbsp; &nbsp;Prime Fields
Consider a set $\mathbb{F}_p = \{0, 1, \ldots, p-1 \}$, where $p$ is prime. The addition and multiplication operations for any $a, b \in \mathbb{F}_p$ are defined as $a +_p b = a+b \mod p$ and $a ._p b = a.b \mod p$. For simplicity of notation, we will use $+$ instead of $+_p$ and $.$ instead of $._p$ subsequently in the theory.

We would like to argue that $(\mathbb{F}_p, +, .)$ is a field.  In Experiment-1, field definition is given. It is easy to verify that the following field properties of $(\mathbb{F}_p, +, .)$ 

 - Closure under addition, multiplication
 - Commutativity under addition, multiplication
 - Distributivity with respect to addition and multiplication
 - Additive identity is $0$ and multiplicative identity is $1$
 - Additive inverse of $a$ is $p-a$.
    
The only property which requires to be verified carefully is the existence of multiplicative inverse for every non-zero element in the field. In order to prove that, we need to invoke the fact that $p$ is prime. Consider $a \neq 1 \in \mathbb{F}_p$. $a$ is co-prime with $p$ as $p$ is a prime number. Hence, $gcd(a,p)=1$. Thus, it turns out, there are two integers $x,y$ such that $ax + py = 1$. Doing $\mod p$ operation on the above relation, we have that $a.(x \mod p) = 1 \mod p$. Thus, $x \mod p$ is the required multiplicative inverse of $a$ in the field $\mathbb{F}_p$.

Consider the case of $p=7$.


## 2 &nbsp;&nbsp;Ring of Polynomials and Extended Euclidean Division Algorithm
Consider the set of all polynomials with coefficients from $\mathbb{F}_p$, denoted by $\mathbb{F}_p[x]$ where $x$ is an indeterminate. Addition and multiplication are defined as ordinary addition and multiplication with the difference being the coefficient operations are carried out mod $p$. 

For example, consider the ring of polynomials $\mathbb{F}_7[x]$. Let $a(x) = 1 + 3x + 4x^2 + 6x^5$ and $b(x) = 2 + 5x^2  + 5x^5 + x^6$, then we have that 
$$\begin{equation*}
    a(x) + b(x) = 3 + 3x + x^3 + 4x^5 + x^6
\end{equation*}$$

We also know the product of $a(x)$ and $b(x)$ 

Consider a polyomial $f(x)$ of degree m, given by $f(x) = \sum_{i=0}^m f_i x^i$. $f(x)$ is said to be monic if $f_m=1$.

A monic polynomial $f(x)$ over $\mathbb{F}_p$  of degree $d$ is said to be irreducible if it cannot be factored into the form:
$$\begin{equation*}
    f(x) = g(x) h(x),
\end{equation*}$$

where $0 < \text{deg}(g(x), \text{deg}(h(x) < \text{deg}(f(x) = d$.

Consider a binary field with $p=2$ and $\mathbb{F}_2 = \{0,1\}$. The list of all irreducible polynomials over $\mathbb{F}_2$ upto degree 4 are given in the table below:
It can be shown that for every prime $p$, and every integer $m \geq 1$, irreducible polynomials of degree $m$ exist.

## 3 &nbsp;&nbsp;Construction of Finite Fields
Consider the set $\mathbb{F}_p[x]/f(x)$, where $f(x)$ is irreducible of degree $m \geq 2$. $\mathbb{F}_p[x]/f(x)$ is the collection of equivalence classes where we define
$$\begin{equation*}
    g_1 \sim g_2
\end{equation*}$$
## 4 &nbsp;&nbsp;Structural Properties of Finite Fields

Consider a finite field $\mathbb{F}_q$ with $q$ elements. The characteristic $p$ of $\mathbb{F}_q$ is the smallest integer $p$ such that $\underbrace{1 + 1 + \ldots + 1}_{p times} = 0$ in $\mathbb{F}_q$. Hence, $\mathbb{F}_q$ contains the set $\{0,1,\ldots, p-1\}$. The arithmetic used to operate on these elements is $\mod p$ arithmetic since $p \equiv 0$ in $\mathbb{F}_q$. It can be shown that the characteristic $p$ is a prime. Hence, $\mathbb{F}_q$ contains a copy of $\mathbb{F}_p$. It can be shown that if $\mathbb{E}$ and $\mathbb{F}$ are fields and $\mathbb{E} \supseteq \mathbb{F}$, then $\mathbb{E}$ is a vector space over $\mathbb{F}$. It follows that $\mathbb{F}_q$ is a vector space over $\mathbb{F}_p$. Let $m$ be the dimension of this vector space over $\mathbb{F}_p$. Then, we have
\begin{equation*}
    \mathbb{F}_q = \{ \sum_{i=1}^m a_i \underline{\gamma}_i | a_i \in \mathbb{F}_p \},
\end{equation*}

where $\{ \underline{\gamma}_1, \ldots, \underline{\gamma}_m \}$ is a basis of $\mathbb{F}_q$ over $\mathbb{F}_p$. It follows that $\mathbb{F}_q$ is of size $p^m$. 

Thus, every finite field $\mathbb{F}_q$ has size $q$ of the form $q = p^m$, $p$ prime, $m \geq 1$ (moreover $p$ is the characteristic of $\mathbb{F}_q$. 

We denote $\mathbb{F}_q^* = \mathbb{F}_q \setminus \{0\}$. The multiplicative order of $\beta \in \mathbb{F}_q^*$ is the smallest exponent $e$ such that $\beta^e = 1$. Every finite field $\mathbb{F}_q$ contains an element $\alpha$ of order $q-1$. In terms of $\alpha$, $\mathbb{F}_q$ has the representation
$$\begin{equation*}
    \mathbb{F}_q = \{0\} \cup  \{ \alpha_i | 0 \leq i \leq q-2\}.
\end{equation*}$$
An element $\alpha \in \mathbb{F}_q^*$ of order $q-1$ is called a primitive element of $\mathbb{F}_q$.

For example, consider $\mathbb{F}_{2^4} = \mathbb{F}_2[x]/(x^4+x^2+1)$. Note that $x^4+x^2+1$ is irreducible over $\mathbb{F}_2$.  Denote $\alpha = [x]$, the equivalence class of $[x]$ in $\mathbb{F}_2[x]/(x^4+x^2+1)$. Alternately, we may regard $\alpha$ as the imaginary element satisfying $\alpha^4+\alpha+1=0$. Now, we will show that we can express all the non-zero elements of $\mathbb{F}_2[x]/(x^4+x^2+1)$ as powers of $\alpha$.
In the following table, we will get an element by multiplying the previous element by $\alpha$
 and then applying the condition $\alpha^4+\alpha+1 = 0$. We also use the condition every element is its own additive inverse. This is because the characteristic of the field is $2$.

