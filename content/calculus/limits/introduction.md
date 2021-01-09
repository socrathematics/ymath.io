---
course: Calculus
unit: Limits
title: Introduction to Limits
index: 1
---

Limits are the basis for almost everything in calculus. By the time you get to
derivatives, you'll be doing limits and you won't even know it. To become
familiar with what a limit is, let's consider the function

$$
f(x) = \frac{x^2-1}{x-1}. 
$$
What is the value of this function at $x=1$? 

<mutli-practice :options="['0','1','indeterminate','infinity']" correct="2" ></mutli-practice>


$\frac{0}{0}$ is indeterminate, so the function $f(x)$ would be indeterminate at $x=1$. 
However, the function is defined at $x=0.9$ and $x=1.1$: 

$$
f(0.9) = 1.9
$$

$$
f(1.1) = 2.1
$$

In fact, the function is defined for any $x\pm \delta,$ where $\delta \neq 0.$

In this lesson, we'll be considering the case where $\delta$ is very close, but not equal to $0.$


<iframe src="https://www.desmos.com/calculator/ti0fuxp3s6?embed" class="graph" style="border: 1px solid #ccc" id="graph1" frameborder="0"></iframe>

Try dragging the black point to $x=1$
in the above graph, and you will notice that the point disappears.

However, notice that it "looks like"

$$
f(1)=2.
$$

So, we can say that

$$
\lim_{x\to 1} f(x) = 2.
$$

The english for this is "As $x$ approaches 1, $f(x)$ approaches $2$."

Another possible interpretation is "The limit of $f(x)$ as $x$ approaches 1 is $2$."

This does not mean that $f(1)=2$ , but rather that if $x$ is very close to $1$, then is $f(x)$ very close to $2$.

Notice that the graphed function is linear. What linear function does it look like?


<mutli-practice :options="['y=x^2-1','y=x+1','y=x','y=x-1']" correct="1" ></mutli-practice>

