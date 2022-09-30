var check = document.getElementById("envoie");
check.addEventListener("click", function() {

// Input Nom //

    let nom = document.getElementById("nom");
        const nomFormat = /^[a-z ,.'-]+$/i;
        let N = nomFormat.test(nom.value);
        let modLegendeN = document.getElementById("legende_nom");

        if (N==false) {
            modLegendeN.removeAttribute("hidden");
            nom.style.backgroundColor = '#F3FF93';

            if(nom.value=="") {
                modLegendeN.innerHTML = `Saisie obligatoire`;
            }
            else {
                modLegendeN.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            }
        }
        else if (N==true && nom.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeN.setAttribute("hidden","");
            nom.style.backgroundColor = '#EBF4FF';
        }
    

// Input Prénom //

    let prenom = document.getElementById("prenom");
        const prenomFormat = /^[a-z ,.'-]+$/i;
        let P = prenomFormat.test(prenom.value);
        let modLegendeP = document.getElementById("legende_prenom");

        if (P==false) {
            modLegendeP.removeAttribute("hidden");
            prenom.style.backgroundColor = '#F3FF93';

            if(prenom.value=="") {
                modLegendeP.innerHTML = `Saisie obligatoire`;
            }
            else {
                modLegendeP.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            }
        }
        else if (P==true && prenom.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeP.setAttribute("hidden","");
            prenom.style.backgroundColor = '#EBF4FF';
        }
    

// Input Sexe //

    let sexe = document.getElementsByName("sexe");
        for(i = 0; i < sexe.length; i++) {
            if(sexe[i].checked) {
                var sexeValue = sexe[i].value;
            }
        }
        let SEXE = Boolean(sexeValue!=undefined);
        let modLegendeSexe = document.getElementById("legende_sexe");

        console.log(sexeValue);
        console.log(SEXE);

            if (SEXE==false) {
                modLegendeSexe.removeAttribute("hidden");
                modLegendeSexe.innerHTML = `Saisie obligatoire`;
            }

            else if (SEXE==true) {
                modLegendeSexe.setAttribute("hidden","");
            }


// Input Code Postal // 

    let codePostal = document.getElementById("cp");
        const cpFormat = /^\d{5}$/
        let CP = cpFormat.test(codePostal.value);
        let modLegendeCP = document.getElementById("legende_cp");

        if (CP==false) {
            modLegendeCP.removeAttribute("hidden");
            codePostal.style.backgroundColor = '#F3FF93';

            if(codePostal.value=="") {
                modLegendeCP.innerHTML = `Saisie obligatoire`;
            }
            else {
                modLegendeCP.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            }
        }
        else if (CP==true && codePostal.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeCP.setAttribute("hidden","");
            codePostal.style.backgroundColor = '#EBF4FF';
        }


// Input Date // 

    let date = document.getElementById("date");
        const dateFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
        let D = dateFormat.test(date.value);
        let modLegendeD = document.getElementById("legende_date");

        if (D==false) {
            modLegendeD.removeAttribute("hidden");
            date.style.backgroundColor = '#F3FF93';

            if(date.value=="") {
                modLegendeD.innerHTML = `Saisie obligatoire`;
            }
            else {
                modLegendeD.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            }
        }
        else if (D==true && date.style.backgroundColor == 'rgb(243, 255, 147)') {
        modLegendeD.setAttribute("hidden","");
        date.style.backgroundColor = '#EBF4FF';
        }


// Input Ville //

    let ville = document.getElementById("ville");
        const villeFormat = /^[a-z ,'-]+$/i;    // RegEx format de saisie pour Ville
        let V = Boolean(villeFormat.test(ville.value) || ville.value == "");  // Vérifie si la saisie match avec la RegEx
        let modLegendeV = document.getElementById("legende_ville"); // Selectionne la balise legende pour Ville

        if (V==false) {
            modLegendeV.removeAttribute("hidden");
            modLegendeV.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            ville.style.backgroundColor = '#F3FF93';
        }
        else if (V==true && ville.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeV.setAttribute("hidden","");
            ville.style.backgroundColor = '#EBF4FF';
        }


// Input Email //

    let email = document.getElementById("email");
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let E = emailFormat.test(email.value);
        let modLegendeE = document.getElementById("legende_email");

        if (E==false) {
            modLegendeE.removeAttribute("hidden");
            email.style.backgroundColor = '#F3FF93';

            if(email.value=="") {
                modLegendeE.innerHTML = `Saisie obligatoire`;
            }
            else {
                modLegendeE.innerHTML = `Saisie non-valide : caractère(s) interdit(s)`;
            }
        }
        else if (E==true && email.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeE.setAttribute("hidden","");
            email.style.backgroundColor = '#EBF4FF';
        }


// Input Sujet //

    let sujet = document.getElementById("sujet");
        let SUJ = Boolean(sujet.value!=="");
        let modLegendeSujet = document.getElementById("legende_sujet");

        if (SUJ==false) {
            modLegendeSujet.removeAttribute("hidden");
            modLegendeSujet.innerHTML = `Vous devez sélectionner un sujet`;
            sujet.style.backgroundColor = '#F3FF93';
        }
        else if (SUJ==true ) {
            modLegendeSujet.setAttribute("hidden","");
            sujet.style.backgroundColor = '#EBF4FF';
        }




// Input Votre question //

    let question = document.getElementById("question");
        let Q = Boolean(question.value!=="");
        let modLegendeQ = document.getElementById("legende_question");

        if (Q==false) {
            modLegendeQ.removeAttribute("hidden");
            modLegendeQ.innerHTML = `Saisie obligatoire`;
            question.style.backgroundColor = '#F3FF93';
        }
        else if (Q==true && question.style.backgroundColor == 'rgb(243, 255, 147)') {
            modLegendeQ.setAttribute("hidden","");
            question.style.backgroundColor = '#EBF4FF';
        }

    


// Input J'accepte //

    let accepter = document.getElementById("accepte");
        let ACC = Boolean(accepter.checked);
        console.log(ACC);
        let modLegendeAccepter = document.getElementById("legende_accepte");

        if (ACC==false) {
            modLegendeAccepter.removeAttribute("hidden");
            modLegendeAccepter.innerHTML = `Vous devez accepter le traitement du formulaire`;
        }
        else if (ACC==true) {
            modLegendeAccepter.setAttribute("hidden","");
        }

        console.log(sexe.value);
        console.log(sujet.value);
        console.log(accepter.value);

//Input Envoyer le formulaire //

    let form = document.getElementById("formulaire_contact");

    console.log(N && P && SEXE && D && CP && V && E && SUJ && Q && ACC);

    if (N && P && SEXE && D && CP && V && E && SUJ && Q) {
        form.submit();
        window.alert("Formulaire envoyé");
        return true;
    }
    else {
        //window.alert("Erreur formulaire.\nVeuillez corriger les champs en jaune");
        return false;
    }
});