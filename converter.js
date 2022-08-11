const convertPathToRegex = (input) =>
  input
    .trim()
    .split('/')
    .map((t) => (t.includes('{') ? '.*' : t))
    .join('/')

export default convertPathToRegex
