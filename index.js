var ftoc = require('fahrenheit-to-celsius');
var ctof = require('celsius-to-fahrenheit');
const prompts = require('prompts');
prompts.override(require('yargs').argv);

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

let questions = [{
        type: 'select',
        name: 'tt',
        message: 'What do you want to convert?',
        choices: [{
                title: 'Celsius',
                value: 'Celsius'
            },
            {
                title: 'Fahrenheit',
                value: 'Fahrenheit'
            }
        ]
    },
    {
        type: 'number',
        name: 'degrees',
        message: 'How many degrees in the chosen form should I take to the other?'
    }
]

async function main() {
    let response = await prompts(questions);

    if (response.tt === "Celsius") {
        console.log(ctof(response.degrees));
    } else {
        console.log(ftoc(response.degrees));
    }
};

main();