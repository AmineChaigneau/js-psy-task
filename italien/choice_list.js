var trial1 = {
    stimulus: 'Contento',
    choices: ['Allegro', 'Felice'],
    code: 'ppp-bbb',
}

var trial2 = {
    stimulus: 'Doloroso',
    choices: ['Furioso', 'Triste'],
    code: 'ppp-bbb',
}

var trial3 = {
    stimulus: 'Triste',
    choices: ['Contento', 'Allegro'],
    code: 'ppp-bbb',
}

var trial4 = {
    stimulus: 'Contento',
    choices: ['Furioso', 'Triste'],
    code: 'ppp-bbb',
}

var trial5 = {
    stimulus: 'Triste',
    choices: ['Felice', 'Doloroso'],
    code: 'ppp-bbb',
}

var trial6 = {
    stimulus: 'Coraggioso',
    choices: ['Socievole', 'Rilassato'],
    code: 'ppp-aab',
}

var trial7 = {
    stimulus: 'Rispettoso',
    choices: ['Rilassato', 'Terrorizzato'],
    code: 'ppn-bba',
}

var trial8 = {
    stimulus: 'Coraggioso',
    choices: ['Orgoglioso', 'Sorpreso'],
    code: 'ppp-aaa',
}

var trial9 = {
    stimulus: 'Ansioso',
    choices: ['Solitario', 'Evasivo'],
    code: 'nnn-abb',
}

var trial10 = {
    stimulus: 'Disgustato',
    choices: ['Lontano', 'Indifferente'],
    code: 'nnn-abb',
}

var stim_trial = [ trial1, trial2, trial3, trial4, trial5, trial6, trial7, trial8, trial9, trial10 ]

var choice_btn = jsPsych.randomization.repeat(stim_trial, 2);

// console.log(choice_btn)