//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton13 = document.getElementById("Id_btn13");
bouton13.addEventListener("click",objet);

function objet(){
    var tab = new Array ();
    var i = 0;
    var som = 0;
    var moy = "";
    while (n!=0) {
        var n = Number(window.prompt("Entrez des nombres.\nPour arrêter la saisie, laissez la case vide ou entrez la valeur 0"));
        if (isNaN(n)){
            do {
                n = Number(window.prompt(`Vous n'avez pas saisi une valeur numérique\nPour arrêter la saisie, laissez la case vide ou entrez la valeur 0`));
            }
            while (isNaN(n));
        }
        if (n==null) {
            window.alert("Saisie annulée");
            return;
        }
        console.log(n);
        tab.push(n);
        i++;
    }

    tab.pop();
    console.log(tab);

    for (let j=0; j<tab.length; j++){
        som += tab[j];
    }

    moy = (som/tab.length).toFixed(2);
    console.log(`i=${tab.length}\nsom=${som}\nmoy=${moy}`);
    return window.alert(`Nombre de valeurs saisies : ${tab.length}\nLa somme de ces valeurs est égale à : ${som}\nLa moyenne de ces valeurs est égale à : ${moy}`);
}