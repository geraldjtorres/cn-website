export const slideUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    ease: 'easeInOut',
    duration: '0.5'
  },
  exit: {
    opacity: 0,
    y: 20
  }
}

export const fadeInOut = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    ease: 'easeInOut',
    duration: '0.2'
  },
  exit: {
    opacity: 0,
  }
}

