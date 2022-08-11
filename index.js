import alfy from 'alfy'
import convertPathToRegex from "./converter.js";

const input = alfy.input

const converted = convertPathToRegex(input)
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
    }
]

alfy.output(output)