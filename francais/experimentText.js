// Italien 
var next = "<p style='font-size: 0.8em;'> Veuillez cliquez sur le boutton pour continuer.</p>"
var next2 = "<p style='font-size: 0.6em;'> Veuillez cliquez sur le boutton pour continuer.</p>"

var font = "<div class='text-container'>";
var font2 = "<div class='text-container-1'>";
var font3 = "<div class='text-container-image'>";

var font1 = "</div>";

// Introduction (bienvenue + instruction)

var introimg = "<img src='/static/intro.jpg' class='intro-img'></img>"

var bienvenue = font + "Bienvenue dans l'expériementation. </br></br>" + "<p style='font-size: 0.8em;'> Veuillez cliquez sur le boutton pour commencer.</p>" + font1;

var time = font + "L'expérience va durée envrion 20 minutes. Nous vous remercions pour votre participation." + font1;

var expe_rules = "<img src='/static/instr.jpg' class='instr-img'></img>" + font + "Avant de commencer, veuillez prendre en main votre téléphone de la manière indiqué sur l'image." + "<p style='font-size: 0.8em'>L'écran doit être positionné à l'horizontal</p>" + font1;

    // Ethique

    var ethique_1 = [font + "Cher participant, cette étude vise à évaluer comment la période de quarantaine, que nous vivons, affecte notre dimension émotionnelle. </br></br> Si vous décidez de participer, vous serez invité à fournir des informations sur vos conditions de vie actuelles" + font1];

    var ethique_2 = [font + "La première partie consistera à sélectionner le mot vous semblant le plus pertinent." + font1];

    var ethique_2a = [font + "Enfin, vous devrez remplir deux courts questionnaires sur votre conscience des signaux corporels et votre état émotionnel" + "<p style='font-size: 0.8em;'>La session dure environ 20 minutes.</p>" + font1]

    var ethique_3 = [font + "La session est anonyme ; ne vous sera pas demandé votre nom (ou autre identifiant), vos données personnelles ne seront en aucun cas recueillies par le serveur."+ font1];

    var ethique_3a = [font + "Ces données seront analysées en groupe (et non individuellement), accessibles uniquement aux responsables de l'étude (ne seront pas communiquées à des tiers), et conservées pendant une période de 5 ans." + font1]

    var ethique_4 = [font + "L'étude ne vise pas à évaluer d'autres aspects que ceux mentionnés ci-dessus, et aucun résultat est utilisé pour autres domaines, par exemple, dans un cadre clinique." +
    font1];

    var ethique_4a = [font + "Vous êtes libre de mettre fin à votre participation à tout moment, sans préavis et sans aucune conséquence." + font1]; 

    var ethique_5 = [font + "Si vous décidez de participer à l'étude, vous pouvez poursuivre avec la compilation. </br></br>Seuls les adultes peuvent participer à l’étude; par conséquent, en acceptant, vous confirmez d’être majeur." + font1];

    var ethique_6 = [font + "Pour toute question et si vous souhaitez être informé des résultats de l'étude, vous pouvez contacter les responsables de la recherche :" + font1 + "<div class='descript'>Dr Laura Barca (laura.barca@istc.cnr.it), Dr Giovanni Pezzulo (giovani.pezzulo@istc.cnr.it), Prof. Pierpaolo Iodice (pierpaolo.iodice@univ-rouen.fr).</div>" + "<p style='font-size: 15px;'>Nous vous remercions de votre collaboration.</p>" ];

    // Formulaire

    var before_form = ["<div class='part'>Première partie</div>" + font + "Vous allez maintenant devoir répondre à quelques questions. Lisez attentivement et veuillez répondre à toutes les questions." +
    "La réponse au questionnaire durera moins de 5 minutes" + next + font1];

    // Instruction Task 1

    var instructions = ["<div class='part'>Deuxième partie</div>" + font + "Dans la première tâche, un mot indiquant un état émotionnel de base apparaîtra au centre de l'écran (par exemple: Aimable)." +
    "</br><img src='/static/exemple.png' class='instr-img'></img>" + font1];

    var instructions_a = [font + "Deux mots différents apparaîtront (dans des cases) dans les deux coins inférieurs de l'écran." + "</br><img src='/static/exemple.png' class='instr-img'></img>" + font1];
    
    var rappel = [font + "Pour rappel, votre téléphone doit être positionné à l'horizontale pour réaliser cette expérience." + font1 + "<img src='/static/instr.jpg' class='instr-img'></img>"]

    var instructions_1 = [font + "Ensuite deux choix s'offre a vous. Il vous suffir d'appuyer sur le choix qui vous semble le plus pertinent." +
    " Merci de répondre rapidement et le mieux possible.</br>" + font1];

    var instru_practice = [font + "Vous avez maintenant quelques essais pour vous entraîner.</br>" + font1];

     // Task 1 

     var begin_tasks = [font + "Au cours de cette première partie, deux pauses s'offrirons à vous."+
     "Il n’y a pas de limite de temps pour choisir entre les deux réponses, veuillez essayer de répondre le plus rapidement possible </br>" +
     "<p style='font-size: 0.6em'> Appuyez sur le boutton 'Continuer' pour commencer.</p>" + font1];
 
     var break_tasks = ["</br> Veuillez cliquez sur le boutton 'Continuer' lorsque vous êtes prête(e) pour commencer. </br></br>" +
     next];

     // Transition Task 1 / Task 2

     var transition = [font + "Merci pour votre participation. </br>" + "Vous pouvez choisir de poursuivre l'expérience en effectuant trois tests psychologiques." + " Pour une durée d'envrion 10 minutes." + next + font1]

    // Task 2 BPQ

    // var likert_instr_1 = ["<div class='part'>Terza parte</div></br>" + font2 + "La scala presentata è composta da un determinato numero di parole, che descrivono diversi processi corporei. Legga, in seguito indichi la frequenza accanto ad ogni processo. </br></br>" + next + font1]
   
    // var likert_instr_2 = [font + "Dovrà indicare con l’aiuto di una scala a 5 punti (da Mai a Sempre) quanto è consapevole dei processi corporei descritti sotto. </br></br>" + next2 + font1]
    
    // var likert_pre = ["<div class='text-preamble-form'>" + " Valuta, usando una scala a 5 punti (da Mai a Sempre) quanto sei consapevole dei processi corporei descritti sotto. :" + "</div>"]
    
    // Task 3 MAIA

    var m_instr = ["<div class='part'>Troisième partie</div></br>" + font + "Vous trouverez, à la page suivante, une liste d’affirmations. </br> Vous devrez indiquer combien de fois, en cochant la case correspondante, chaque déclaration se réfère à vous dans la vie quotidienne." + font1];
   
    var maia_pre = ["<div class='text-preamble-form'>" + "Veuillez indiquer combien de fois, en cochant la case correspondante, chaque déclaration se réfère à vous dans la vie quotidienne." + font1]
    
    // Task 4 PANAS

    var p_instr = ["<div class='part'>Quatrième partie</div></br>" + font + "L'échelle qui va vous être présenté se compose d'une série de mots qui décrivent différentes émotions et humeurs. Lisez attentivement chacun de ces mots et indiquez spontanément à quel niveau vous vous sentez ainsi en ce moment précis." + font1];
   
    // var p_instr_2 = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata. </br></br>" + next2];

    var panas_pre = ["<div class='text-preamble-form'>" + "Indiquez spontanément à quel niveau vous vous sentez ainsi en ce moment précis." + font1]

    // Practice

    var stimpract = "Pour chaque essai, après avoir cliquez sur le boutton 'Continuer', une émotion apparaîtra a l'écran. </br> Ensuite deux choix s'offriront à vous. </br></br>" + next;

    // End

    var end_task = ["L'expérience est terminée. Merci de vote participation."]
