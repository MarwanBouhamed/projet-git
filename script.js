

           //Chapitre 7
// let FirstName = Marwan;
// let LastName = Bouhamid;
// console.log("my name is" , FirstName , LastName);


            //Chapitre 8
//fonction 1 name
function saluer(nom) {
    console.log("Bonjeur " + nom + " !");
}
console.log(saluer("Marwan"));


//fonction 2 calcule

function opper(a,b,c,d){
    return ((a + b) - c ) * d;
}

let oppertion = opper(60 , 40 , 20 , 2);
console.log("la solution est:", oppertion);

              //Chapitre 9

let age = 20;

if (age < 18) {
      console.log("Vous êtes mineur.");
} else if (age === 18) {
      console.log("Vous venez d’atteindre la majorité !");
} else {
      console.log("Vous êtes majeur.");
}
