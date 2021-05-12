const ftoc = require('fahrenheit-to-celsius');
const ctof = require('celsius-to-fahrenheit');
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
        message: 'How many degrees do you wish to convert?'
    }
]

async function main() {
    let response = await prompts(questions);

    if (response.tt === "Celsius") {
        console.log(ctof(response.degrees));
    } else if (response.tt === "Fahrenheit") {
        console.log(ftoc(response.degrees));
    } else {
        console.log("An error occured. Please enter valid values only.")
    }
};

main();