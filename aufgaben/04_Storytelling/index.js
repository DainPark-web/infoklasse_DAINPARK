var tl = gsap.timeline({visibility: "hidden"});

tl.from("#title_text_01", {y: 500, duration: 2, ease: "power3.out"},0)
tl.from("#title_text_01", {opacity: 0, duration: 2, ease: "power3.out"}, 0.5)
tl.from("#title_text_02", {y: 500, duration: 2, ease: "power3.out"},0.3)
tl.from("#title_text_02", {opacity: 0, duration: 2, ease: "power3.out"}, 0.8)