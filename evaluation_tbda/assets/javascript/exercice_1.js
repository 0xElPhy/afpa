var bouton1 = document.getElementById("Id_btn1");
bouton1.addEventListener("click",function() {

    var age = 0;
    var i = 1;
    var jeunes = 0;
    var moyens = 0;
    var vieux = 0;
    var tab = new Array();

    while (age < 100) {
        var age = window.prompt(`Entrez successivement des âges entre 1 et 120 ans.\nLa saisie s'arrête après la saisie d'un centenaire.\n\nAge n°${i} :`);
        var int = Boolean(isNaN(age) || age<1 || age>120);
        if (age==null){
            window.alert(`Vous avez annulé la saisie`);
            return;
        }

        else if (int){
            do {
                age = window.prompt(`Saisie incorrect.\nEntrez uniquement des valeurs numériques comprises dans l'interval : [1;120].\nAge n°${i}:`);
                
                if (age==null){
                    window.alert(`Vous avez annulé la saisie`);
                    return;
                }

                int = Boolean(isNaN(age) || age<1 || age>120);
                console.log(int);
            }
            while (int);
        }

        switch (true) {
            case age < 20 :
                jeunes++;
                break;

            case age > 40 :
                vieux++;
                break;
            
            default :
                moyens++;
                break;
        }

        console.log(`N° ${i} ; Âge : ${age}`);
        console.log(`jeunes : ${jeunes} ; moyens : ${moyens} ; vieux : ${vieux}`);
        tab.push(age);
        i++;
    }
    console.log(tab);
    window.alert(`Jeunes de moins de 20 ans : ${jeunes}\nPersonnes d'age moyen : ${moyens}\nVieux de plus de 40 ans : ${vieux}`);
    return;
});