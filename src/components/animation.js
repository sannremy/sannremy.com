import posed from "react-pose"

const AnimatedParent = posed.div({
  open: {
    delayChildren: 50,
    staggerChildren: 100,
  },
  init: {},
});

const AnimatedItem = posed.div({
  open: {
    y: 0,
    opacity: 1,
  },
  init: {
    y: 20,
    opacity: 0,
  },
});

export {
    AnimatedItem,
    AnimatedParent,
}
