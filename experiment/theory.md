# Theory 

The theory associated with Experiment-1 is divided into two parts:

(1) Preliminaries

(2) Linear block codes

## Preliminaries

This section will introduce some preliminaries about finite fields,
binary arithmetic, and vector spaces that are relevant to Experiment-1.
For a detailed discussion of the topics, please refer \[1, Ch. 2\] and
\[2, Ch. 1\]. We shall discuss the following topics:

-   Introduction to finite fields and binary arithmetic.

-   Vector space spanned by the given set of vectors.

### Introduction to finite fields and binary arithmetic


For all the experiments considered in this virtual lab, we consider
vectors and matrices that are defined over a finite field. In order to
define a finite field, we need to first define a "binary operation",
which is provided next.

**Definition 1** _(Binary operation): Let F be a set of elements. A binary  operation ⋆ is
a rule that assigns to each pair of  elements a , b ∈ F a uniquely defined third element
c = a ⋆ b ∈ F._

For example, consider the set of real numbers, denoted by R. It can be verified
that the addition operation defined for real numbers is a binary operation. In order to
define a field, consider a set F on which two binary operations called addition (+) and
multiplication (·) are defined. For the given {F , + , .}, definition of the field is given below.

**Definition 2** _(Field):{F,+,·}is said to be a field if satisfies the following axioms:_

-   *Associativity* of (+) and (\cdot): Elements
    a, b, c \in \mathbb{F} satisfy a + (b + c) = (a + b) + c and
    a \cdot (b \cdot c) = (a \cdot b) \cdot c.

-   *Commutativity* of (+) and (\cdot): Elements
    a, b, c \in \mathbb{F} satisfy a + b = b + a and
    a \cdot b = b \cdot a.

-   *Distributivity of multiplication over addition*: Elements
    a, b, c \in \mathbb{F} satisfy
    a \cdot (b + c) = (a \cdot b) + (a \cdot c).

-   *Additive identity*: There exist an element 0 \in \mathbb{F} such
    that a + 0 = a.

-   *Multiplicative identity*: There exist an element 1 \in \mathbb{F}
    such that a \cdot 1 = a and 1 \neq 0.

-   *Additive inverses*: For every a \in \mathbb{F}, there exists an
    element in \mathbb{F}, denoted by -a, called the additive
    inverse of a, such that a + (-a) = 0.

-   *Multiplicative inverses*: For every a \neq 0 \in \mathbb{F},
    there exists an element in \mathbb{F}, denoted by a^{-1} or
    1/a, called the multiplicative inverse of a, such that
    a \cdot a^{-1} = 1.
    
It can be verified that the set of real numbers R along with the addition and multiplication defined over 
real numbers is a field. However the set of integers alongwith the addition and multiplication
defined over integers is not a field, since for integers multiplication
inverses are not integers.

Let us now consider an example of a field with finite number of
elements. Consider a set \mathbb{F}_2 =  { 0, 1 }  with the addition
and multiplication operations for any a, b ∈ \mathbb{F}_2 defined as Equation (1)


 \begin{pmatrix}
 0 + 0 = 0\\  
 0 + 1 = 1\\                         
 1 + 0 = 1\\   
 1 + 1 = 0\end{pmatrix} 
 \space
 \space
 \space
 \space
 \begin{pmatrix}
 0 . 0 = 0\\
 0 . 1 = 0\\
 1 . 0 = 0\\
 1 · 1 = 1\end{pmatrix}         
 
####
It can be verified that the set \mathbb{F}_2 alongwith the addition and multiplication operations defined in Eq. (1)
is a field, since it satisfies the axioms of Definition 2. Such a field with finite number of elements is called as a *finite field*. For most
of the experiments in this virtual lab, we will focus on the binary field \mathbb{F}_2 = {0,1}. 
We shall study more about finite fields in Experiment-6.


Except for Experiments 6 and 7, we will consider vectors and matrices
defined over the binary field \mathbb{F}_2. Vectors are denoted by
boldface letters and the components of a vector are denoted by lower
case letters, e.g. the components of a vector
\mathbf{v} \in \mathbb{F}_2^n are denoted by
\mathbf{v} = \begin{pmatrix}v_1 & v_2 & \ldots & v_n \end{pmatrix}, where
each v_i \in \mathbb{F}_2 for i = 1, 2, \ldots, n. Vectors can
either be considered as row vectors or columns vectors, depending on the
context. Matrices are denoted by upper-case letters, e.g. consider a
matrix M in \mathbb{F}_2^{m \times n} with m rows and n columns.
The component of the matrix M corresponding to the ith row and jth
column, for 1\leq i \leq m and 1\leq j \leq n, is denoted by
M_{ij}.

We shall next define addition and multiplication operations for vectors
and matrices that are defined over \mathbb{F}_2:

-   Addition of two vectors: The addition of two vectors
    \mathbf{v}, \mathbf{w} \in \mathbb{F}_2^n consists of addition of
    their respective components defined according to Eq. (1), i.e.,
    \begin{aligned}
    %  
    \mathbf{v} + \mathbf{w} = 
    %  
    \begin{pmatrix}
    % 
    v_1 \\ v_2 \\ \vdots  \\ v_n  
    % 
    \end{pmatrix}
    % 
    +
    \begin{pmatrix}
    % 
    w_1 \\ w_2 \\ \vdots  \\ w_n
    % 
    \end{pmatrix}
    % 
    =
    % 
    \begin{pmatrix}
    % 
    v_1 + w_1 \\ v_2 +w_2 \\ \vdots  \\ v_n+w_n
    % 
    \end{pmatrix}.
    % 
    % \end{aligned} For example,
    \begin{pmatrix} 1 & 0 & 1\end{pmatrix} + \begin{pmatrix} 0 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & 0 & 0\end{pmatrix}.

-   *Multiplication of a vector by a scalar:* For a vector
    \mathbf{v} \in \mathbb{F}_2^n and a scalar a \in \mathbb{F}_2,
    a \cdot \mathbf{v} is given by \begin{aligned}
    %  
    a \cdot \mathbf{v} = 
    % 
    a \cdot
    \begin{pmatrix}
    % 
    v_1 \\ v_2  \\ \vdots  \\ v_n
    % 
    \end{pmatrix}
    % 
    =  
    \begin{pmatrix}
    % 
    a \cdot v_1 \\ a \cdot v_2 \\ \vdots  \\ a \cdot v_n
    % 
    \end{pmatrix},
    % 
    % \end{aligned} where the operation a \cdot v_i for
    i = 1, 2, \ldots, n is performed according to Eq. (1). For
    example,
    1 \cdot \begin{pmatrix} 1 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & 0 & 1\end{pmatrix}.

-   *Multiplication of a vector and a matrix*: For a vector
    \mathbf{v} \in \mathbb{F}_2^n and a matrix
    M \in \mathbb{F}_2^{n \times m}, \mathbf{v} \cdot M is given by
    \begin{aligned}
    %  
    \mathbf{v} \cdot M &= 
    % 
    \begin{pmatrix}v_1 & v_2& \ldots& v_n\end{pmatrix}
    \cdot \begin{pmatrix}
    M_{11} & M_{12} & \ldots& M_{1m} \\
    M_{21} & M_{22} & \ldots& M_{2m} \\
    \vdots \\
    M_{n1} & M_{n2} & \ldots& M_{nm}
    \end{pmatrix} \\
     
    &= \begin{pmatrix}
    v_1 \cdot M_{11} + v_2 \cdot M_{12} + \ldots + v_n \cdot M_{1m} \\
    v_1 \cdot M_{21} + v_2 \cdot M_{22} + \ldots + v_n \cdot M_{2m} \\
    \vdots \\
    v_1 \cdot M_{n1} + v_2 \cdot M_{n2} + \ldots +  v_n \cdot M_{nm}
    \end{pmatrix},
    % \end{aligned} where note that each component wise addition and
    multiplication is performed according to Eq. (1). Consider the
    following example. \begin{aligned}
    %  
    % \mathbf{v} \cdot M &= 
    % 
    \begin{pmatrix}1 & 0& 1\end{pmatrix}
    \cdot \begin{pmatrix}
    0 & 0 & 1& 1 \\
    0 & 1 & 1& 0 \\
    1 & 0 & 1& 1 
    \end{pmatrix} 
    % 
    &= \begin{pmatrix}
    1 & 0 & 0 & 0 
    \end{pmatrix}.
    % \end{aligned}

Vector space spanned by the given set of vectors

