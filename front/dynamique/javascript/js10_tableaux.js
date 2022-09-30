//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton10a = document.getElementById("Id_btn10a");
bouton10a.addEventListener("click",tab);

function tab() {
    let n = window.prompt(`Entrez le nombre de colonnes du tableau`);
    let tab = [];
    if (n==null) {
        return alert(`Annulé`);
    }
    else if (isNaN(n) || n=="") {
        window.alert("Vous n'avez pas saisi un nombre.\nVeuillez recommencez.");
        return tab();
    }
    for (i=0; i<n; i++) {
        let d = window.prompt(`Entrez les données à intégrer au tableau.\n${n-i} donnée(s) à saisir restantes :`);
        if (d==null) {
            return alert(`Annulé`);
        }
        console.log(`Colonne n°${i}, Donnée : ${d}`);
        tab.push(d);
    }
    console.log(tab.length);
    return window.alert(`Données du tableau : ${tab}`);
}

//--------------------//

// ------------------ //
// --- Exercice 2 --- //
// ------------------ //

//--------------------//

var bouton10b = document.getElementById("Id_btn10b");
bouton10b.addEventListener("click",getInteger);

function getInteger() {
    var iTab = initTab();
    var sTab = saisieTab(iTab);
    afficheTab(sTab);
    rechercheTab(sTab);
    infoTab(sTab);
}

function initTab() {
    let taille = window.prompt(`Saisir la taille du tableau`);
    if (taille==null) {
        return window.alert(`Annulé`);
    }
    else if (isNaN(taille) || taille=="") {
        return initTab();
    }
    let tab = new Array(parseInt(taille));
    console.log(tab);
    return tab;
}

function saisieTab(iTab) {
    for (i=0; i<iTab.length; i++) {
        console.log(`i = ${i}, taille tableau = ${iTab.length}\n${iTab}`);
        let saisie = window.prompt(`Entrez les nombres à intégrer au tableau\n(${iTab.length-i} donnée(s) à saisir restantes) :`);
        if (saisie==null ) {
            return alert(`Annulé`);
        }
        else if (isNaN(saisie) || saisie=="") {
            do {
                saisie = window.prompt(`Attention saisie non-conforme, entrez uniquement des valeurs numériques.\n(${iTab.length-i} donnée(s) à saisir restantes)`);
                if (saisie==null ) {
                    return alert(`Annulé`);
                }
            }
            while(isNaN(saisie) || saisie=="");
        }
        console.log(`Colonne n°${i}, Donnée : ${saisie}`);
        iTab[i] = parseInt(saisie);
    }
    console.log(iTab);
    return iTab;
}

function afficheTab(sTab) {
    document.getElementById("iciTab2").innerHTML = `Tableau :\n${sTab}`;
    document.getElementById("iciTab2").removeAttribute("hidden");
    return;
}

function rechercheTab(sTab) {
    let p = window.prompt(`Choisissez le rang d'un paramètre à afficher entre 1 et ${sTab.length}`);
    if (p==null){
        return alert('Annulé');
    }
    else if (p<1|| p>sTab.length || isNaN(p)) {
        return rechercheTab(sTab);
    }
    p -= 1;
    console.log(sTab[p]);
    return alert(sTab[p]);
}

function infoTab(sTab) {
    var col;
    var som = 0;
    var max = 0;
    for (i=0; i<sTab.length; i++) {
        if (max<sTab[i]){
            max = sTab[i];
            col = i;
        }
        som += sTab[i];
    }
    var moy = som/sTab.length;
    console.log(`La moyenne des postes du tableau est : ${moy}\nLa valeur maximale du tableau est : ${max}\nElle se situe dans la colonne : ${col+1}`);
    return window.alert(`La moyenne des postes du tableau est : ${moy}\nLa valeur maximale du tableau est : ${max}\nElle se situe dans la colonne : ${col+1}`);
}

//--------------------//

// ------------------ //
// --- Exercice 3 --- //
// ------------------ //

//--------------------//

var bouton10c = document.getElementById("Id_btn10c");
bouton10c.addEventListener("click",triBulle);

function triBulle(tab3) {
    var iTab = initTab();
    var tab3 = saisieTab(iTab);
    
    let mod=false;
    do {
        mod=false;
        for (i=0; i<tab3.length-1; i++) {
            if (tab3[i]>tab3[i+1]) {
                var chg = tab3[i+1];
                tab3[i+1] = tab3[i];
                tab3[i] = chg;
                mod = true;
                console.log(mod);
            }
        }
        console.log(tab3);
    }
    while (mod===true);
    //console.log(mod);
    console.log(`Tableau trié : ${tab3}`);
    return window.alert(`Tableau trié : ${tab3}`);;
}