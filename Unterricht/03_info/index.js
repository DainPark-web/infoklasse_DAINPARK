// init controller
var tl = gsap.timeline({visibility: "hidden"});

tl.from("#nav", {y:-200,duration: 2, ease: "power4.out"}, 0.1)
tl.from("#ani-1", {x: -4000,opacity: 0, duration: 1, ease: "power4.out"}, 0.1)
tl.from("#ani-2", {x: -4000,opacity: 0, duration: 1, ease: "power4.out"}, 0.3)
tl.from("#ani-3", {x: -4000,opacity: 0, duration: 1, ease: "power4.out"}, 0.5)
tl.from("#ani-4", {scale: 0,rotate: 180,opacity: 0, duration: 1, ease: "power4.out"}, 0.7)


gsap.registerPlugin(ScrollTrigger)


gsap.to(".ani-5", {
    duration:2, y:-300, ease: "power4.out", 
      scrollTrigger: {
        trigger:".ani-5",
        markers:false,
        start:"-50% 75%", 
        end:"bottom 25%", 
        
             
        // toggleActions:"restart complete reverse reset"
            
      }
  }) 

  let p;
document.addEventListener("scroll", () => {
     p = window.scrollY;
     
});
console.log(p);


gsap.to(".ani-6", {
    duration: 6,backgroundColor: "blue", rotateY: 360, ease: "power4.out", 
      scrollTrigger: {
        trigger:".ani-6",
        markers:false,
        start:"-50% 75%", 
        end:"bottom 25%", 
        
             
        // toggleActions:"restart complete reverse reset"
            
      }
  }) 

 
 