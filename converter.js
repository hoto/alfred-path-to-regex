const convertPathToRegex = (input) => {
  return input
    .trim()
    .split('/')
    .map((t) => t)
    .join('/')
}

export default convertPathToRegex
