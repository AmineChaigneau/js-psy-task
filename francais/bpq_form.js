function bpq_form(practice) {
    var bpq = [];

    if (practice != 0) {
        var scale_1 = [
            "Jamais", 
            "Occasionnellement", 
            "Parfois", 
            "Souvent", 
            "Toujours"
          ];

        var likert_instr = {
            type: 'instructions',
            pages: [
            likert_instr_1,
            likert_instr_2,
            ],
            show_clickable_nav: true,
            data: { trialtype: 'instr', label: 'instruction', block_nb: 2 , stimulus: '', view_history: ''},
            button_label_previous: 'Précédent',
            button_label_next: 'Suivant',
        };
        
        var form_7 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Avaler fréquemment", name: 'r_1', labels: scale_1},
              {prompt: "Un bourdonnement dans mes oreilles", name: 'r_2', labels: scale_1},
              {prompt: "La nécessité de tousser pour m'éclaircir la voix", name: 'r_3', labels: scale_1},
              {prompt: "Mon corps se balançant quand je suis debout...", name: 'r_4', labels: scale_1},
              {prompt: "Ma bouche est sèche	", name: 'r_5', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7', block_nb: 2 , stimulus: ''},
          };

          var form_8 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "La vitesse à laquelle je respire", name: 'r_6', labels: scale_1},
              {prompt: "Les yeux larmoyants", name: 'r_7', labels: scale_1},
              {prompt: "Les démangeaisons de la peau", name: 'r_8', labels: scale_1},
              {prompt: "Les bruits liés à ma digestion", name: 'r_9', labels: scale_1},
              {prompt: "La fatigue ou les douleurs oculaires", name: 'r_10', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7a', block_nb: 2 , stimulus: ''},
          };

          var form_9 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Tension musculaire dans mon dos ou mon cou", name: 'r_11', labels: scale_1},
              {prompt: "Un gonflement de mon corps ou d'un membre de mon corps", name: 'r_12', labels: scale_1},
              {prompt: "La nécessité d'uriner", name: 'r_13', labels: scale_1},
              {prompt: "Tremblement des mains", name: 'r_14', labels: scale_1},
              {prompt: "Besoin de déféquer", name: 'r_15', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7b', block_nb: 2 , stimulus: ''},
          };

          var form_10 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Tension musculaire dans mes bras ou mes jambes", name: 'r_16', labels: scale_1},
              {prompt: "Une sensation de gonflement liée à la rétention hydrique", name: 'r_17', labels: scale_1},
              {prompt: "Tension musculaire sur mon visage", name: 'r_18', labels: scale_1},
              {prompt: "Des frissons", name: 'r_19', labels: scale_1},
              {prompt: "Crisper le visage", name: 'r_20', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7c', block_nb: 2 , stimulus: ''},
          };

          var form_11 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Être épuisé", name: 'r_21', labels: scale_1},
              {prompt: "Douleurs d'estomac et d'intestin", name: 'r_22', labels: scale_1},
              {prompt: "Cligner ou rouler des yeux", name: 'r_23', labels: scale_1},
              {prompt: "Des frissons", name: 'r_24', labels: scale_1},
              {prompt: "Une distension ou un gonflement de l'estomac", name: 'r_25', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7d', block_nb: 2 , stimulus: ''},
          };

          var form_12 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "La sueur sur mon front", name: 'r_26', labels: scale_1},
              {prompt: "La maladresse ou les heurts avec d'autres personnes", name: 'r_27', labels: scale_1},
              {prompt: "Tremblement des lèvres", name: 'r_28', labels: scale_1},
              {prompt: "La sueur sous les aisselles", name: 'r_29', labels: scale_1},
              {prompt: "Des démangeaisons, des picotements ou des engourdissements dans mon corps", name: 'r_30', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7e', block_nb: 2 , stimulus: ''},
          };

          var form_13 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "La température de mon visage (surtout de mes oreilles)", name: 'r_31', labels: scale_1},
              {prompt: "Grincer des dents", name: 'r_32', labels: scale_1},
              {prompt: "Douleurs musculaires", name: 'r_33', labels: scale_1},
              {prompt: "Douleurs articulaires", name: 'r_34', labels: scale_1},
              {prompt: "La plénitude vésicale", name: 'r_35', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7f', block_nb: 2 , stimulus: ''},
          };

          var form_14 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Les mouvements des yeux", name: 'r_36', labels: scale_1},
              {prompt: "Le mal de dos", name: 'r_37', labels: scale_1},
              {prompt: "Démangeaison du nez", name: 'r_38', labels: scale_1},
              {prompt: "Cheveux frisottants", name: 'r_39', labels: scale_1},
              {prompt: "Avoir besoin de se reposer", name: 'r_40', labels: scale_1}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'form', label: 'form_7g', block_nb: 2 , stimulus: ''},
          };

          var form_15 = {
            type: 'survey-likert',
            preamble: likert_pre,
            questions: [
              {prompt: "Difficulté à se concentrer", name: 'r_41', labels: scale_1},
              {prompt: "Besoin d'avaler", name: 'r_42', labels: scale_1},
              {prompt: "Comment mon cœur bat fort", name: 'r_43', labels: scale_1},
              {prompt: "Se sentir constipé", name: 'r_44', labels: scale_1},
            ],
            randomize_question_order: false,
            button_label: 'Continuer',
            data: { trialtype: 'form', label: 'form_7h', block_nb: 2 , stimulus: ''},
          };

        var practchunk= {
            chunk_type:'linear',
            // timeline: [from_instr, form_0, form_1, form_2, form_3, form_4, form_5, form_6, form_7]
            timeline: [likert_instr, form_7, form_8, form_9, form_10, form_11, form_12, form_13, form_14, form_15]
            // timeline: [likert_instr, form_7, form_8, form_15]
        };

        bpq.push(practchunk);
    }
    return bpq;
}