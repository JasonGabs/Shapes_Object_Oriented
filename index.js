const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'tag',
        message: 'Enter three letter tag'
    },
    {
        type: 'input',
        name: 'tagColor',
        message: 'Enter color for the tag as a word or hexidecimal'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'What shape would you like?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color for the shape as a word or hexidecimal'
    }
]

function questionPropmts() {
    inquirer
        .prompt(questions)
        .then(({ tag, tagColor, shapeType, shapeColor }) => {
            if (tag.length > 3) {
                console.log('Cant be more than three letters!')
                return
            }
            
        })
}
