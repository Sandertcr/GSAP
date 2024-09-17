gsap.to(".fred", { x: 800, backgroundColor: 'red', scale: 1.2, duration: 1 }, "ease out");

gsap.from(".fred2", { x: 200, y: 100, duration: 1 });

gsap.to(".fred3", { x: 500, y: 500, duration: 1 });

let text = document.querySelector(".fred2");

let animation = gsap.to(".fred2", {
  paused: true,
  scale: 1.2
});

text.addEventListener("mouseenter", () => animation.play());
text.addEventListener("mouseleave", () => animation.reverse());