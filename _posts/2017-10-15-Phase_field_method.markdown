---
layout: post
title:  "Phase Field Method/相场法"
date:   2017-10-15
author: "Joephy"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- Martensite Phase Transformation/马氏体相变
- Introduction/介绍
comments: true
---
An introduction to phase field method
------------

Phase field method is a very powerful method to describe the changing of an interface, such as the interface between liquid and gas, the interface between austenite and martensite and etc.


What we have to know is the Fick's law, it describes how the materials transport from a high concentration area to a low concentration area. The Fick's law is the key point for us to solve the phase field problems. 


In order to build up a phase field model, firstly, we have to determine the free energy function. It is the function of  order parameter. What is an order parameter? In a simple case, the order parameter is the concentration of a material in liquid, solid or gas. But in the phase transformation case, there are many order parameters can be chosen to become an order parameter, such as long order parameter and the volume fraction of martensite. After establishing the free energy function, the next step is using Fick's law to build up the driving force of the phase transformation. How to determine the constant in the variation equation and how to build up the free energy function is the most important part in the phase field method. We have to consider many things here, such as the constitutive equations, transport equations, energy conservation, mass conservation and etc.


And there are many ways to solve the PDE, differential method, finite elements, finite volumes are all suitable ways to solve the equations. Also, many software can help us to do it, such as Abacus, Console and even you can code a program to solve the equations. After that, we can get the development of the phase transformation process. 




Reference:

1. [Chen, L. Q. (2002). Phase-field models for microstructure evolution. Annual review of materials research, 32(1), 113-140.](http://www.annualreviews.org/doi/abs/10.1146/annurev.matsci.32.112001.132041)
2. [Artemev, A., Jin, Y., & Khachaturyan, A. G. (2001). Three-dimensional phase field model of proper martensitic transformation. Acta materialia, 49(7), 1165-1177.](http://www.sciencedirect.com/science/article/pii/S1359645401000210)
3. [Krill Iii, C. E., & Chen, L. Q. (2002). Computer simulation of 3-D grain growth using a phase-field model. Acta materialia, 50(12), 3059-3075.](http://www.sciencedirect.com/science/article/pii/S1359645402000848)
4. 


