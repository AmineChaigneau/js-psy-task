function form_task(practice) {
    var formulaire = [];

    // PRACTICE
    if (practice != 0) {
       
        // Instruction
        var from_instr = {
            type: 'html-button-response',
            stimulus: before_form,
            choices: ['Continua'],
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
            button_label: 'Continua',
            data: { trialtype: 'form', label: 'form_0', block_nb: 2 , stimulus: ''},
        };

        var form_1 = {
            type: 'survey-text',
            questions: [
              {prompt: "Data di nascita :", placeholder: '07/08/1992'}, 
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

        

        var practchunk= {
            chunk_type:'linear',
            // timeline: [from_instr, form_0, form_1, form_2, form_3, form_4, form_5, form_6, form_7]
            timeline: [from_instr, form_0, form_1, form_2, form_3, form_4, form_5, form_6]
            // timeline: [likert_instr, form_7, form_8, form_15]
        };
    
        formulaire.push(practchunk);
    }
    return formulaire;
}