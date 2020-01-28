import posed from "react-pose"

const AnimatedParent = posed.div({
  open: {
    delayChildren: 50,
    staggerChildren: 100,
  },
  closed: {},
  initialPose: 'closed',
});

const AnimatedItem = posed.div({
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 20,
    opacity: 0,
  },
});

export {
    AnimatedItem,
    AnimatedParent
}
