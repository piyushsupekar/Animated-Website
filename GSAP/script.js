var tl = gsap.timeline()
tl.from("h2", {
    y: 100,
    delay: 0.8,
    duration: 1,
    stagger: 0.4,
    opacity: 0,
    ease: "elastic.out(2,1)",
    transform: "scale(15)",
    yoyo: true


})
tl.from("h3", {
    y: 100,
    duration: 1,
    stagger: -0.4,
    opacity: 0,
    ease: "elastic.out(2,1)",
    transform: "scale(15)",
})