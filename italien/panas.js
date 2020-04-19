function panas_task(practice) {

    var panas = [];

    if (practice != 0) {

        var scale = [
          "Leggermente/poco", 
          "Un pò", 
          "Moderatamente", 
          "Abbastanza", 
          "Moltissimo"
        ];

        var scale_2 = [
          "Mai", 
          "  ", 
          "  ", 
          "  ", 
          "Sempre"
        ];

        // MAIA
        var maia_instr = {
          type: 'instructions',
          pages: [
            m_instr
          ],
          show_clickable_nav: true,
          data: { trialtype: 'instr', label: 'instruction', block_nb: 3 , stimulus: '', view_history: ''},
          button_label_previous: 'Precedente',
          button_label_next: 'Continua',
        }

        var maia_1 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Quando sono teso noto che in punti del mio corpo è localizzata la tensione.", name: 'r_1', labels: scale_2},
            {prompt: "Noto quando sono a disagio nel mio corpo.", name: 'r_2', labels: scale_2},
            {prompt: "Noto i punti del mio corpo in cui mi sento a mio agio.", name: 'r_3', labels: scale_2},
            {prompt: "Noto i cambiamenti nel mio respiro, per esempio se rallenta o acclera", name: 'r_4', labels: scale_2},
            {prompt: "Non noto la tensione fisica o il disagio fino a quando questi non diventano più seri.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1a', block_nb: 3 , stimulus: ''},
        };

        var maia_2 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Mi distolgo dalle sensazioni di disagio.", name: 'r_1', labels: scale_2},
            {prompt: "Quando provo dolore o disagio, cerco comunque di andare avanti con quello che stavo facendo nonostante ciò.", name: 'r_2', labels: scale_2},
            {prompt: "Quando sento un dolore fisico, mi agito.", name: 'r_3', labels: scale_2},
            {prompt: "Inizio a preoccuparmi che ci sia qualcosa che non va, se percepisco un disagio.", name: 'r_4', labels: scale_2},
            {prompt: "Posso notare una sensazione corporea spiacevole senza preoccuparmene.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1b', block_nb: 3 , stimulus: ''},
        };

        var maia_3 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Posso prestare attenzione sul mio respiro senza farmi distrarre dalle cose che succedono attorno a me.", name: 'r_1', labels: scale_2},
            {prompt: "Posso mantenere la consapevolezza delle mie sensazioni fisiche interiori anche se attorno a me avvengono molte cose.", name: 'r_2', labels: scale_2},
            {prompt: "Quando sto conversando con qualcuno, riesco a prestare attenzione alla mia postura.", name: 'r_3', labels: scale_2},
            {prompt: "Posso ritrovare la consapevolezza del mio corpo se sono distratto.", name: 'r_4', labels: scale_2},
            {prompt: " Riesco a ridirezionare l’attenzione dall’atto di pensare all’atto di percepire il mio corpo.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1c', block_nb: 3 , stimulus: ''},
        };

        var maia_4 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Riesco a mantenere la consapevolezza del mio corpo nella sua interezza anche quando una parte di me è dolorante o a disagio.", name: 'r_1', labels: scale_2},
            {prompt: "Sono capace di focalizzarmi intenzionalmente sul mio corpo nella sua interezza.", name: 'r_2', labels: scale_2},
            {prompt: "Noto in che modo il mio corpo cambia quando sono arrabbiato.", name: 'r_3', labels: scale_2},
            {prompt: "Quando qualcosa va storto nella mia vita, riesco a percepirlo nel mio corpo.", name: 'r_4', labels: scale_2},
            {prompt: "Noto di sentire il mio corpo diverso dopo un’esperienza serena.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1d', block_nb: 3 , stimulus: ''},
        };

        var maia_5 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Noto che il mio respiro diventa libero e agevole quando mi sento a mio agio.", name: 'r_1', labels: scale_2},
            {prompt: "Noto come il mio corpo cambia quando mi sento felice/gioioso.", name: 'r_2', labels: scale_2},
            {prompt: "Quando mi sento sopraffatto, riesco a trovare dentro di me un posto tranquillo.", name: 'r_3', labels: scale_2},
            {prompt: "Quando rivolgo la consapevolezza sul mio corpo, provo un senso di calma.", name: 'r_4', labels: scale_2},
            {prompt: "Riesco ad utilizzare il mio respiro per ridurre la tensione.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1e', block_nb: 3 , stimulus: ''},
        };

        var maia_6 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Quando mi assalgono i pensieri, posso calmare la mente concentrandomi sul mio corpo/respiro.", name: 'r_1', labels: scale_2},
            {prompt: "Ascolto le informazioni provenienti dal mio corpo riguardanti i miei stati emotivi.", name: 'r_2', labels: scale_2},
            {prompt: "Quando sono agitato, prendo il tempo necessario per indagare come sta il mio corpo.", name: 'r_3', labels: scale_2},
            {prompt: "Ascolto il mio corpo per sapere cosa fare.", name: 'r_4', labels: scale_2},
            {prompt: "Nel mio corpo mi sento a casa.", name: 'r_5', labels: scale_2}
          ],
          randomize_question_order: false,
          button_label: 'Continua',
          data: { trialtype: 'maia', label: 'maia_1f', block_nb: 3 , stimulus: ''},
        };

        var maia_7 = {
          type: 'survey-likert',
          preamble: maia_pre,
          questions: [
            {prompt: "Sento che il mio corpo è un posto sicuro.", name: 'r_1', labels: scale_2},
            {prompt: "Mi fido delle sensazioni del mio corpo.", name: 'r_2', labels: scale_2},
          ],
          randomize_question_order: false,
          button_label: 'Continua',
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
            button_label_previous: 'Precedente',
            button_label_next: 'Continua',
          }
        
        var panas_1 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Interessato", name: 'r_1', labels: scale},
              {prompt: "Angosciato", name: 'r_2', labels: scale},
              {prompt: "Eccitato", name: 'r_3', labels: scale},
              {prompt: "Turbato", name: 'r_4', labels: scale},
              {prompt: "Forte", name: 'r_5', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'panas', label: 'panas_2a', block_nb: 3 , stimulus: ''},
        };

        var panas_2 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Colpevole", name: 'r_6', labels: scale},
              {prompt: "Spaventato", name: 'r_7', labels: scale},
              {prompt: "Ostile", name: 'r_8', labels: scale},
              {prompt: "Entusiasta", name: 'r_9', labels: scale},
              {prompt: "Orgoglioso", name: 'r_10', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'panas', label: 'panas_2b', block_nb: 3 , stimulus: ''},
        };

        var panas_3 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Irritabile", name: 'r_11', labels: scale},
              {prompt: "Concentrato", name: 'r_12', labels: scale},
              {prompt: "Vergogna", name: 'r_13', labels: scale},
              {prompt: "Ispirato", name: 'r_14', labels: scale},
              {prompt: "Nervoso", name: 'r_15', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'panas', label: 'panas_2c', block_nb: 3 , stimulus: ''},
        };

        var panas_4 = {
            type: 'survey-likert',
            preamble: panas_pre,
            questions: [
              {prompt: "Determinato", name: 'r_16', labels: scale},
              {prompt: "Attento", name: 'r_17', labels: scale},
              {prompt: "Agitato", name: 'r_18', labels: scale},
              {prompt: "Attivo", name: 'r_19', labels: scale},
              {prompt: "Impaurito", name: 'r_20', labels: scale}
            ],
            randomize_question_order: false,
            button_label: 'Continua',
            data: { trialtype: 'panas', label: 'panas_2c', block_nb: 3 , stimulus: ''},
        };
   
        // Push dans la timeline 

        var practchunk= {
            chunk_type:'linear',
            // timeline: [panas_instr, panas_1, panas_2, panas_3, panas_4]
            timeline: [panas_instr, panas_1, panas_2, panas_3, panas_4, maia_instr, maia_1, maia_2, maia_3, maia_4, maia_5, maia_6, maia_7]
        };

        panas.push(practchunk);
    }
    return panas;
}