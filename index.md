---
title: About Us
feature_text: |
  ## SUSHI SQUAD 7461
  A community FIRST Robotics Competition team based in Redmond, WA
feature_image: "/assets/banner.png"
layout: page
---

<style>
  img.slideShowImage {
    height: 400px;
  }
</style>

<center>
<div class="mySlides">
  <img class="slideShowImage" src="assets/slideshow/1.jpg">
</div>
<div class="mySlides">
  <img class="slideShowImage" src="assets/slideshow/2.jpg">
</div>
<div class="mySlides">
  <img class="slideShowImage" src="assets/slideshow/3.jpg">
</div>
<div class="mySlides">
  <img class="slideShowImage" src="assets/slideshow/4.jpg">
</div>
</center>

<script>
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }
</script>


FRC Team 7461 is a high school robotics team based in Redmond, Washington. Each year, we compete in the FIRST Robotics Competition, in which teams of 10 to 100 students build a robot to compete in a [game](https://www.youtube.com/watch?v=gmiYWTmFRVE)
that changes each year. Our team, which includes members from seven different schools, is largely student led, depending off of donations and sponsorships to continue running.

Membership is open to all students in the greater Redmond area. Contact us at [team7461@gmail.com](mailto:team7461@gmail.com) with any questions.

<a href="https://github.com/SushiSquad7461" style="background-image: none"> {% include icon.html id="github" title="github" style="background-image: none !important; color: red !important" %} </a>
