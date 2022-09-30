//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton9a = document.getElementById("Id_btn9a");
bouton9a.addEventListener("click",appel);

function appel() {
    var x = window.prompt("Entrez un nombre :");
    if (x == null) {
        window.alert("Action annulée");
        return;
    }
    else if (isNaN(x) || x=="") {
        do {
            x = window.prompt("Ce n'est pas un nombre.\nVeuillez uniquement entrer un nombre :");
            if (x == null) {
                window.alert("Action annulée");
                return;
            }
        }
        while (isNaN(x) || x=="")
    }

    var y = window.prompt("Entrez un multiplicateur :");
    if (y == null) {
        window.alert("Action annulée");
        return;
    }
    else if (isNaN(y) || y=="") {
        do {
            y = window.prompt("Ce n'est pas un nombre.\nVeuillez uniquement entrer un nombre :");
            if (y == null) {
                window.alert("Action annulée");
                return;
            }
        }
        while (isNaN(y) || y=="")
    }

    console.log(typeof x);
    produit(x,y);
    cube(x);
    afficheImg();
}

function produit(x,y) {
    let p = x*y;
    console.log("le produit = "+p);
    let r = document.getElementById("intégrationTxt1").innerHTML =`Le produit de ${x} x ${y} est égal à ${p}.`;
    return p;
}

function cube(x) {
    let c = x*x*x;
    console.log("le cube = "+c);
    let r = document.getElementById("intégrationTxt2").innerHTML =`Le cube de ${x} est égal à ${c}.`;
    return c;
}

function afficheImg() {
    return image = document.getElementById("intégrationImg").innerHTML =`<img src='/front/dynamique/javascript/img/papillon.jpg' titre='Papillon' alt='Butterfly' width='75' height='75'>`;
}

//--------------------//

// ------------------ //
// --- Exercice 2 --- //
// ------------------ //

//--------------------//

var bouton9b = document.getElementById("Id_btn9b");
bouton9b.addEventListener("click",strtok);

function strtok(str1, str2, n) {
    var str1 = "robert;dupont;amiens;80000";
    var str2 = ";";
    var n = window.prompt("Choisissez un paramètre entre 1 et 4");
    if (n==null){
        return alert('Annulé');
    }
    else if (n<1 || n>4 || isNaN(n)) {
        return strtok();
    }
    n -= 1;
    console.log(str1.split(str2)[n]);
    return alert(`Liste : ${str1}\nValeur ${n} : ${str1.split(str2)[n]}`);
}