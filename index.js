import alfy from 'alfy'
import convertPathToRegex from './converter.js'

const converted = convertPathToRegex(alfy.input)
const output = [
  {
    title: converted,
    subtitle: 'Copy to clipboard',
    arg: converted,
    text: {
      copy: converted,
      largetype: converted,
    },
    variables: {
      action: 'copy',
    },
  },
]

alfy.output(output)
