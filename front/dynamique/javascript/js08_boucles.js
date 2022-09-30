//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton8a = document.getElementById("Id_btn8a");
bouton8a.addEventListener("click",saisie);

function saisie() {
    var i = 1;
    var s = "";
    while (p !== "") {
        var p = window.prompt("Saisissez le prénom n°" + i + "\nLaissez vide ou cliquez sur 'Annuler' pour arrêter la saisie");
        if (p=="" || p==null) {
            break;
        }

        s += `Prénom n° ${i} : ${p}\n`;
        console.log(`Prénom n° ${i} : ${p}\n`);
        ++i;
    }
    window.alert(s);
    return;
}

//--------------------//

// ------------------ //
// --- Exercice 2 --- //
// ------------------ //

//--------------------//

var bouton8b = document.getElementById("Id_btn8b");
bouton8b.addEventListener("click",inférieur);

function inférieur() {
    var n = window.prompt("Saisir un nombre");
        if (n==null) {
            window.alert("Saisie annulée");
            return
        }
        else if (isNaN(n)) {
            window.alert(`${n} n'est pas un nombre`);
            return
        }
    var i;
    var r = 0;
    for (i=1; i<n; ++i) {
        r += ",\xa0" + i;
    }
    console.log(r.substring(3));
    window.alert("Les entiers inférieurs à\n" + n + " sont :\n" + r.substring(3));
    return;
}

//--------------------//

// ------------------ //
// --- Exercice 3 --- //
// ------------------ //

//--------------------//

var bouton8c = document.getElementById("Id_btn8c");
bouton8c.addEventListener("click",moyenne);

function moyenne() {
    var n = Number;
    var i = 1;
    var s = 0;
    var m;

    while (n !== 0) {
        n = window.prompt("Saisissez le nombre " + i + " :\nPour arrêter la saisie, saisissez la valeur 0");
        if (n == 0) {
            --i;
            break;
        }
        if (n==null || isNaN(n)) {
            window.alert("Vous avez annulé la saisie");
            return;
        }
        n = parseInt(n);
        s += n;
        console.log("Nombre n°" + i + " : " + n);
        ++i;
    }
    m = s / i;
    return window.alert("La somme des " + i + " nombres = " + s + "\nLa moyenne des " + i + " nombres = " + m);
}


//--------------------//

// ------------------ //
// --- Exercice 4 --- //
// ------------------ //

//--------------------//

var bouton8d = document.getElementById("Id_btn8d");
bouton8d.addEventListener("click",multiples1);

// --- Solution 1 --- //

function multiples1() {
    var x = window.prompt("Entrez un nombre pour connaitre sa table de multiplication :");
        if (x==null || isNaN(x)) {
            window.alert("Annulé");
            return;
        }
    var n = window.prompt("Entrez un nombre pour savoir jusqu'à combien aller :");
        if (n==null || isNaN(n)) {
            window.alert("Annulé");
            return;
        }
    var s = "";

    for (n; n>0; --n){
        var r = n * x;
        s += x + " x " + n + " = " + r + "\n";
        console.log(x + " x " + n + " = " + r);
    }
    return window.alert(s);
}

// --- Solution 2 --- //

function multiples2() {
    var x = window.prompt("Entrez un nombre :");
    var n = window.prompt("Entrez un nombre :");
    var t = [];

    if (n==(null||"") || x==(null||"")){
        return;
    }
    
    for (n; n>0; --n){
        var r = n * x;
            console.log(n + " x " + x + " = " + r);
        t.push(n + " x " + x + " = " + r + "\n");
            console.log(t);
    }
    return window.alert(t);
}

//--------------------//

// ------------------ //
// --- Exercice 5 --- //
// ------------------ //

//--------------------//

var bouton8e = document.getElementById("Id_btn8e");
bouton8e.addEventListener("click",voyelles);

function voyelles() {
    var text = window.prompt("Entrez un texte :");
    let v = text.match(/[aeiouy]/gi);

    if (v) {
        return window.alert(`Ce texte contient ${v.length} voyelles`);
    } 
    else {
        return window.alert("Ce texte contient ne contient pas de voyelle");
    }
}