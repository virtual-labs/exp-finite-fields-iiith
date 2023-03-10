# Theory 
In all the previous experiments, we dealth with codes over binary alphabet. Codes can also be constructed over fields of size greater than $2$. In this experiment, we shall focus on finite fields in general. We will describe prime fields, construction of fields of size which is a power of prime, primitive element of a field, minimal polynomials and sub-fields of a finite field.

The theory associated with Experiment-6 is divided into six parts:

(1) Prime Fields  <br />
(2) Ring of polynomials and Extended Euclidean algorithm  <br />
(3) Construction of finite fields of prime power  <br />
(4) Primitive Element of a field  <br />
(5) Minimal Polynomials  <br />
(6) Sub-fields of a field  <br />

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

We will now describe the encoding of Hamming code through a diagram of 3 circles as shown in Fig. \ref{fig:hamming}.

%\begin{figure}
%  \centering
%  \fbox{
%  \includegraphics[width=3in]{Hamming_code.png}
%  }
 % \caption{[7,4,3] Hamming code represented using three circles.}
%  \label{fig:hamming}
%\end{figure}

Hamming code is a code over binary field $\mathbb{F}_2$ of length 7, dimension 4 and minimum distance 3. The encoding procedure of the Hamming code is given by the following equations:

\begin{eqnarray*}
p_5 & = & m_1 + m_2 + m_4 \mod 2, \\
p_6 & = & m_1 + m_3 + m_4 \mod 2, \\
p_7 & = & m_2 + m_3 + m_4 \mod 2.
\end{eqnarray*}
