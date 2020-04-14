function panas_task(practice) {

    var panas = [];

    if (practice != 0) {

        var scale = [
          "Jamais", 
          "Un peu", 
          "Modérément", 
          "Assez souvent", 
          "Toujours"
        ];

        var scale_2 = [
          "Jamais", 
          "  ", 
          "  ", 
          "  ", 
          "Toujours"
        ];

        // MAIA
        var maia_instr = {
          type: 'instructions',
          pages: [
            m_instr
          ],
          show_clickable_nav: true,
          data: { trialtype: 'instr', label: 'instruction', block_nb: 3 , stimulus: '', view_history: ''},
          button_label_previous: 'Précédent',
          button_label_next: 'Suivant',
        }

        var maia_1 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Lorsque je suis tendu, je perçois où la tension se situe dans mon corps.", name: 'r_1', labels: scale_2},
            {prompt: "Lorsque je me sens mal dans mon corps, je le remarque.", name: 'r_2', labels: scale_2},
            {prompt: "J'identifie/je remarque à quel endroit de mon corps je me sens confortable", name: 'r_3', labels: scale_2},
            {prompt: "Je perçois les changements dans ma respiration, par exemple lorsqu'elle ralentit ou accélère", name: 'r_4', labels: scale_2},
            {prompt: "Je ne perçois pas (j’ignore) les tensions physiques ou l’inconfort jusqu’à ce qu’ils ne deviennent sévères.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1a', block_nb: 3 , stimulus: ''},
        };

        var maia_2 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Je me détache des sensations d’inconfort.", name: 'r_1', labels: scale_2},
            {prompt: "Lorsque je ressens de la douleur ou de l’inconfort, je m'efforce de les surmonter.", name: 'r_2', labels: scale_2},
            {prompt: "Lorsque je ressens une douleur physique, cela me stresse", name: 'r_3', labels: scale_2},
            {prompt: "Je commence à me soucier que quelque chose n'aille pas dès que je ressens le moindre inconfort.", name: 'r_4', labels: scale_2},
            {prompt: "Je peux percevoir une sensation corporelle déplaisante sans m'en inquiéter.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1b', block_nb: 3 , stimulus: ''},
        };

        var maia_3 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Je peux prêter attention à ma respiration sans être distrait par les choses qui arrivent autour de moi.", name: 'r_1', labels: scale_2},
            {prompt: "Je peux rester conscient de mes sensations corporelles intérieures même lorsqu'il se passe beaucoup de choses autour de moi).", name: 'r_2', labels: scale_2},
            {prompt: "Lorsque je suis en conversation avec quelqu'un, je peux porter attention à ma posture.", name: 'r_3', labels: scale_2},
            {prompt: "Je peux rediriger mon attention sur mon corps si je suis distrait.", name: 'r_4', labels: scale_2},
            {prompt: "Je peux détourner mon attention de mes pensées pour la tourner vers mon corps (vers mes sensations corporelles).", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1c', block_nb: 3 , stimulus: ''},
        };

        var maia_4 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Je peux conserver la conscience de l'ensemble de mon corps même lorsqu'une partie de moi-même éprouve de la douleur ou de l'inconfort.", name: 'r_1', labels: scale_2},
            {prompt: "Je suis capable de focaliser mes pensées de façon consciente sur mon corps dans son entier.", name: 'r_2', labels: scale_2},
            {prompt: "Je perçois comment mon corps change lorsque je suis en colère.", name: 'r_3', labels: scale_2},
            {prompt: "Lorsque quelque chose ne va pas dans ma vie, je peux le ressentir dans mon corps.", name: 'r_4', labels: scale_2},
            {prompt: "Je remarque que mes sensations corporelles changent après une expérience apaisante.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1d', block_nb: 3 , stimulus: ''},
        };

        var maia_5 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Je perçois que ma respiration devient dégagée et aisée lorsque je me sens confortable.", name: 'r_1', labels: scale_2},
            {prompt: "Je perçois comment mon corps change lorsque je me sens heureux/joyeux.", name: 'r_2', labels: scale_2},
            {prompt: "Lorsque je me sens débordé, je peux trouver un endroit calme à l’intérieur de moi.", name: 'r_3', labels: scale_2},
            {prompt: "Lorsque je prends conscience de mon corps, je ressens une sensation de calme.", name: 'r_4', labels: scale_2},
            {prompt: "Je peux utiliser ma respiration pour réduire la tension.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1e', block_nb: 3 , stimulus: ''},
        };

        var maia_6 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Lorsque je suis pris dans mes pensées, je peux calmer mon esprit en me concentrant sur mon corps / sur ma respiration.", name: 'r_1', labels: scale_2},
            {prompt: "Je suis à l'écoute de mon corps concernant mon état émotionnel.", name: 'r_2', labels: scale_2},
            {prompt: "Lorsque je suis stressé, je prends le temps d'explorer comment mon corps se sent.", name: 'r_3', labels: scale_2},
            {prompt: "J’écoute mon corps afin de m’informer sur ce que je dois faire.", name: 'r_4', labels: scale_2},
            {prompt: "Je suis chez moi dans mon corps.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1f', block_nb: 3 , stimulus: ''},
        };

        var maia_7 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Je sens que mon corps est un endroit sûr.", name: 'r_1', labels: scale_2},
            {prompt: "Je fais confiance à mes sensations corporelles.", name: 'r_2', labels: scale_2},
          ],
          randomize_question_order: false,
          button_label: 'Suivant',
          data: { trialtype: 'maia', label: 'maia_1g', block_nb: 3 , stimulus: ''},
        };

        // PANAS
        var panas_instr = {
            type: 'instructions',
            pages: [
              p_instr,
              // p_instr_2,
            ],
            show_clickable_nav: true,
            data: { trialtype: 'instr', label: 'instruction', block_nb: 3 , stimulus: '', view_history: ''},
            button_label_previous: 'Précédent',
            button_label_next: 'Suivant',
          }
    
        var panas_1 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Intéressé(e)", name: 'r_1', labels: scale},
              {prompt: "En détresse", name: 'r_2', labels: scale},
              {prompt: "Excité(e)", name: 'r_3', labels: scale},
              {prompt: "Bouleversé(e)", name: 'r_4', labels: scale},
              {prompt: "Fort(e)", name: 'r_5', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'panas', label: 'panas_2a', block_nb: 3 , stimulus: ''},
        };

        var panas_2 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Coupable", name: 'r_6', labels: scale},
              {prompt: "Apeuré(e)", name: 'r_7', labels: scale},
              {prompt: "Hostile", name: 'r_8', labels: scale},
              {prompt: "Enthousiaste", name: 'r_9', labels: scale},
              {prompt: "Fier(ière)", name: 'r_10', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'panas', label: 'panas_2b', block_nb: 3 , stimulus: ''},
        };

        var panas_3 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Irritable", name: 'r_11', labels: scale},
              {prompt: "Alerte", name: 'r_12', labels: scale},
              {prompt: "Honteux(se)", name: 'r_13', labels: scale},
              {prompt: "Inspiré(e)", name: 'r_14', labels: scale},
              {prompt: "Nerveux(se)", name: 'r_15', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'panas', label: 'panas_2c', block_nb: 3 , stimulus: ''},
        };

        var panas_4 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Déterminé(e)", name: 'r_16', labels: scale},
              {prompt: "Attentif", name: 'r_17', labels: scale},
              {prompt: "Agité(e)", name: 'r_18', labels: scale},
              {prompt: "Actif(ve)", name: 'r_19', labels: scale},
              {prompt: "Craintif(ve)", name: 'r_20', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Suivant',
            data: { trialtype: 'panas', label: 'panas_2c', block_nb: 3 , stimulus: ''},
        };
   
        // Push dans la timeline 

        var practchunk= {
            chunk_type:'linear',
            timeline: [maia_instr, maia_1, maia_2, maia_3, maia_4, maia_5, maia_6, maia_7, panas_instr, panas_1, panas_2, panas_3, panas_4]
        };

        panas.push(practchunk);
    }
    return panas;
}