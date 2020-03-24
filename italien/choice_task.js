function choice_task(practice, numPrac, numBlocks, numTrials) {

    var experiment = [];

    // PRACTICE
    if (practice != 0) {
        for(var i = 0; i < numPrac; i++) {

            var trial = choice_btn[i]
            console.log(trial.choices)
            
            // var choice1 = trial.choices.slice(1, -1).split(' ')[0].slice(1, -2)
            // var choice2 = trial.choices.slice(1, -1).split(' ')[1].slice(1, -1)
            // var pract_stim = {
            //     type: "html-keyboard-stim",
            //     stimulus: trial.stimulus,
            //     prompt: stimpract,
            // };

            var pract_break = {
                type: "html-keyboard-stim",
                stimulus: 'Continuare',
                prompt: "</br> Premere sul tasto spazio per continuare",
                data: { trialtype: 'practice', label: 'practice_break', block_nb: 0 },
            };

            var pract_trial = {
                type: 'keyboard-choice',
                stimulus: trial.choices,
                choices: ['a', 'p'],
                prompt: "<p style='font-size: 26px'>" + trial.stimulus + "</p></br></br>Premere il tasto “A” per selezionare la risposta di sinistra  ('" + trial.choices[0] +  "') </br> o premere il tasto “P” per selezionare la risposta di destra ('" + trial.choices[1] +  "') </p>",
                data: { trialtype: 'practice', label: 'practice_trial', block_nb: 0, code: trial.code },
                on_finish: function(data) {
                    data.resp_1 = data.stimulus[0];
                    data.resp_2 = data.stimulus[1];

                    console.log(data.stimulus);
                    
                    data.stimulus = "";
            
                    if(data.key_press == 65){
                        // data.key_press = 'gauche'
                        data.response = data.resp_1
                      } else {
                        // data.key_press = 'droite'
                        data.response = data.resp_2
                      }
                }
            };

            var practchunk= {
                chunk_type:'linear',
                // timeline: [pract_stim, pract_trial]
                timeline: [pract_break, pract_trial]
            };
        
            experiment.push(practchunk);	
        }
    }

    var task_begin = {
        type: "html-keyboard-response",
        stimulus: begin_tasks,
        data: { trialtype: 'task', label: 'task_begin', block_nb: 1, stimulus: 'Commencer' },
    }

    var task_break = {
        type: "html-keyboard-response",
        stimulus: break_tasks,
        data: { trialtype: 'task', label: 'task_block_break', block_nb: 1, stimulus: 'Pause' },
    }

    // TRIALS
    for (var y = 0; y < numBlocks; y++) {
        
        if (y > 0) {
            experiment.push(task_break);
        } else {
            experiment.push(task_begin);
        }
        
        for(var i = 0; i < numTrials; i++) {

            var trial = choice_btn[i]
            console.log(trial)
    
            // var pract_stim = {
            //     type: "html-keyboard-stim",
            //     stimulus: trial.stimulus,
            //     on_finish: function() {
            //         console.log(trial.stimulus)
            //     }
            // };

            var pract_break = {
                type: "html-keyboard-stim",
                stimulus: 'Continuare',
                data: { trialtype: 'task', label: 'task_break', block_nb: 1 },
            };
    
            console.log(trial.choices)
            var pract_trial = {
                type: 'keyboard-choice',
                stimulus: trial.choices,
                choices: ['a', 'p'],
                prompt: "<p style='font-size: 26px'>"+ trial.stimulus + "</p>",
                data: { trialtype: 'task', label: 'task_trial', block_nb: 1, code: trial.code },
                on_finish: function(data) {
                    data.resp_1 = data.stimulus[0];
                    data.resp_2 = data.stimulus[1];

                    if(data.key_press == 65) {
                        // data.key_press = 'gauche'
                        data.response = data.resp_1
                      } else {
                        // data.key_press = 'droite'
                        data.response = data.resp_2
                      }
                    }
            };
    
            var practchunk= {
                chunk_type:'linear',
                // timeline: [pract_stim, pract_trial]
                timeline: [pract_break, pract_trial]
            };
        
            experiment.push(practchunk);	
        }
    
    }
    return experiment;
}