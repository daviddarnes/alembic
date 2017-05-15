---
layout: post
title:  "2006, Abeyaratne, R., & Knowles, J. K., Evolution of Phase Transition"
date:   2017-05-15
author: "Joephy"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- Martensite Phase Transformation/马氏体相变
- Phase-field/相场法
comments: true
---
Introduction of phase transition
-----------

1. The Helmholtz free energy is: $F = U - TS$, it means the mechanical elastic energy and the internal energy. For the Gibbs free energy, it is : $F = U - TS + PV$, it considers the external work of the system. If we want to use Helmholtz free energy to solve the phase-field problem, the physical meaning is clear. But if we want to use the Gibbs free energy to solve the problem, because we already consider the external force potential energy here, it means the boundary condition has been considered, we should not use the boundary condition again. So it is why when we use Gibbs free energy to solve the problem, we often use Fourier transfer with a period boundary condition to solve the problem. In my point of view, the potential energy of external force is not the external work which is contributed by external force. The potential energy of external force is just a concept, it means the potential of the work which can be contributed by external force, it is not equaling to the work contributed by external force, it is just the potential. We can use gravity potential energy as a reference to it. But what we should know is that the potential energy is just depended on the final situation of the system, it is not relevant to the process.
2. Without inertial effects, if u is a minimizer of the total energy that satisfies the given displacement boundary conditions and has a single phase boundary, from the energy minimizer point of view, then the following must hold: the associated stress must be uniform in the bar, so that mechanical equilibrium prevails; the associated static driving force acting on the phase boundary must vanish so that phase equilibrium prevails. It means that the stress is uniform in the material. This is only for the quasi-static process, the Maxwell process, and ignores the dissipation because the driving force vanishes at all times. This theory is too restrictive to describe observed dissipative phenomena so there is no hysteresis in a cycle of loading and unloading.
3. Dissipation rate: the difference between the rate of work of the external forces acting on the sub-bar $[x_1, x_2]$ and the rate of change of total mechanical energy within it.
4. The phase transition will take place only the driving force is at least as great as a certain critical value. That is why the hysteresis exist.
5. This book also gives the theoretical model for the impact problem of the phase transition materials and introduce many basic and simple models.
6. After considering the thermodynamics theory, the books gives some models for the kinetics relations. (1) Viscosity-strain gradient model. In this model, it adds two coefficient, which are responsible for dissipation and sharp phase boundary, respectively. (2) Thermal activation model. It use the energy barrier to construct a difference between two phases. Then calculate the transition boundary's propagation speed and driving force. (3) Propagation through a row of imperfections. Consider all the energy and very similar to phase-field model. (4) Kinetics from atomistic considerations. Considering the atoms' interaction with each other.
7. Not only consider the one dimensional problem, but also introduce the 2D and 3D problems. It also build a model for the kinetics of martensitic twinning. It consider the fine twinning, the transition layer and the energy barrier of the phase transformation process. The total energy can be treated as the Gibbs free energy, concluding elastic energy (transformation layer), tips energy (fine twinning) and loading energy (external force). Also, it set an energy barrier for the material.


This book introduce many basic models for the phase transition. From the easiest 1D equilibrium model to 3D twinning model, also it considers many impact models. It is a good reference book for the evolution of phase transition.

Reference:

1. [Abeyaratne, R., & Knowles, J. K. (2006). Evolution of phase transitions: a continuum theory. Cambridge University Press.](https://books.google.com.hk/books?hl=en&lr=&id=GFh4N8rWfS0C&oi=fnd&pg=PR13&dq=Evolution+of+phase+transitions&ots=iYYnje9wqw&sig=vkzvTdJvFFbPcpubtw3fkZgdov0&redir_esc=y#v=onepage&q=Evolution%20of%20phase%20transitions&f=false)
2. [Ball, John M., and Richard D. James. "Fine phase mixtures as minimizers of energy." Archive for Rational Mechanics and Analysis 100.1 (1987): 13-52.](http://download.springer.com/static/pdf/405/art%253A10.1007%252FBF00281246.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2FBF00281246&token2=exp=1493264235~acl=%2Fstatic%2Fpdf%2F405%2Fart%25253A10.1007%25252FBF00281246.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252FBF00281246*~hmac=84b6ae1dfd20dac7cc4836705297548cea4a288cbb674499530da9c637d63b6d)
3. [Gibbs free energy](https://en.wikipedia.org/wiki/Gibbs_free_energy)
4. [Helmholtz free energy](https://en.wikipedia.org/wiki/Helmholtz_free_energy)


