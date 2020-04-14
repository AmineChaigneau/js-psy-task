function choice_task(practice, numPrac, numBlocks, numTrials) {

    var experiment = [];

    // PRACTICE
    if (practice != 0) {
        for(var i = 0; i < numPrac; i++) {

            var trial = choice_btn[i]

            var pract_break = {
                type: 'html-button-response',
                stimulus: next,
                choices: ['Continuer'],
                data: { stimulus: '', key_press: '', trialtype: 'instr', label: 'bienvenue', block_nb: 0 },
              };


            var pract_trial = {
                type: 'button-choice',
                prompt: "<p style='font-size: 2em; margin-top: -50px'>" + trial.stimulus + "</p> <p style='font-size: 0.8em; line-height: 1em;'>Fare clic sul pulsante sinistro o destro per selezionare una risposta</p>",
                choices: trial.choices,
                data: { stimulus: '', trialtype: 'practice', label: 'practice_trial', block_nb: 0, code: trial.code, resp_1: trial.choices[0], resp_2: trial.choices[1] },
                on_finish: function(data) {
            
                    if(data.key_press == 0){
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
        type: 'html-button-response',
        stimulus: begin_tasks,
        choices: ['Continuer'],
        data: { trialtype: 'task', label: 'task_begin', block_nb: 1, stimulus: '' },
      };

    var task_break = {
        type: 'html-button-response',
        stimulus: break_tasks,
        choices: ['Continuer'],
        data: { trialtype: 'task', label: 'task_block_break', block_nb: 1, stimulus: '' },
      };

    // TRIALS
    for (var y = 0; y < numBlocks; y++) {
        
        if (y > 0) {
            experiment.push(task_break);
        } else {
            experiment.push(task_begin);
        }
        
        for(var i = 0; i < numTrials; i++) {

            if (i === 97 || i === 194) {
                experiment.push(task_break);
            } else {
                var trial = choice_btn[i]
            }

            // var trial = choice_btn[i]
            // console.log(trial)

            var pract_break = {
                type: 'html-button-response',
                stimulus: next,
                choices: ['Continuer'],
                data: { stimulus: '', key_press: '', trialtype: 'task', label: 'task_break', block_nb: 1 },
            };


            var pract_trial = {
                type: 'button-choice',
                prompt: "<p style='font-size: 2em; margin-top: -50px'>" + trial.stimulus + "</p>",
                choices: trial.choices,
                data: { stimulus: '', trialtype: 'task', label: 'task_trial', block_nb: 1, code: trial.code, resp_1: trial.choices[0], resp_2: trial.choices[1] },
                on_finish: function(data) {
                    if(data.key_press == 0){
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