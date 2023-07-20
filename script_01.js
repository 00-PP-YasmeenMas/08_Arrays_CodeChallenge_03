
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */


// Cagri's Lösung
// const GAP = " ";
// const PUNCTUATION = {S: '.', Q: '?', E: '!'};
// const ERROR_PUNC = "FEHLER! Satzzeichen nicht erkannt.";
// function getSentence(arr,op) {
//     if (op in PUNCTUATION) {
//         return arr.join(GAP) + PUNCTUATION[op];
//     } else {
//         return ERROR_PUNC;
//     }
// }

//Modul: Array als Parameter
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Ich","bin","Max"],"A"));

function getSentence(arr, op) {

    return getSentenceArr(arr) + getPunktuation(op);
}


//Modul: Punktuation | Test
// output(getPunktuation("S"));
// output(getPunktuation("Q"));
// output(getPunktuation("E"));
// output(getPunktuation("ö"));
function getPunktuation(op) {
   
  switch (op) {
    case "S":
        op = ".";
        break;
    case "Q":
        op = "?";
        break;
    case "E":
        op = "!";
        break;
  
    default:
        op = "";
        break;
  } 
   
     return op;
}

//Modul: Satzbau mit Array | Test
// output(getSentenceArr(["Ich","bin","Max"]));
function getSentenceArr(arr) {
    const GAP = " ";
    return arr.join(GAP);
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}