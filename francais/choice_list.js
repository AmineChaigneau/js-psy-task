var trial1 = {
    stimulus: 'Content',
    choices: ['Joyeux', 'Heureux'],
    code: 'ppp-bbb',
}

var trial2 = {
    stimulus: 'Douloureux',
    choices: ['Furieux', 'Triste'],
    code: 'ppp-bbb',
}

var trial3 = {
    stimulus: 'Triste',
    choices: ['Content', 'Joyeux'],
    code: 'ppp-bbb',
}

var trial4 = {
    stimulus: 'Content',
    choices: ['Furieux', 'Triste'],
    code: 'ppp-bbb',
}

var trial5 = {
    stimulus: 'Triste',
    choices: ['Heureux', 'Douloureux'],
    code: 'ppp-bbb',
}

var trial6 = {
    stimulus: 'Courageux',
    choices: ['Sociable', 'Détendu'],
    code: 'ppp-aab',
}

var trial7 = {
    stimulus: 'Respectueux',
    choices: ['Relaxé', 'Térrifié'],
    code: 'ppn-bba',
}

var trial8 = {
    stimulus: 'Courageux',
    choices: ['Fier', 'Surpris'],
    code: 'ppp-aaa',
}

var trial9 = {
    stimulus: 'Anxieux',
    choices: ['Solitaire', 'Evasif'],
    code: 'nnn-abb',
}

var trial10 = {
    stimulus: 'Dégouté',
    choices: ['Distant', 'Indifférent'],
    code: 'nnn-abb',
}

var stim_trial = [ trial1, trial2, trial3, trial4, trial5, trial6, trial7, trial8, trial9, trial10 ]

var choice_btn = jsPsych.randomization.repeat(stim_trial, 2);

// console.log(choice_btn)