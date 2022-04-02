gsap.to('#videoplayer', {
    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        scrub: 2,
        pin: 'main'
    },
    width: '100%',
})

gsap.to("#one", {
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: 3,
  },
  left: "-900px",
  opacity: 0,
});

gsap.to("#holder1", {
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: 3,
  },
  left: "-450px",
  opacity: 0,
});

gsap.to("#six", {
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: 3,
  },
  right: "-900px",
  opacity: 0,
});

gsap.to("#holder2", {
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: 3,
  },
  right: "-450px",
  opacity: 0,
});