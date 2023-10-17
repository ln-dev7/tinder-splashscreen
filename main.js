import "./style.scss";
import gsap from "gsap";

const tl = gsap.timeline();
gsap.to(".splash", {
  duration: 0.3,
  transform: "translateX(0) rotate(0)",
  delay: 0.6,
});
tl.to(".favicon", {
  duration: 0.4,
  transform: "translateX(0) scale(1)",
  filter: "blur(0px)",
  delay: 0.4,
  opacity: 1,
})
  .to(".favicon", {
    duration: 0.3,
    transform: "scale(0)",
    delay: 1,
  })
  .to(".codebyln", {
    duration: 0.3,
    transform: "scale(1)",
    opacity: 1,
    delay: 0.2,
  });
