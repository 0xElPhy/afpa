var bouton4 = document.getElementById("Id_btn4");
bouton4.addEventListener("click",function() {

    var PU = window.prompt("Veuillez entrer le prix du produit :"); // Prix Unitaire
        if (PU==null) {
            return;
        }
        else if (isNaN(PU) || PU=="" || PU<0) {
            do {
                PU = window.prompt("Pas une valeur correcte.\nVeuillez entrer le prix du produit :");
                if (PU==null) {
                    return;
                }
            }
            while(isNaN(PU) || PU=="" || PU<0);
        }

    var QTECOM = window.prompt("Veuillez entrer la quantité commandée :"); // Quantité Commandée
        if (QTECOM==null) {
            return;
        }
        else if (isNaN(QTECOM) || QTECOM==""|| QTECOM<0) {
            do {
                QTECOM = window.prompt("Ce n'est pas une valeur correcte.\nVeuillez entrer la quantité commandée :");
                if (QTECOM==null) {
                    return;
                }
            }
            while(isNaN(QTECOM) || QTECOM=="" || QTECOM<0);
        }
    
    var TOT = (PU * QTECOM).toFixed(2);;  // Total prix * quantité
    console.log(`Total : ${TOT}`)

    var REM;        // Remise
    var valRemise;  // Valeur de la remise
    var txtRemise;  // Texte de la remise

    var PORT;       // Frais de port
    var valPort;    // Valeur du frais de port
    var txtPort;    // Texte du frais de port

    var PAP;        // Prix à payer

    //                     //
    // CALCUL DE LA REMISE //
    //                     //

    var PRCTG_CINQ= Boolean(TOT>=100 && TOT<=200); // CONDITION REMISE 5%
    var PRCTG_DIX= Boolean(TOT>200);             // CONDITION REMISE 10%

    switch (true) {
        case PRCTG_CINQ :
            REM = 0.95; // Remise de 5%
            txtRemise = "Remise de 5%";
            break;

        case PRCTG_DIX :
            REM = 0.90; // Remise de 10%
            txtRemise = "Remise de 10%";
            break;

        default :
            REM = 1;    // Pas de remise
            txtRemise = "Pas de remise";
            break;
    }

    valRemise = (TOT * REM - TOT).toFixed(2); // Valeur de la remise

    TOT *= REM; // Total après remise
    console.log(`Remise : ${REM}`);
    console.log(`Total après remise : ${TOT}`);

    //                          //
    // CALCUL DES FRAIS DE PORT //
    //                          //

    if (TOT>500) {
        PORT = 1; // Frais de port gratuits
        txtPort = "offerts.";
        valPort = 0;

        PAP = TOT * PORT; // Prix à payer
    }

    else {
        PORT = 1.02; // Frais de port de 2%
        valPort = (TOT * PORT - TOT).toFixed(2);
        txtPort = `de 2%, soit : ${valPort}€`;

        PAP = TOT * PORT;
        if (valPort < 6) {
            txtPort = `de 2%, soit : ${valPort}€. Le minimun de 6€ s'applique.`;
            valPort = 6;
            PAP = TOT + 6; // Prix à payer
        }
    }

    PAP = PAP.toFixed(2);
    console.log(`Prix à payer ${PAP}`);
    window.alert(`${txtRemise}, soit : ${valRemise}€\nFrais de port ${txtPort}\nPrix à payer : ${PAP}€`);
});