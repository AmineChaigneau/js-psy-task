// Italien 
var next = "<p style='font-size: 0.8em;'> Premere su un tasto per continuare.</p>"
var next2 = "<p style='font-size: 0.6em;'> Premere su un tasto per continuare.</p>"

var font = "<div style='font-size: 0.8em;'>";
var font1 = "</div>";

var expe_rules = "<img src='instr.jpg'></img> </br> Prima di iniziare l’esperimento, prenda in mano il telefono come indicato nell’immagine." + "<p style='font-size: 0.8em'>Lo schermo dovrà essere posizionato in orizzontale</p>";
var time = "L’esperimento durerà circa 20 minuti. La ringraziamo per la sua partecipazione.";

var bienvenue = "Benvenuto in questo esperimento. </br></br>" + next;

var instructions = ["<div class='part'>Prima parte</div> </br></br>" + font + " Nel primo compito una parola che indica uno stato emotivo di base apparirà al centro dello schermo (per esempio: Sereno). Due differenti parole appariranno (in riquadri) ai due angoli in basso dello schemo." + font1 +
font + "</br> <img src='exemple.png' style='height: 150px; width:250px;'></img>" + font1 + next2];

var instructions_1 = [" In seguito appariranno due scelte. Dovrà quindi scegliere e cliccare sulla parola che le sembrerà più pertinente. </br></br>" +
" La invitiamo di rispondere il più rapidamente possibile e nel migliore dei modi. </br></br>" + next2];

    // Ethique

    var ethique_1 = [font + " Gentile partecipante, questo studio intende valutare come il periodo di quarantena che stiamo vivendo influisce sulla nostra dimensione emotiva. </br></br> Se deciderà di partecipare, le saranno chieste alcune informazioni sulle sue attuali condizioni di vita " + font1];

    var ethique_2 = [font + " In seguito, le sarà chiesto di eseguire un breve compito in cui dovrà indicare quali delle parole che le saranno presentate le sembrino più simili. </br></br> Infine, le sarà chiesto di compilare due brevi questionari sulla sua consapevolezza dei segnali corporei e sul suo stato affettivo " + font1 + "</br> <p style='font-size: 0.6em;'> La sessione durerà 20 minuti circa.</p>"];

    var ethique_3 = [font + " Lo studio è svolto in moniera anonima; non le sarà chiesto il suo nome (o altri dati personali). Nessun dato sarà raccolto server in modo implicito. </br></br> I dati raccolti saranno analizzati nel loro insieme (non singolarmente per partecipante) e accessibili solo ai responsabili dello studio (non saranno forniti a terzi). Saranno conservati per la durata di 5 anni."+ font1];

    var ethique_4 = [font + " Lo studio intende valutare esclusivamente i fenomeni indicati precedentemente, e i dati non saranno utilizzati in altri ambiti, per esempio in quello clinico." +
    " </br></br> Sarà libero di interrompere la partecipazione in qualsiasi momento, senza alcun preavviso e senza alcuna conseguenza." + font1];

    var ethique_5 = [font + " Qualora decidesse di prendere parte allo studio, può proseguire con la compilazione. </br></br> Possono partecipare allo studio solo i maggiorenni; quindi accettando, conferma di essere maggiorenne." + font1]
    
    var ethique_6 = [font + " Per qualsiasi domanda e se vuole essere aggiornato sui risultati dello studio può contattare i responsabili della ricerca:" + font1 + "</br></br> <p style='font-size: 0.6em;'>Dr Laura Barca <font color='blue'>(laura.barca@istc.cnr.it)</font>, Dr Giovanni Pezzulo <font color='blue'>(giovani.pezzulo@istc.cnr.it)</font>, Prof. Pierpaolo Iodice <font color='blue'>(pierpaolo.iodice@univ-rouen.fr)</font>.</p>" +
    font + " Grazie per la sua collaborazione." + font1];

    // Formulaire

    var before_form = ["<div class='part'>Seconda parte</div> </br></br> La invitiamo di rispondere ad alcune domande. Legga attentamente e risponda a tutte le domande proposte.</br></br>" +
    "Il questionario durerà circa 5 minuti</br></br>" + next2];

    var likert_instr_1 = ["La scala presentata è composta da un determinato numero di parole, che descrivono diversi processi corporei. Legga, in seguito indichi la frequenza accanto ad ogni processo. </br></br>" + next2]
   
    var likert_instr_2 = ["Dovrà indicare con l’aiuto di una scala a 5 punti (da Mai a Sempre) quanto è consapevole dei processi corporei descritti sotto. </br></br>" + next2]
    
    var likert_pre = ["<div style='font-size: 0.6em;'>" + " Valuta, usando una scala a 5 punti (da Mai a Sempre) quanto sei consapevole dei processi corporei descritti sotto. :" + "</div>"]
   
    // Panas

    var p_instr = ["<div class='part'>Terza parte :</div> </br></br> Questa scala comprende una serie di parole che descrivono diverse emozioni e stati d'animo. Legga attentamente ogni parola e indichi quanto lo stato d'animo/emozione indicato rispecchia come si sente</br></br>" + next2];
   
    // var p_instr_2 = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata. </br></br>" + next2];

    var panas_pre = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata."]

    // MAIA

    var m_instr = ["<div class='part'>Terza parte :</div> </br></br> Questa scala comprende una serie di parole che descrivono diverse emozioni e stati d'animo. Legga attentamente ogni parola e indichi quanto lo stato d'animo/emozione indicato rispecchia come si sente</br></br>" + next2];
   
    // var p_instr_2 = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata. </br></br>" + next2];
 
    var maia_pre = ["In questo momento. Assegni un valore a ogni parola, facendo riferimento alla scala sotto riportata."]
   
    // Practice

    var stimpract = "Per ogni prova, dopo aver cliccato sul tasto « continua », apparirà al centro dello schermo un’emozione. </br> In seguito le saranno proposte due scelte. </br></br>" + next;

    var instru_practice = ["Avrà a disposizione qualche esempio per esercitarsi prima di iniziare la prova. </br></br>" + 
    next];

    // Tasks

    var begin_tasks = ["</b> Durante questa prima parte, sono previste due pause se lo si ritiene necessario. </br> "+
    "Non esiste un limite di tempo per scegliere tra le due proposte, ma ti invitiamo a rispondere il più rapidamente possibile </br>" +
    "<p style='font-size: 0.8em'> Premere sul tasto « Continua » per iniziare.</p>"];

    var break_tasks = ["</br> Ora è possibile fare una pausa. Il primo blocco è stato terminato. </br></br>" +
    next];

    // End

    var end_task = ["L’esperimento è terminato. Grazie per la partecipazione."]

