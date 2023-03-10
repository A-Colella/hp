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

L’API utilizzata è  <a href="https://hp-api.onrender.com/"  >
HP-API</a>, da questo servizio è possibile recuperare diverse informazioni relative ai vari personaggi. 
Per accedere ai dati è stata definita una classe in utility chiamata CharactersDataService all’interno della classe è stato definito un metodo asincrono chiamato getCharacterByHouse che accetta come parametro una casa in modo da fare la chiamata all’URL corretto. 
La chiamata è gestita con un try/catch. Nel caso in cui la chiamata andasse a buon fine viene restituito un array con la risposta e lo status della risposta. 
Nel caso si errore viene restituita la dicitura di errore. L’errore non è gestito in altre parti del codice. 
 <img width="857" alt="Screenshot 2023-03-10 at 19 30 11" src="https://user-images.githubusercontent.com/98492097/224397073-7aa990d9-6f56-4a9c-82f0-f9d66ebb1e3c.png">

La classe viene implementata in charactersTable in una variabile chiamata service da cui si accede al metodo getCharacterByHouse a cui viene passato la house come parametro direttamente come prop del componente CharacterTableByHouse. 
Non è stato implementato il controllo sullo status della risposta, viene salvata la response nello state del componente. 
<img width="607" alt="Screenshot 2023-03-10 at 19 30 26" src="https://user-images.githubusercontent.com/98492097/224397153-921901af-8212-4e96-9a29-90cc328a5d0a.png">


## Visualizzazione
All'utente si presenta la home come la scelta di una delle 4 case di Hogwarts 
![MacBook Pro 14_ - 1](https://user-images.githubusercontent.com/98492097/224397486-4ad51554-925f-4eef-ab96-f090c8bb3a07.png)

In base alla scelta l'utente vengono mostrati i personaggi appartenteti alla casa scelta in versione tabella
![MacBook Pro 14_ - 2](https://user-images.githubusercontent.com/98492097/224397506-b866c003-678c-431f-9d9c-028b8144272b.png)

con la ossibilità di switch in versione griglia.

![MacBook Pro 14_ - 3](https://user-images.githubusercontent.com/98492097/224397586-330a6bf0-ccb4-42b6-a373-987cb3e049b2.png)


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


