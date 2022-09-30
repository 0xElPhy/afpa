//window.onload = ("load", function() { -> automatisation du script au chargement page HTML
//    alert("Page chargé")
// });
//
// information(); --> automatisation du script au chargement page HTML

var bouton5 = document.getElementById("Id_btn5");
bouton5.addEventListener("click",information);

function information() {
    var nom = window.prompt("Veuillez saisir votre Nom");
    //console.log(nom.length);
    if (nom == null) {
        window.alert("Vous avez annulé l'action");
        return;
    }
    else if (nom.length <= 1 || !isNaN(nom)) {
        do {
            nom = window.prompt("Ceci n'est pas un Nom correct.\nRecommencez :");
            if (nom == null) {
                window.alert("Vous avez annulé l'action");
                return;
            }
        }
        while (nom.length <= 1 || !isNaN(nom));
    }

    var prénom = window.prompt("Veuillez saisir votre Prénom");
    if (prénom == null) {
        window.alert("Vous avez annulé l'action");
        return;
    }
    else if (prénom.length <= 1 || !isNaN(prénom)) {
        do {
            prénom = window.prompt("Ceci n'est pas un Prénom correct.\nRecommencez :");
            if (prénom == null) {
                window.alert("Vous avez annulé l'action");
                return;
            }
        }
        while (prénom.length <= 1 || !isNaN(prénom));
    }

    var sexe = window.confirm("Êtes vous un homme ?");
    if (sexe == true) {
        window.alert("Bonjour Monsieur "+ nom.toUpperCase() + '\xa0' + prénom +"\nBienvenue sur notre site internet");
    }
    else {
        window.alert("Bonjour Madame "+ nom.toUpperCase() + '\xa0' + prénom +"\nBienvenue sur notre site internet");
    }
}