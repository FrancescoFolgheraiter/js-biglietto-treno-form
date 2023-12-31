/* CONSEGNA
1)   Scrivere un programma che chieda all'utente:
        - Il numero di chilometri da percorrere
        - Età del passeggero
2)   Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        - va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà 
inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato
con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

*/



const buttonGenera = document.getElementById('genera');
const buttonAn = document.getElementById("annulla");

buttonAn.addEventListener("click", function(){
    const notVisible = document.querySelector("#biglietto-treno");
    notVisible.classList.add('d-none');
})


buttonGenera.addEventListener("click", function(){
    //input dati
    const nome = document.getElementById("name").value;
    const numeroKm = parseInt(document.querySelector("#chilometri").value);
    const eta = document.getElementById("eta").value;
    let counter = 0;
    console.log("numero chilometri", numeroKm , typeof numeroKm);
    console.log("eta", eta , typeof eta);
    console.log("nome", nome , typeof nome);
    let prezzoBiglietto = numeroKm * 0.21;
    let offerta = "Biglietto standard";
    console.log("prezzo biglietto", prezzoBiglietto, typeof prezzoBiglietto);
    //calcolo scontistica
    
    if (((eta > 130) || (eta <= 1)) || ((numeroKm > 500) || (numeroKm < 10))){
        alert("Devi inserire un età compresa tra 1 e 130 e un numero di chilometri compreso tra 10 e 500")
    }
    else{
        if (eta === "minorenne") {
            prezzoBiglietto *= 0.8;
            offerta = "Biglietto scontato 20%";
        }
        else if (eta === "old"){
            prezzoBiglietto *= 0.6;
            offerta = "Biglietto scontato 40%";
        }
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        console.log("prezzo biglietto scontato", prezzoBiglietto, typeof prezzoBiglietto)
        
        const numeroCarrozza = Math.floor((Math.random() * 20) + 1);
        const numeroCp = Math.floor((Math.random() * 1000) + 8000);
        //output dati
        counter ++;
        
        const notVisible = document.querySelector("#biglietto-treno");
        notVisible.classList.toggle('d-none');
        
        
;
        document.querySelector(".prezzo").innerHTML = (prezzoBiglietto) + "€"; 
        document.querySelector("#nomeCognome").innerHTML = nome;
        document.querySelector("#offerta").innerHTML = offerta;
        document.querySelector("#carrozza").innerHTML = numeroCarrozza;
        document.querySelector("#codiceCp").innerHTML = numeroCp;
        
    }


    //azzeramento campi
    document.getElementById("name").value = "";
    document.getElementById("chilometri").value = "";
    document.getElementById("eta").value = "";
    
}
)