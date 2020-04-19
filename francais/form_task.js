function form_task(practice) {
    var formulaire = [];

    // PRACTICE
    if (practice != 0) {
       
        // Instruction
        var from_instr = {
            type: 'html-button-response',
            stimulus: before_form,
            choices: ['Continuer'],
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
              prompt: "Quel est votre sexe ?", 
              options: ["Homme", "Femme"], 
              horizontal: true,
              required: true,
              name: 'sexe'
            }, 
          ], 
          button_label: 'Suivant',
          data: { trialtype: 'form', label: 'form_0', block_nb: 2 , stimulus: ''},
      };

        var form_1 = {
          type: 'survey-text',
          questions: [
            {prompt: "Écrivez votre date de naissance : ", placeholder: '07/08/1992'}, 
          ],
          button_label: 'Suivant',
          data: { trialtype: 'form', label: 'form_1', block_nb: 2 , stimulus: ''},
        };

        var form_2 = {
          type: 'survey-html-form',
          preamble: 'Votre Nationalité',
          html: ['<div class="jspsych-select"><select class="selectapperance" required>' + 
          '<option value="">--Choississez votre Nationalité--</option>' +
          '<option value="francaise">Française</option>' +
          '<option value="italienne">Italienne</option>' +
          '<option value="espagnol">Espagnole</option>' +
          '<option value="allemande">Allemande</option>' +
          '<option value="anglaise">Anglaise</option>' +
          '</select></div>'],
          button_label: 'Suivant',
          data: { trialtype: 'form', label: 'form_2', block_nb: 2 , stimulus: ''},
        }

      var form_3 = {
        type: 'survey-text',
        questions: [
          {prompt: "Ville ou vous vivez acutellement : ", placeholder: 'ex: Rouen'}, 
        ],
        button_label: 'Suivant',
        data: { trialtype: 'form', label: 'form_3', block_nb: 2 , stimulus: ''},
      };
        // var text_style = "<p style='font-size: 0.8em;'>"
        
        var form_4 = {
          type: 'survey-multi-select',
          questions: [
            {
              prompt: "Indiquer la qualification la plus élevée obtenue", 
              options: [
                  "1. Aucun diplôme", 
                  "2. Brevet des collèges, BEPC", 
                  "3. CAP, BEP ou diplôme de même niveau",
                  "4. Baccalauréat général, technologique, professionnel",
                  "5. Diplôme du 1er cycle universitaire, niveau BAC+2",
                  "6. Diplôme de 2éme cycle universitaire",
                  "7. Diplôme de 3éme cycle universitaire, doctorat, ingénieur",
              ], 
              horizontal: true,
              required: true,
              name: 'sexe'
            }, 
          ], 
          button_label: 'Suivant',
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
                prompt: "Votre activité (emploi actuel) : ", 
                placeholder: 'ex: Emploi'
            }, 
          ],
          button_label: 'Suivant',
          data: { trialtype: 'form', label: 'form_5', block_nb: 2 , stimulus: ''},
        };

         var form_6 = {
            type: 'survey-text',
            questions: [
              {
                  prompt: "Pratiquez-vous généralement un sport ou une activité physique ?", 
                  placeholder: 'ex: Football, Course à Pied, Yoga'
              }, 
            ],
            button_label: 'Suivant',
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