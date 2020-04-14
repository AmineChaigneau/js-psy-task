// Français 
var next = "<p style='font-size: 0.8em;'>Veuillez cliquez sur le boutton pour continuer.</p>"
var next2 = "<p style='font-size: 0.6em;'>Veuillez cliquez sur le boutton pour continuer.</p>"

var font = "<div style='font-size: 0.8em;'>";
var font1 = "</div>";

var expe_rules = "<img src='instr.jpg'></img> </br> Avant de commencer, veuillez prendre en main votre téléphone de la manière indiqué sur l'image." + "<p style='font-size: 0.8em'>L'écran doit être positionné à l'horizontal</p>";
var time = "L'expérience va durée envrion 20 minutes. Nous vous remercions pour votre participation.";

var bienvenue = "Bienvenue dans l'expériementation. </br></br>" + next;

var instructions = ["<div class='part'>Première partie</div> </br>" + font + "Dans la première tâche, un mot indiquant un état émotionnel de base apparaîtra au centre de l'écran (par exemple: Terrifié). Deux mots différents apparaîtront (dans des cases) dans les deux coins inférieurs de l'écran." + font1+
font + "</br><img src='exemple_fr.png' style='height: 150px; width:250px; border: solid 1px gray'></img> </br></br> Au début de chaque essai, un boutton 'Continuer' sera présenté au centre de l’écran. </br></br>" + font1 + next2];

var instructions_1 = ["Ensuite deux choix s'offre a vous. Il vous suffir d'appuyer sur le choix qui vous semble le plus pertinent. </br></br>" +
" Merci de répondre rapidement et le mieux possible. </br></br>" + next2];

    // Ethique

    var ethique_1 = [font + "Cher participant, cette étude vise à évaluer comment la période de quarantaine, que nous vivons, affecte notre dimension émotionnelle. </br></br> Si vous décidez de participer, vous serez invité à fournir des informations sur vos conditions de vie actuelles" + font1];

    var ethique_2 = [font + "La première partie consistera à sélectionner le mot vous semblant le plus pertinent. </br></br> Enfin, vous devrez remplir deux courts questionnaires sur votre conscience des signaux corporels et votre état émotionnel" + font1 + "</br> <p style='font-size: 0.6em;'>La session dure environ 20 minutes.</p>"];

    var ethique_3 = [font + "La session est anonyme ; ne vous sera pas demandé votre nom (ou autre identifiant), vos données personnelles ne seront en aucun cas recueillies par le serveur. </br></br>Ces données seront analysées en groupe (et non individuellement), accessibles uniquement aux responsables de l'étude (ne seront pas communiquées à des tiers), et conservées pendant une période de 5 ans."+ font1];

    var ethique_4 = [font + "L'étude ne vise pas à évaluer d'autres aspects que ceux mentionnés ci-dessus, et aucun résultat est utilisé pour autres domaines, par exemple, dans un cadre clinique." +
    " </br></br> Vous êtes libre de mettre fin à votre participation à tout moment, sans préavis et sans aucune conséquence." + font1];

    var ethique_5 = [font + "Si vous décidez de participer à l'étude, vous pouvez poursuivre avec la compilation. </br></br>Seuls les adultes peuvent participer à l’étude; par conséquent, en acceptant, vous confirmez d’être majeur." + font1]
    
    var ethique_6 = [font + "Pour toute question et si vous souhaitez être informé des résultats de l'étude, vous pouvez contacter les responsables de la recherche:" + font1 + "</br></br> <p style='font-size: 0.6em;'>Dr Laura Barca <font color='blue'>(laura.barca@istc.cnr.it)</font>, Dr Giovanni Pezzulo <font color='blue'>(giovani.pezzulo@istc.cnr.it)</font>, Prof. Pierpaolo Iodice <font color='blue'>(pierpaolo.iodice@univ-rouen.fr)</font>.</p>" +
    font + "Nous vous remercions de votre collaboration." + font1];

    // Formulaire

    var before_form = ["<div class='part'>Deuxième partie</div> </br></br> Vous allez maintenant devoir répondre à quelques questions. Lisez attentivement et veuillez répondre à toutes les questions.</br></br>" +
    "La réponse au questionnaire durera environ 5 minutes</br></br>" + next2];

    var likert_instr_1 = ["L'échelle qui va vous être présenté se compose d'un certain nombre de mots qui décrivent différents processus corporels. Lisez chaque élément, puis indiquez le nombre sur l'échelle ci-dessous à côté de chaque mot. </br></br>" + next2]
   
    var likert_instr_2 = ["Vous allez devoir indiquez à l'aide d'une échelle de 5 points (de Jamais à Toujours), dans quelle mesure vous êtes conscient des processus corporels décrits ci-dessous. </br></br>" + next2]
    
    var likert_pre = ["<div style='font-size: 0.6em;'>" + "Évaluez dans quelle mesure vous êtes conscient des processus corporels décrits ci-dessous ? Utilisez l’échelle suivante pour répondre (Jamais à toujours) :" + "</div>"]
   
    // Panas

    var p_instr = ["<div class='part'>Quatrième partie :</div> </br></br> L'échelle qui va vous être présenté se compose d'une série de mots qui décrivent différentes émotions et humeurs. Lisez attentivement chacun de ces mots et indiquez spontanément à quel niveau vous vous sentez ainsi en ce moment précis. </br></br>" + next2];
   
    // var p_instr_2 = ["Vous allez devoir indiquez dans quelle mesure vous vous sentez en ce moment précis, en utilisant l'échelle indiquée. </br></br>" + next2];

    var panas_pre = ["Indiquez spontanément à quel niveau vous vous sentez ainsi en ce moment précis. "]
   
    // Maia 
    var m_instr = ["<div class='part'>Troisième partie :</div> </br></br>Vous trouverez, à la page suivante, une liste d’affirmations. Vous devrez indiquer combien de fois, en cochant la case correspondante, chaque déclaration se réfère à vous dans la vie quotidienne. </br></br>" + next2];
   
    var maia_pre = ["Veuillez indiquer combien de fois, en cochant la case correspondante, chaque déclaration se réfère à vous dans la vie quotidienne."]
    // Practice

    var stimpract = "Pour chaque essai, après avoir cliquez sur le boutton 'Continuer', une émotion apparaîtra a l'écran. </br> Ensuite deux choix s'offriront à vous. </br></br>" + next;

    var instru_practice = ["Vous avez maintenant quelques essais pour vous entraîner. </br></br>" + 
    next];

    // Tasks

    var begin_tasks = ["</b> Au cours de cette première partie, deux pauses s'offrirons à vous. </br>" +
    "Il n’y a pas de limite de temps pour choisir entre les deux réponses, veuillez essayer de répondre le plus rapidement possible </br>" +
    "<p style='font-size: 0.8em'> Veuillez cliquez sur le boutton 'Continuer' lorsque vous êtes prête(e) pour commencer.</p>"];

    var break_tasks = ["</br> Vous pouvez maintenant faire une pause. Vous avez terminé un bloc. </br></br>" +
    next];

    // End

    var end_task = ["L'expérience est terminée. Merci de vote participation."]