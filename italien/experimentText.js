// Italien 
var next = "<p style='font-size: 0.8em;'> Premere su un tasto per continuare.</p>"
var next2 = "<p style='font-size: 0.6em;'> Premere su un tasto per continuare.</p>"

var font = "<div class='text-container'>";
var font2 = "<div class='text-container-1'>";
var font3 = "<div class='text-container-image'>";

var font1 = "</div>";

// Introduction (bienvenue + instruction)

var introimg = "<img src='/static/intro.jpg' class='intro-img'></img>"

var bienvenue = font + "Benvenuto in questo esperimento. </br></br>" + "<p style='font-size: 0.8em;'> Premere su un tasto per cominciare.</p>"+ font1;

var time = font + "L’esperimento durerà circa 20 minuti. La ringraziamo per la sua partecipazione." + font1;

var expe_rules = "<img src='static/instr.jpg' class='instr-img'></img>" + font + "Prima di iniziare l’esperimento, prenda in mano il telefono come indicato nell’immagine." + "<p style='font-size: 0.8em'>Lo schermo dovrà essere posizionato in orizzontale</p>" + font1;

    // Ethique

    var ethique_1 = [font + "Gentile partecipante, questo studio intende valutare come il periodo di quarantena che stiamo vivendo influisce sulla nostra dimensione emotiva. </br> Se deciderà di partecipare, le saranno chieste alcune informazioni sulle sue attuali condizioni di vita " + font1];

    var ethique_2 = [font + "In seguito, le sarà chiesto di eseguire un breve compito in cui dovrà indicare quali delle parole che le saranno presentate le sembrino più simili." + font1];

    var ethique_2a = [font + "Infine, le sarà chiesto di compilare due brevi questionari sulla sua consapevolezza dei segnali corporei e sul suo stato affettivo " + "<p style='font-size: 0.8em;'>La sessione durerà 20 minuti circa.</p>" + font1]

    var ethique_3 = [font + "Lo studio è svolto in maniera anonima; non le sarà chiesto il suo nome (o altri dati personali). Nessun dato sarà raccolto dal in modo implicito."+ font1];

    var ethique_3a = [font + "I dati raccolti saranno analizzati nel loro insieme (non singolarmente per partecipante) e accessibili solo ai responsabili dello studio (non saranno forniti a terzi). Saranno conservati per la durata di 5 anni." + font1]

    var ethique_4 = [font + " Lo studio intende valutare esclusivamente i fenomeni indicati precedentemente, e i dati non saranno utilizzati in altri ambiti, per esempio in quello clinico." +
    font1];

    var ethique_4a = [font + "Sarà libero di interrompere la partecipazione in qualsiasi momento, senza alcun preavviso e senza alcuna conseguenza." + font1]; 

    var ethique_5 = [font + "Qualora decidesse di prendere parte allo studio, può proseguire con la compilazione. </br> Possono partecipare allo studio solo i maggiorenni; quindi accettando, conferma di essere maggiorenne." + font1];

    var ethique_6 = [font + " Per qualsiasi domanda e se vuole essere aggiornato sui risultati dello studio può contattare i responsabili della ricerca :" + font1 + "<div class='descript'>Dr Laura Barca (laura.barca@istc.cnr.it), Dr Giovanni Pezzulo (giovani.pezzulo@istc.cnr.it), Prof. Pierpaolo Iodice (pierpaolo.iodice@univ-rouen.fr).</div>" + "<p style='font-size: 15px;'>Grazie per la sua collaborazione.</p>" ];

    // Formulaire

    var before_form = ["<div class='part'>Prima parte</div>" + font + "La invitiamo di rispondere ad alcune domande. Legga attentamente e risponda a tutte le domande proposte." +
    " Il questionario durerà circa 5 minuti" + next + font1];

    // Instruction Task 1

    var instructions = ["<div class='part'>Seconda parte</div>" + font + "In questo compito una parola che indica uno stato emotivo di base apparirà al centro dello schermo (per esempio: Simpatico)." +
    "</br><img src='/static/exemple.png' class='instr-img'></img>" + font1];

    var instructions_a = [font + "Due differenti parole appariranno (in riquadri) ai due angoli in alto dello schemo." + "</br><img src='/static/exemple.png' class='instr-img'></img>" + font1];
    
    var rappel = [font + "Come promemoria, per eseguire la seguente attività, il telefono deve essere posizionato nello stesso modo dell'immagine." + font1 + "<img src='/static/instr.jpg' class='instr-img'></img>"]

    var instructions_1 = [font + "Dovrà quindi scegliere e cliccare sulla parola che le sembrerà più pertinente." +
    " La invitiamo di rispondere il più rapidamente possibile e nel migliore dei modi.</br>" + font1];

    var instru_practice = [font + "Avrà a disposizione qualche esempio per esercitarsi prima di iniziare la prova.</br>" + font1];

     // Task 1 

     var begin_tasks = [font + "Durante questa prima parte, sono previste due pause se lo si ritiene necessario."+
     " Non esiste un limite di tempo per scegliere tra le due proposte, ma ti invitiamo a rispondere il più rapidamente possibile </br>" +
     "<p style='font-size: 0.6em'> Premere sul tasto « Continua » per iniziare.</p>" + font1];
 
     var break_tasks = ["</br> Ora è possibile fare una pausa. Il primo blocco è stato terminato. </br></br>" +
     next];

     // Transition Task 1 / Task 2

     var transition = [font + "Grazie per la tua partecipazione. </br>" + "Puoi scegliere di continuare l'esperimento completando du rapidi test." + " Questa attività richiede circa 10 minuti" + next + font1]

    // Task 2 BPQ

    // var likert_instr_1 = ["<div class='part'>Terza parte</div></br>" + font2 + "La scala presentata è composta da un determinato numero di parole, che descrivono diversi processi corporei. Legga, in seguito indichi la frequenza accanto ad ogni processo. </br></br>" + next + font1]
   
    // var likert_instr_2 = [font + "Dovrà indicare con l’aiuto di una scala a 5 punti (da Mai a Sempre) quanto è consapevole dei processi corporei descritti sotto. </br></br>" + next2 + font1]
    
    // var likert_pre = ["<div class='text-preamble-form'>" + " Valuta, usando una scala a 5 punti (da Mai a Sempre) quanto sei consapevole dei processi corporei descritti sotto. :" + "</div>"]
    
    // Task 3 MAIA

    var m_instr = ["<div class='part'>Quatra parte :</div></br>" + font + "Questa scala comprende una serie di parole che descrivono diverse emozioni e stati d'animo. </br>Legga attentamente ogni parola e indichi quanto lo stato d'animo/emozione indicato rispecchia come si sente" + font1];
   
    var maia_pre = ["<div class='text-preamble-form'>" + "In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata." + font1]
    
    // Task 4 PANAS

    var p_instr = ["<div class='part'>Terza parte :</div></br>" + font + "Questa scala comprende una serie di parole che descrivono diverse emozioni e stati d'animo. Legga attentamente ogni parola e indichi quanto lo stato d'animo/emozione indicato rispecchia come si sente" + font1];
   
    // var p_instr_2 = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata. </br></br>" + next2];

    var panas_pre = ["<div class='text-preamble-form'>" + "In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata." + font1]

    // Practice

    var stimpract = "Per ogni prova, dopo aver cliccato sul tasto « continua », apparirà al centro dello schermo un’emozione. </br> In seguito le saranno proposte due scelte. </br></br>" + next;

    // End

    var end_task = ["L’esperimento è terminato. Grazie per la partecipazione."]

