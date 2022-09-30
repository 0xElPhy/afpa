//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton7a = document.getElementById("Id_btn7a");
bouton7a.addEventListener("click",parité);

function parité() {
    var n = window.prompt("Entrez un nombre");
    console.log(isFinite(n));
    if (isNaN(n) || n == "") {
        do {
            n = window.prompt("Ce n'est pas un nombre, recommencez");
            if (n == null) {
                window.alert("Vous avez annulé l'action");
                return;
            }
        }
        while (isNaN(n) || n == "");
    }
    else if (n == null) {
        window.alert("Vous avez annulé l'action");
        return;
    }

    var M = Boolean(n % 2 != 0);
    if (M) {
        window.alert(n + "\xa0est un nombre impair");
    }
    else {
        window.alert(n + "\xa0est un nombre pair");
    }
}

//--------------------//

// ------------------ //
// --- Exercice 2 --- //
// ------------------ //

//--------------------//

var bouton7b = document.getElementById("Id_btn7b");
bouton7b.addEventListener("click",age);

function age() {
    var année = window.prompt("Entrez votre année de naissance (aaaa)");
    var date = new Date().getFullYear();
    var A = Boolean(isNaN(année) || année.length != 4 || date - année < 0);

    if (année == null) {
        window.alert("Vous avez annulé l'action");
        return;
    }

    if(A) {
        do {
            année = window.prompt("Ce n'est pas une année valide.\nFormat requis : aaaa\nVeuillez recommencer.");
            if (année == null) {
                window.alert("Vous avez annulé l'action");
                return;
            }
            A = Boolean(isNaN(année) || année.length != 4 || date - année < 0);
        }
        while (A===true); //B ne fonctionne pas ici
    }

    var B = Boolean(date - année < 18);
    var C = Boolean(date - année >= 110);
    
    if (B){
        window.alert("Vous avez " + (date-année) + " ans et vous êtes mineur.");
    }
    else if (C){
        window.alert("Vous avez " + (date-année) + " ans et vous êtes très probablement décédé !");
    }
    else {
        window.alert("Vous avez " + (date-année) + " ans et vous êtes majeur.");
    }
}

//--------------------//

// ------------------ //
// --- Exercice 3 --- //
// ------------------ //

//--------------------//

var bouton7c = document.getElementById("Id_btn7c");
bouton7c.addEventListener("click",calculette);

function calculette() {
    var n1 = window.prompt("Entrez un nombre :");
    console.log(n1);
        if (n1 == null) {
            window.alert("Vous avez annulé l'action");
            return;
        }
        else if (isNaN(n1) || n1=="") {
            window.alert("Vous n'avez pas saisi un nombre.\nVeuillez recommencer.");
            return
        }

    var n2 = window.prompt("Entrez un autre nombre :");
        if (n2 == null) {
            window.alert("Vous avez annulé l'action");
            return;
        }
        else if (isNaN(n2) || n2=="") {
            window.alert("Vous n'avez pas saisi un nombre.\nVeuillez recommencer.");
            return
        }

    var op = window.prompt("Choisissez un opérateur mathématique entre : +, -, * ou /");
    var r;

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    console.log(op);
    switch (op) {
        case "+" :
            r = n1 + n2;
            break;

        case "-" :
            r = n1 - n2;
            break;

        case "*" :
            r = n1 * n2;
            break;

        case "/" :
            if (n2 == 0) {
                window.alert("Division par 0 impossible");
                return;
            }
            r = n1 / n2;
            break;
    
        default :
            window.alert("Vous n'avez pas sélectionné un opérateur mathématique valable");
            return;
        }
        window.alert("Résultat : " + r );
}