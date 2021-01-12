---
title: Getting started
---

# Writing courses in Markdown

## Starting a new course

1. Create a folder in [`/content/courses`](https://github.com/ymath-io/ymath.io/tree/master/content/courses) with the name of your course. Whatever the name of  the folder is will decide the URL at which your content will be served. So for example, if you're writing about *Pineapple Pizza*, then the name of the folder would be `pineapple-pizza`. 

(Please don't write about pineapple pizza.)

2. Inside this folder, create a file `index.md`. This file establishes the existence of your course, and provides important metadata about it such as the title, a short tagline, and a URL to the thumbnail image that should appear in the Course Catalog.

This metadata is mandatory and should be placed at the top of the file, like this:

#### /content/courses/pineapple-pizza/index.md

```markdown
---
index: 0 # Important if you want the course to show up in the Catalog 
title: Pineapple Pizza # generally we keep this the same as the course name, it establishes the title of the home page.
course: Pineapple Pizza
description: It's soggy and sweet, although pizza is supposed to be savory. Not sure what it's for, I tried eating it but judging by how that went I think it has another purpose.
thumbnail: /img/pineapple-pizza.jpg   # these files are served through the /static folder.
---

No need to have a title, just start writing a course description right away.
In the Pineapple Pizza course, we will learn about the different ways of destroying pizza. 
For this course, you will need an internet connection and a strong stomach.

```

## Writing a lesson

All courses follow a structure of `/course/unit/lesson`.
Each lesson needs to have a property `index` in the front matter. (Just like the `index: 0` in `index.md`!)
For example, a directory structure might look like this:

```markdown
└── pineapple-pizza
    ├── index.md
    ├── first-unit
    |   ├── lesson-one.md (index: 1)
    |   └── lesson-two.md (index: 2)
    └── next-unit
        ├── lesson-one.md (index: 3)
        └── lesson-two.md (index: 4)


```

Apart from `index`, lessons also need `course`, `unit`, and `title`. These would be the names of the course and unit that the lesson is a part of.

### Math

To write math, just use dollar signs. To write display math, use double dollar signs.

```latex
$\frac{a}{b}$

$$
\frac{A}{B}
$$

```

### Sectioned lessons

For some lessons, we only want the student to be able to proceed after answering a question. For this, lessons accept a special format called `sections`. To declare that the file implements this format, add and additional property to the file as shown below.

For each section of text, enclose it in tags:

```
[begin]

content

Problem statement

[end]
```
Between sections, you must include another set of tags `<..>` that indicate the options for the question and which option is correct. In the brackets, enclose a comma-separated list, where the first item tells the position of the correct answer, and the rest of the items are the answer choices. For example:

```markdown
---
sections: true
---

[begin]

blah blah blah.

Why did the chicken cross the road?

[end]

<2,It wanted to see the other side,It didn't,Nobody cares> 

[begin]

The chicken did not cross the road, I never said that it did.

What is 53-3?

[end]

<2,5,50,500,5000,50000>

[begin]

50+3-3=50.

Bye.

[end]

```
