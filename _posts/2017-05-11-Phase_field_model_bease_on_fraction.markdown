---
layout: post
title:  "2016, K. Tůma, S. Stupkiewicz, H. Petryk, Size effects in martensitic microstructures: Finite-strain phase field model versus sharp-interface approach"
date:   2017-05-11
author: "Joephy"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- Martensite Phase Transformation/马氏体相变
- Phase-field/相场法
comments: true
---
Base on the phase-field equation, it uses another order parameter to build up the free energy function and solve it.
-----------

1. It uses the previous work, which is about the sharp-interface approach extended to interfacial energy effects. It does not give out the length of the interface, but just calculates some spectacular interfacial lengths and compare with the previous work.
2. Use the volume fraction as the order parameter to build up the free energy equation. There are two kinds of order parameters, one is the ratio of austenite and martensite, another is the ratio of different variants of martensite.
3. Firstly, it use the Helmholtz free energy to build up the free energy function, it includes the gradient energy and the bulk energy. And then, it consider the potential energy of external loads and the dissipation potential. Lastly, the problem is reduced to the constrained minimization problem.
4. To solve the problem, it uses backward-Euler time integration scheme applied to the rate problem. And it uses AceGen/AceFEM system as the finite element tool to solve the problem.

Reference:

[Tůma, K., Stupkiewicz, S., & Petryk, H. (2016). Size effects in martensitic microstructures: Finite-strain phase field model versus sharp-interface approach. Journal of the Mechanics and Physics of Solids, 95, 284-307.](http://www.sciencedirect.com/science/article/pii/S0022509615300910)

