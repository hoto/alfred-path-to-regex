import alfy from 'alfy'

const input = alfy.input

const output = [
    {
        title: input,
        subtitle: 'Copy to clipboard',
        arg: input,
        text: {
            copy: input,
            largetype: input,
        },
        variables: {
            action: 'copy',
        },
    }
]

alfy.output(output)