const convertPathToRegex = (input) =>
  input
    .trim()
    .split('/')
    .map((t) => (t.includes('{') ? '.*' : t))
    .map((t) => (t.includes(':') ? '.*' : t))
    .map((t) => (/\d/.test(t) ? '.*' : t))
    .join('/')

export default convertPathToRegex
