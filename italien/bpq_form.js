function bpq_form(practice) {
    var bpq = [];

    if (practice != 0) {
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
            // {prompt: "Fai clic su Continua"}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
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