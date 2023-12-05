const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstpage() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut,
  }).to(".bounding-elem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
  tl.from("#home-footer", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
firstpage();

// function skewcircle(){
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;
//     window.addEventListener("mousemove", function(){
//         xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//         yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         CircleMouseFollower(xscale, yscale);
//     })
// }

// skewcircle();

function CircleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#circle"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}
document.getElementById("main").addEventListener("scroll", function () {});
CircleMouseFollower();

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var differ = 0;
  element.addEventListener("mousemove", function (dets) {
    var difference = dets.clientY - element.getBoundingClientRect().top;
    differ = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: difference-160,
      left: dets.clientX-250,
      rotate: gsap.utils.clamp(-20, 20, differ * 0.5),
    });
  });

  element.addEventListener("mouseleave", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
  
});
