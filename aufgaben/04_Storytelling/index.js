gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({visibility: "hidden"});

tl.from("#title_text_01", {y: 500, duration: 2, ease: "power3.out"},0)
tl.from("#title_text_01", {opacity: 0, duration: 2, ease: "power3.out"}, 0.5)
tl.from("#logo", {y: 500, duration: 2, ease: "power3.out"},0.3)
tl.from("#logo", {opacity: 0, duration: 2, ease: "power3.out"},0.5)
tl.from("#title_text_02", {y: 500, duration: 2, ease: "power3.out"},0.5)
tl.from("#title_text_02", {opacity: 0, duration: 2, ease: "power3.out"}, 0.8);

var tl1 = gsap.timeline({
    scrollTrigger: { 
      trigger: '.main1',
    //   pin: ".main2", 
    //   pinSpacing: false,
      start: "10% top",
      markers: false,
      end: 'bottom top',
      toggleActions:"restart complete reverse reset"
    },
  });
tl1.to("#title_text_01", { duration: 1,opacity: 0, ease: "power3.out"},0)
.to("#title_text_01", {xPercent: -140, duration: 2,opacity: 0, ease: "power3.out"},0.3)
.to("#title_text_02", { duration: 1,opacity: 0, ease: "power3.out"},0)
.to("#title_text_02", {xPercent: 140, duration: 2,opacity: 0, ease: "power3.out"},0.3)

var tl2 = gsap.timeline({
    scrollTrigger: { 
      trigger: '.main2',
    //   pin: ".main2", 
    //   pinSpacing: false,
      start: "top top",
      markers: false,
      end: 'bottom top',
      scrub: true,
    },
  });

tl2.to("#logoContainer", {
    xPercent: -45, yPercent: -40,ease: "power1.in",
},0).to("#logo", {scale: 0.3, rotateY: 360, rotateZ: 360,ease: "power1.in"},0.1)
.to("#logoTextContainer", {opacity: 1,ease: "power1.in"},0.9)

var tl3 = gsap.timeline({
    scrollTrigger: { 
      trigger: '.fotoAniC',
    //   pin: ".main2", 
    //   pinSpacing: false,
      start: "top center",
      markers: false,
      end: 'bottom top',
    
    },
  });
 
tl3.from(".fotoAni",{
    y: 600,
    duration: 1.5,
    ease: "power3.out",
    stagger: {

        amount: 0.3
    }
},0)

var tl4 = gsap.timeline({
    scrollTrigger: { 
      trigger: '.main4',
    //   pin: ".main2", 
    //   pinSpacing: false,
      start: "top top",
      markers: true,
      end: 'bottom top',
    
    },
  });

  tl4.to("#logoTextBox", {y: "-50px", duration: 2,ease: "power3.out" },0)
  var tl5 = gsap.timeline({
    scrollTrigger: { 
      trigger: '.main4',
    //   pin: ".main2", 
    //   pinSpacing: false,
      start: "top top",
      markers: true,
      end: 'bottom top',
      scrub: true,
    },
  });
  tl5.to(".fotoAniC2", {xPercent: -200 })