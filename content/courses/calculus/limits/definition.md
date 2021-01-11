---
course: Calculus
unit: Limits
title: Delta-Epsilon Definition
index: 2
---


### Exploration

Aside from the intuitive definition we just saw, there is also a formal definition of a limit, known as the delta-epsilon definition. But before we get to the delta-epsilon definition, let's consider what a limit really is. 

Try dragging the $\delta$ (delta) slider below, and notice what happens to the rest of the graph.

<iframe src="https://www.desmos.com/calculator/zn8cexcigg?embed" style="border: 1px solid #ccc" id="graph1" width="500px" height="500px" frameborder="0"></iframe>


### Informal Definition

Suppose a function $f(x)$ is undefined at

$$
x=0
$$

but it is continuously defined everywhere else. One such function is

$$
f(x)=\frac{x^{3}+2x^{2}+x}{x}.
$$

However, we know that $f(x)$ is defined at

$$
x=\delta,
$$

where $\delta$ is a  non-zero value.
 
Think of $\delta$ as a car traveling towards $0$. As $\delta$ gets closer and closer to its destination,  
the value of $f(\delta)$ also gets closer and closer to some other destination, which we are trying to find. 
So, if $\delta$ was infinitesimally small, then $f(\delta)$ would pretty much equal that destination.

Hence, we can substitute $\delta$ for some infinitesimally small value, and easily see what the function evaluates to.

However, we must be careful: For example, we know that it's okay to divide by our nonzero, but how do we do it? 
How can we divide by an infinitesimally small number?

Let's try it out with an example.

$$
f(x)=\frac{x^{3}+2x^{2}+x}{x},
$$

In this equation, the numerator is divided by $x$. Now, if we plug in $x=\delta,$ where $\delta$ represents 
an infinitesimally small number, we can simplify it like so:

$$
f(x)=\frac{x^{3}+2x^{2}+x}{x} \rightarrow \frac{\delta^{3}+2\delta^{2}+\delta}{\delta} =\delta^{2}+2\delta+1.
$$

To evaluate this when $\delta$ is _almost_ $0$, we rewrite it as

$$
\lim_{\delta\to 0} \frac{\delta^{3}+2\delta^{2}+\delta}{\delta}=\lim_{\delta\to 0}\delta^{2}+2\delta+1.
$$

Now, we can plug in $\delta=0$ to find the value of the limit:
$$
\delta^2+2\delta +1= \delta(\delta+2)+1 \rightarrow 0(0+2) +1=1.
$$


### Formal Definition

