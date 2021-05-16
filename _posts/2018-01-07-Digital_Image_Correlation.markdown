---
layout: post
title:  "Digital Image Correlation"
date:   2018-01-07
author: "Joephy"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tag:
- Optical Microscope/光学显微镜
- Introduction/介绍
comments: true
---
An introduction to Digital Image Correlation
------------

Digital Image Correlation is a technology to observe the surface strain and stress on a material under some thermal or mechanical loadings. It uses camera to capture series pictures during the loading process and track some specific points on the material and get the displacement field, so we can know the strain and stress on the material's surface. Here I just use a simple way to introduce the digital image correlation, how it works and what can we do with it.

## History

Digital image correlation is an optical metrology based on digital image processing and numerical computing. The first research group to use this kind of technics is at the University of South Carolina in 1980s (see reference 7 in details). Actually, there are many different name for the same technics, such as, digital speckle correlation, computer-aided speckle interferometry, electronic speckle photography and etc..

During this three decades, this kind of technics had been improved a lot. In my opinions, the critical improvements are the improvement of the correlation function (in order to find the exact region before and after the deformation), deformation function (describes the material's deformation) and different method to estimate the deformation gradient.

And also, some people also use 2 cameras to get the 3D strain field of a material. Also, because the machine learning is growing rapidly, maybe in the future, researchers can develop a algorithm which is using machine learning to calculate the strain-stress field on a deformed materials. But the most important thing is the working principle of digital image correlation and I am going to introduce it.

## Working principle

In the beginning, people just use one camera to capture series of pictures on the materials' surface and assume that:

1. The material's surface is parallel to the camera's sensor.
2. The deformation in z direction, which is perpendicular to the camera's sensor can be ignored.
3. The image system should not suffer from geometric distortion. Although it is impossible to fully avoid the distortion, the distortion should be small enough so we can ignore it.

With just one camera, it is impossible to detect the displacement field in 3D. Only the deformation is small enough to be ignored, can people know the displacement field in other two directions. So people can track the movement of the points on the materials' surface.

Under the assumptions above, the camera will capture series pictures under the process of deforming the material. The process is like this:

Step one: Prepare the specimen, make some speckles or special markers on it so that the intensity distribution of every sub-region is unique, so when we using computer to analyze the pictures, computer can distinguish different sub-region between two different pictures. 

Step two: Tracking the same points between the two images recorded before and after the material deformation. This step majority using correlation criterion to match the same sub-region among series of photos. In my point of view, it is using the intensity distribution to distinguish the unique region, to search the least different intensity distribution and mark it as the same region before and after the deformation. Here, there are many algorithm to speed up the searching speed, such as sub-pixel displacement registration algorithm and coarse-fine search algorithm.

Step three: Calculate the displacement field base on step two. According to step two, we know every sub-region has moved how many pixels so we know the displacement field of every pictures. Than, we can get the shape function (deformation function). If we use first order shape function, the accuracy is worst but the speed is faster than the second order shape function.

Step four: Using a criterion or a threshold to judge whether the correlation criterion satisfy or not. If not, use the new shape function or other algorithm to get new shape function, to do step two and three again. If it satisfy the correlation criterion, the computer will output the displacement field.

Step five: From step four, we already know the displacement field, so we can use the solid mechanics knowledge to calculate the strain field and stress field.

Base on this working principle, although there will be some errors which is introduced by distortion of image, intensity noise, correlation criterion and other affect, it can tell people the strain field of a material's surface. And because it just use camera to capture the pictures, it is non-contactable method to observe what will happen on a material under external effects. Also, if one use high speed camera to do the digital image correlation experiments, he can know the in-situ strain field of a material's surface.

## Drawbacks & future development

Although digital image correlation is a convenient tool to measure the plane strain and stress, but it has its drawbacks too:

1. Random gray intensity distribution must be achieved or it will be a mess;
2. The measurements highly depend on the quality of the camera, if the picture is blur, it will be a big trouble;
3. The accuracy of the digital image correlation is not very high and it is lower than the interferometric techniques, so maybe it can be improved in the future.

Because one camera can just detect the two dimensional strain field, so people want to use other ways to fill this gap. An easy way is to use one more camera for this target. Two cameras means people can detect three directions of displacement, so people can detect 3D displacement field and 3D strain field. But the algorithm is more complex than the 2D digital image correlation method. Also, this kind of technics is combined with SEM and applied on the studying of martensite phase transition. We are looking forward that digital image correlation will play more and more important role in research area and industry. 

Reference:

1. [Pan, B., Qian, K., Xie, H., & Asundi, A. (2009). Two-dimensional digital image correlation for in-plane displacement and strain measurement: a review. Measurement science and technology, 20(6), 062001.](http://iopscience.iop.org/article/10.1088/0957-0233/20/6/062001/meta)
2. [Hild, F., Raka, B., Baudequin, M., Roux, S., & Cantelaube, F. (2002). Multiscale displacement field measurements of compressed mineral-wool samples by digital image correlation. Applied optics, 41(32), 6815-6828.](https://www.osapublishing.org/ao/abstract.cfm?uri=ao-41-32-6815)
3. [Tarigopula, V., Hopperstad, O. S., Langseth, M., Clausen, A. H., Hild, F., Lademo, O. G., & Eriksson, M. (2008). A study of large plastic deformations in dual phase steel using digital image correlation and FE analysis. Experimental Mechanics, 48(2), 181-196.](https://link.springer.com/article/10.1007/s11340-007-9066-4)
4. [Sánchez-Arévalo, F. M., & Pulos, G. (2008). Use of digital image correlation to determine the mechanical behavior of materials. Materials characterization, 59(11), 1572-1579.](http://www.sciencedirect.com/science/article/pii/S1044580308000636)
5. [Tarigopula, V., Hopperstad, O. S., Langseth, M., Clausen, A. H., & Hild, F. (2008). A study of localisation in dual-phase high-strength steels under dynamic loading using digital image correlation and FE analysis. International Journal of Solids and Structures, 45(2), 601-619.](http://www.sciencedirect.com/science/article/pii/S0020768307003411)
6. [Sutton, M. A., Yan, J. H., Tiwari, V., Schreier, H. W., & Orteu, J. J. (2008). The effect of out-of-plane motion on 2D and 3D digital image correlation measurements. Optics and Lasers in Engineering, 46(10), 746-757.](http://www.sciencedirect.com/science/article/pii/S0143816608000985)
7. [Peters, W. H., & Ranson, W. F. (1982). Digital imaging techniques in experimental stress analysis. Optical engineering, 21(3), 213427-213427.](http://spiedigitallibrary.org/pdfaccess.ashx?url=/data/journals/optice/24618/213427.pdf)

