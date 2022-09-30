var bouton2 = document.getElementById("Id_btn2");
bouton2.addEventListener("click",function() {

    var n = window.prompt("Entrez un nombre pour afficher sa table de multiplication.");
    var r = "";
    var int = Boolean(isNaN(n) || n=="");

    if (n==null) {
        return;
    }
    else if (int) {
        do {
            n = window.prompt("Ce n'est pas un nombre.\nEntrez un nombre.");
                if (n==null) {
                    return;
                }
            int = Boolean(isNaN(n) || n=="");
        }
        while (int);
    }

    for (i=1; i<=10; i++) {
        r += `${i} x ${n} = ${i*n}\n`;
    }

    window.alert(r);
});