---
layout: post
title:  "Latex Introduction"
date:   2018-01-27
author: "Joephy"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- Introduction/介绍
comments: true
---
An introduction Latex
------------

There are many famous wars in this world, Microsoft Word vs Latex is one in it. Actually, if one want to change the article editing tool from Microsoft Word to Latex, it will be a difficult thing because these two tools are totally different. Microsoft Word is a GUI to edit the files you need and you have to click many buttons to change the outline of your files. But Latex is like coding, if you want to have an equation, enlarge the words or change the color, all are needed to code. But there is one benefit if you choose Latex, you will not worry about the typesetting of your file too much. To be honestly, these two typesetting tools are for different targets. 

>Microsoft Word: It is invented by Microsoft company. In the beginning, the user can only type some words in it. And because a lot of users want to use more complicated functions, so Microsoft company adds many functions in it and makes Microsoft Word a big and useful tool now.

And Latex is different:

>Latex: Originally, because the Microsoft Word is not good at sorting the figures, tables and references, and those things are very important to academic area. For researchers who want to publish a paper, a useful tool to sort up the figures, tables and references is needed. And this is the advantage of Latex. In Latex, once you name a reference or figure, you will not worry about the number of them and just keep on writing. Also, if one likes coding, Latex will be the first choose because every thing in Latex should be coded. If one just wants to use a tool to edit and do not like coding, I will recommend him to Word.

The things above are briefly introducing the Latex and Microsoft Word and now, I will introduce Latex a little bit more.Let's use an example to introduce the basic thing of Latex:

<pre><code>
    \documentclass[UTF8]{article}      %%%% In the very beginning, we should
                                            define the style of our file, it
                                            should be book, article, paper or
                                            other things and also, UTF8 here means
                                            we can use Chinese in this file.
                                            
    \title{Write your file's title here}
    \author{Name of author}
    \bibliographystyle{unsrt}          %%%% If you have any reference and want to
                                            show them, just write this code and 
                                            unsrt means different style to sort up
                                            your references.

    \usepackage{amsmath, graphicx}     %%%% If you want to use some math symbol or 
                                            equations, figures or subfigures, you
                                            must add some pakages here to initial 
                                            the software and let it knows what you
                                            need in this file.
    \usepackage{subfigure}

    \begin{document}                   %%%% If every things are setting up, you
                                            can begin to write your article now
    \date{}                            %%%% Show the date you edit the file.
    \maketitle                         %%%% Show title.
    \begin{abstract}                   %%%% Begin abstract, if any.
    \textbf{Keywords:}                 %%%% textbf here means using bold word.
    \end{abstract}                     %%%% Do not forget to end abstract.
    \tableofcontents                   %%%% Make contents
    \section{Section name}             %%%% Begin the section one and do not worry
                                            about the order of your section. Also, 
                                            the contents will change according to
                                            the section in your file.
    \subsection{Subsection name}       %%%% If you want a subsubsection, just type
                                            \subsubsection{name} and as so on.               
    \begin{equation}                    
        p_Y=\frac{tR}{Y},
    \end{equation}                     %%%% Here is the equation part. You can
                                            type many strange symbol here and 
                                            if you want to use symbol or equation
                                            in the file, you can type $equation$.
                                            And if you have some problems, check
                                            the package first. Do not forget to
                                            end this part.
                                            
    \begin{equation}
    \begin{cases}
        1,\\
        2.
    \end{cases} \label{labelname}
    \end{equation}                     %%%% Using this, you can type many
                                            equations and tables and the Latex
                                            will help you to sort them up. If you
                                            want to cite them in file, just give
                                            them a name, \label{labelname}, then
                                            use \cite{labelname} to cite. It is
                                            the same if you want to cite 
                                            reference. And if you want to use
                                            bibtex to edit the references, do not
                                            forget to run Latex first, then bibtex
                                            and then run Latex twice, and finally
                                            you will find the Latex will sort up
                                            everything for you.
                                            
    \begin{figure}
    \centering
    \includegraphics[scale]{figurename}
    \caption{Edit the figure caption}
    \end{figure}                           %%%% Here is an example to insert
                                                figure and center it.
                                            
    \end{document}                         %%%% Do nor forget to end your file.
</code></pre>

This is a very simple example for you to begin to use Latex. And if there are something wrong in your code, please do no ignore the attention and warning which is generated by Latex itself. I emit a lot of functions of Latex here, such as inserting table, adjust the scale of the word, insert subfigure and etc. What's more, Latex can also be used to edit PPT, although the PPT here do not have any animations. And I just give an example for reference.

<pre><code>
\documentclass{beamer}
\usepackage{times}
\usepackage{mathptmx}
\usefonttheme{serif}
\usetheme{Berkeley}
\usecolortheme{spruce}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\title{Title}
\institute{}
\author{}
\date{\today}
\subject{}
\logo{\includegraphics[scale]{figurename}}

\begin{document}
\begin{frame}
\titlepage
\end{frame}

\begin{frame}{Content}
\tableofcontents
\end{frame}

\section{Section one}
\begin{frame}
\begin{itemize}
\item
\item
\end{itemize}
\end{frame}

\section{Section two}
\begin{frame}
\begin{block}{title}
this is a block
\end{block}
\end{frame}

\end{document}
</code></pre>

Latex is a useful tool to edit the article and paper and it is very good if you use MacBook and want to use a lot of figures, equations and references. Also for the people who do not like Microsoft Word, Latex is a good choice. There are many sources in Internet to learn how to utilize Latex, if you are interested in it, you can search and learn.

Reference:
1. Latex入门(作者：刘海洋，电子工业出版社)
2. [Latex for Beginners](http://www.docs.is.ed.ac.uk/skills/documents/3722/3722-2014.pdf)
3. [Latex Software](http://www.tug.org/mactex/)
4. [Latex Symbols](https://artofproblemsolving.com/wiki/index.php/LaTeX:Symbols)
5. [Latex Colors](https://www.sharelatex.com/learn/Using_colours_in_LaTeX)



