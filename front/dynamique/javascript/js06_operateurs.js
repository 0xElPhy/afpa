var a = "100";
var b = 100;
var c = 1;
var c = c.toFixed(2);
var d = Boolean(true);

var bouton6 = document.getElementById("Id_btn6");
bouton6.addEventListener("click",operateurs);

function operateurs() {
    window.alert(
        "Ceci est une chaine de caractères : " + a
        + "\nDécrémentation de b : " + --b
        + "\nAjouter à c la valeur de a : " + (c += a)
        + "\nInverser la valeur de d : " + !d
    );
    console.log("Ceci est une chaine de caractères : " + a);
    console.log("Décrémentation de b : " + b);
    console.log("Ajouter à c la valeur de a : " + (c += a));
    console.log("Inverser la valeur de d : " + !d);
    return;
}