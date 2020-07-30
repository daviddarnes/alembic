---
title: Programming Onboarding
layout: page
---

### Kotlin resources

This year, the programming subteam will be making the switch from Java to Kotlin. [This paper](https://www.chiefdelphi.com/uploads/default/original/3X/4/9/49f9c846e580bdb9423fc3d0560573d162638b57.pdf) explains the benefits of this move. If you're already proficient in Java, Python, or any similar language, the best place to get acquanited with Kotlin is from the [Kotlin Koans](https://kotlinlang.org/docs/tutorials/koans.html).

If you're a beginner, most Kotlin tutorials you'll find online are either designed for people who already know Java, or are looking to do Android development. The best resource for this situation is [Head First Kotlin](https://www.amazon.com/Head-First-Kotlin-Brain-Friendly-Guide/dp/1491996692). [Here](https://www.youtube.com/watch?v=F9UC9DY-vIU) is a pretty good Youtube tutorial that you can follow along with as well.

Before you start the rest of your prog training, you'll need to demonstrate proficiency good at Kotlin. To make sure everyone is on the same page during programming discussions, write a program that meets the following requirements:

- Process Strings from console input
- Create an abstract class called `Item`, and  subclasses that extend it
- Hold an inventory of `Item` objects, that the user can manipulate and view
- Must use a Kotlin "when" statment (similar to a switch statement)
- Must have an inline class definition (that you use somewhere)
- Must use a for-each loop
- Must appropriately use `val` and `var`
- Must use a `filter` statment
- Must follow the [Kotlin Style Guide](https://kotlinlang.org/docs/reference/coding-conventions.html)

Although the official development environment is VSCode, you should use IntelliJ for most of your development. 

### Github Requirements

For collaboration, we use Github to share code. When you first start learning Git and Github, it's important to know the difference between them:
- **Git** is a free and open source version control system that allows you to work in teams and keep track of your code history.
- **GitHub** is a cloud service owned by Microsoft that lets you manage your Git repositories for free. There are other online services similar to Github, but Github is the most popular.


[Here](https://docs.google.com/presentation/d/1MNZY5AGBjoUL_nHSWLreXEC06QkSJMxzhAiljMVCe2g/edit?usp=sharing) is a slide deck that explains the basics of Git. 

After you understand general Git concepts, install GitHub Desktop and read some of the documentation [here](https://docs.github.com/en/desktop/getting-started-with-github-desktop).

Then, to verify that your Git knowlegde:
- Clone the Sushi Squad onboarding repository from https://github.com/SushiSquad7461/Kotlin-onboarding 
- Put your Kotlin project into the repo, and give it a cool name
- Add, commit, and push your changes to a new branch
- Make a pull request so I can look over your project and verify that it meets the requirements.

### WPILib

WPILib is the library that lets you control the robot with Kotlin. Knowledge of WPILib features and how to use them is essential for the programming subteam. You can access the documentation is [here](https://docs.wpilib.org/en/stable/).

### Lectures to Watch
[Here](https://www.youtube.com/watch?v=pTuPhJ0DJB8) is a short video that'll help you understand PID control. WPILib can do PID for you, but understanding how it works will allow you to better tune your constants and debug issues.

[This](https://www.youtube.com/watch?v=wqJ4tY0u6IQ) explains trajectory tracking using WPILib.

[This](https://www.youtube.com/watch?v=wW_djLkD1B8) explains a robot project's general structure, and although all the info is in the WPILib docs, this is just another way to understand how everything fits together.

