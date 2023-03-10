# React project

## Wizarding World Characters

Colella Anna - Teoria e tecnologia della comunicazione - Corso di Applicaizioni Web: progettazione e sviluppo

### Il progetto 
Il progetto consiste in una sigle page applicazione a tema Harry Potter tornato un auge grazie all’uscita del videogioco ambientato nell’universo della saga. 
Si è voluto creare una rappresentazione dei personaggi principali della saga originale.  
Il lavoro a livello di struttura è progettato in modo che l’utente dalla home sia in grado di scegliere i personaggi basandosi sulla casa di appartenenza ed entrare nel dettaglio degli stessi. 

### Struttura del progetto 
L’organizzazione del progetto è stato necessario definire in modo preciso le risorse (file codice sorgente, immagini,ecc..) 
Le directory principali sono: 
- Assets: dove sono contenuti tutti i materiali esterni e a sua volta suddivisi per diplegia di materiale.
- Components: che comprende tutti i componenti specifici del lavoro. In questa cartella sono organizzati in altra sottocartelle che contengono il codice sorgente e il relativo foglio di stile 
- Utilities: che contiene i file javascript di funzionalità generiche richiamabili all’interno del progetto. 
- Views: l’insieme di tutte le pagine dell'applicatione. 



### API 

L’API utilizzata è HP-API (inserire link), da questo servizio è possibile recuperare diverse informazioni relative ai vari personaggi. 
È stata definita una classe in utility chiamata CharactersDataService all’interno della classe è stato definito un medito asincrono chiamato getCharacterByHouse che accetta come parametro una casa in modo da fare la chiamata all’URL corretto. 
La chiamata è gestita con un try/catch. Nel caso in cui la chiamata andasse a buon fine viene restituito un array con la risposta e lo status dell risposta. 
Nel caso si errore viene restituita la dicitura di errore.  L’errore non è gestito in altre parti del codice. 


La classe viene implementata in charactersTable in una variabile chiamata service da cui si accede al metodo getCharacterByHouse
A cui viene passato la house come parametro direttamente come prop del componente CharacterTableByHouse. 
Non è stato implementato il controllo sullo status della risposta, viene salvata la response nello state del componente. 

## Visualizzaizone
All'utente si presenta la home come la scelta di una delle 4 case di Hogwarts 

In base alla scelta l'utente vengono mostrati i personaggi appartenteti alla casa scelta 


## Prolematiche
Al momento il progetto funziona correttamente la visualizzazione dei dati in versione  tabella, ma è sorto il problema della sua controparte in griglia con conseguente card. 
La pagina dettaglio personaggio non è stata sviluppata in quanto era prevista nel momento in cui la visualizzazione con switch da tabella e griglia sarebbe stata completata. 
Al momento dello sviluppo è, come accennato, sorto un problema con la griglia al quale sto cercando soluzione. 
È presente un accenno alla grafica della Web Application ma non totalmente completa, proprio in virtù del fatto che volessi dare priorità alla costruzione del sistema funzionante. 

### Dettagli previsti nello sviluppo 
Da verificare al termine dello sviluppo: 
- Ottimizzazione delle immagini 
- Progettazione di immagine neutra quando non rimandata dal servizio
- Compatibilità in tutti i dispositivi di visualizzazione 
- Progettazione dello stato di errore e/o della pagine 404


