function form_task(practice) {
    var formulaire = [];

    // PRACTICE
    if (practice != 0) {
       
        // Instruction
        var from_instr = {
            type: 'html-button-response',
            stimulus: before_form,
            choices: ['Continuare'],
            data: { trialtype: 'form', label: 'form_instr', block_nb: 2 , stimulus: ''},
        };
        
        // var form_0 = {
        //     type: 'survey-html-form',
        //     preamble: '<p> How are you feeling <b>right now?</b> </p>',
        //     html: '<p> I am feeling <input name="first" type="text" />, <input name="second" type="text" />, and <input name="third" type="text" />.</p>'
        // };

        var form_0 = {
            type: 'survey-multi-select',
            questions: [
              {
                prompt: "Qual è il tuo sessos?", 
                options: ["Uomo", "Donna"], 
                horizontal: true,
                required: true,
                name: 'sexe'
              }, 
            ], 
            button_label: 'Seguente',
            data: { trialtype: 'form', label: 'form_0', block_nb: 2 , stimulus: ''},
        };

        var form_1 = {
            type: 'survey-text',
            questions: [
              {prompt: "Data di compilazione :", placeholder: '07/08/1992'}, 
            ],
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_1', block_nb: 2 , stimulus: ''},
        };

        var form_2 = {
            type: 'survey-html-form',
            preamble: 'Nazionalità',
            html: ['<div class="jspsych-select"><select class="selectapperance" required>' + 
            '<option value="">--Scegli la tua nazionalità--</option>' +
            '<option value="francaise">Francese</option>' +
            '<option value="italienne">Italiana</option>' +
            '<option value="espagnol">Spagnolo</option>' +
            '<option value="allemande">Tedesca</option>' +
            '<option value="anglaise">Inglese</option>' +
            '</select></div>'],
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_2', block_nb: 2 , stimulus: ''},
        }

        var form_3 = {
            type: 'survey-text',
            questions: [
              {prompt: "Città dove attualmente vivi  : ", placeholder: 'ex: Turin'}, 
            ],
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_3', block_nb: 2 , stimulus: ''},
        };

        // var text_style = "<p style='font-size: 0.8em;'>"
        
        var form_4 = {
            type: 'survey-multi-select',
            questions: [
              {
                prompt: "Livello d'istruzione (indichi il titolo più alto conseguito)", 
                options: [
                    "1. Licenza media", 
                    "2. Licenza elementare", 
                    "3. Diploma di scuola superiore",
                    "4. Laurea triennale di primo livello",
                    "5. Master universitario di primo livello",
                    "6. Laurea specialistica biennale di secondo livello",
                    "7. Laurea di quattro anni o più (laurea specialistica a ciclo unico)",
                    "8. Corso di specializzazione post-laurea",
                    "9. Dottorato",
                ], 
                horizontal: true,
                required: true,
                name: 'sexe'
              }, 
            ], 
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_4', block_nb: 2 , stimulus: ''},
        };

      //   var form_4 = {
      //     type: 'survey-multi-select',
      //     questions: [
      //       {
      //         prompt: "Indiquer la qualification la plus élevée obtenue", 
      //         options: [
      //             text_style + "1. Certificat d’Etudes primaires, aucun diplôme </p>", 
      //             text_style + "2. Brevet des collèges, BEPC </p>", 
      //             text_style + "3. CAP, BEP ou diplôme de même niveau </p>",
      //             text_style + "4. Baccalauréat général, technologique, professionnel ou Equivalent </p>",
      //             text_style + "5. Diplôme du 1er cycle universitaire, BTS, DUT, ou Equivalent, niveau BAC+2 </p>",
      //             text_style + "6. Diplôme de 2éme cycle universitaire </p>",
      //             text_style + "7. Diplôme de 3éme cycle universitaire, doctorat, grande Ecole, ingénieur </p>",
      //         ], 
      //         horizontal: true,
      //         required: true,
      //         name: 'sexe'
      //       }, 
      //     ], 
      //     button_label: 'Suivant',
      //     data: { trialtype: 'form', label: 'form_4', block_nb: 2 , stimulus: ''},
      // };

        var form_5 = {
            type: 'survey-text',
            questions: [
              {
                  prompt: "Occupazione : ", 
                  placeholder: 'ex: occupazione'
              }, 
            ],
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_5', block_nb: 2 , stimulus: ''},
        };

        var form_6 = {
            type: 'survey-text',
            questions: [
              {
                  prompt: "Generalmente pratichi qualche sport o attività fisica ?", 
                  placeholder: 'ad: esempio calcio, corsa, yoga'
              }, 
            ],
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_6', block_nb: 2 , stimulus: ''},
        };

        var scale_1 = [
            "mai", 
            "occasionalmente", 
            "a volte", 
            "di solito", 
            "sempre"
          ];

          var likert_instr = {
            type: 'instructions',
            pages: [
              likert_instr_1,
              likert_instr_2,
            ],
            show_clickable_nav: true,
            data: { trialtype: 'instr', label: 'instruction', block_nb: 2 , stimulus: '', view_history: ''},
            button_label_previous: 'Precedente',
            button_label_next: 'Continua',
          };
          
          var form_7 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "deglutire frequentemente", name: 'r_1', labels: scale_1},
              {prompt: "un ronzio nelle orecchie", name: 'r_2', labels: scale_1},
              {prompt: "la necessità di tossire per schiarirmi la voce", name: 'r_3', labels: scale_1},
              {prompt: "il mio corpo che ondeggia quando sono in piedi", name: 'r_4', labels: scale_1},
              {prompt: "la mia bocca secca", name: 'r_5', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7', block_nb: 2 , stimulus: ''},
          };

          var form_8 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "quanto veloce sto respirando", name: 'r_6', labels: scale_1},
              {prompt: "la lacrimazione dei miei occhi", name: 'r_7', labels: scale_1},
              {prompt: "il prurito della mia pelle", name: 'r_8', labels: scale_1},
              {prompt: "rumori associati alla mia digestione", name: 'r_9', labels: scale_1},
              {prompt: "affaticamento o dolore agli occhi", name: 'r_10', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7a', block_nb: 2 , stimulus: ''},
          };

          var form_9 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "tensione muscolare della mia schiena o collo", name: 'r_11', labels: scale_1},
              {prompt: "un gonfiore del mio corpo o di pari del mio corpo", name: 'r_12', labels: scale_1},
              {prompt: "il bisogno di urinare", name: 'r_13', labels: scale_1},
              {prompt: "tremore delle mie mani", name: 'r_14', labels: scale_1},
              {prompt: "bisogno di defecare", name: 'r_15', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7b', block_nb: 2 , stimulus: ''},
          };

          var form_10 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "tensione muscolare delle mie braccia o gambe", name: 'r_16', labels: scale_1},
              {prompt: "una sensazione di gonfiore legata alla ritenzione idrica", name: 'r_17', labels: scale_1},
              {prompt: "tensione muscolare sul mio volto", name: 'r_18', labels: scale_1},
              {prompt: "pelle d'oca", name: 'r_19', labels: scale_1},
              {prompt: "contrazioni della faccia", name: 'r_20', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7c', block_nb: 2 , stimulus: ''},
          };

          var form_11 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "essere esausti", name: 'r_21', labels: scale_1},
              {prompt: "dolori di stomaco e dell'intestino", name: 'r_22', labels: scale_1},
              {prompt: "sbattere o ruotare gli occhi", name: 'r_23', labels: scale_1},
              {prompt: "Des frissons", name: 'r_24', labels: scale_1},
              {prompt: "distensione o gonfiore dello stomaco", name: 'r_25', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7d', block_nb: 2 , stimulus: ''},
          };

          var form_12 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "sudore sulla mia fronte", name: 'r_26', labels: scale_1},
              {prompt: "goffaggine o urtare altre persone", name: 'r_27', labels: scale_1},
              {prompt: "tremore alle mie labbra", name: 'r_28', labels: scale_1},
              {prompt: "sudore sotto le mie ascelle", name: 'r_29', labels: scale_1},
              {prompt: "sensazione di prurito, formicolio o intorpidimento del mio corpo", name: 'r_30', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7e', block_nb: 2 , stimulus: ''},
          };

          var form_13 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "la temperatura della mia faccia (specialmente delle orecchie)", name: 'r_31', labels: scale_1},
              {prompt: "digrignare i miei denti", name: 'r_32', labels: scale_1},
              {prompt: "agitazione generalizzata", name: 'r_33', labels: scale_1},
              {prompt: "dolore muscolare", name: 'r_34', labels: scale_1},
              {prompt: "pienezza della vescica", name: 'r_35', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7f', block_nb: 2 , stimulus: ''},
          };

          var form_14 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "movimenti oculari", name: 'r_36', labels: scale_1},
              {prompt: "dolori di schiena", name: 'r_37', labels: scale_1},
              {prompt: "dolori di schiena", name: 'r_38', labels: scale_1},
              {prompt: "rizzarsi dei capelli", name: 'r_39', labels: scale_1},
              {prompt: "necessità di riposare", name: 'r_40', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7g', block_nb: 2 , stimulus: ''},
          };

          var form_15 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "difficoltà a focalizzarsi", name: 'r_41', labels: scale_1},
              {prompt: "necessità di deglutire", name: 'r_42', labels: scale_1},
              {prompt: "quanto forte batte il mio cuore", name: 'r_43', labels: scale_1},
              {prompt: "sentirsi costipati", name: 'r_44', labels: scale_1},
              {prompt: "Fai clic su Continua"}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_7h', block_nb: 2 , stimulus: ''},
          };

        var practchunk= {
            chunk_type:'linear',
            // timeline: [from_instr, form_0, form_1, form_2, form_3, form_4, form_5, form_6, form_7]
            // timeline: [from_instr, form_0, form_1, form_2, form_3, form_4, form_5, form_6, likert_instr, form_7, form_8, form_9, form_10, form_11, form_12, form_13, form_14, form_15]
            timeline: [likert_instr, form_7, form_8, form_9, form_10, form_11, form_12, form_13, form_14, form_15]
        };
    
        formulaire.push(practchunk);
    }
    return formulaire;
}