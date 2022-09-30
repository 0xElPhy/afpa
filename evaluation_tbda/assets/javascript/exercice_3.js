var bouton3 = document.getElementById("Id_btn3");
bouton3.addEventListener("click",function() {

    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var p = window.prompt(`Choisissez un prénom parmi la liste :\n${tab}.`).toLowerCase();

    if (p==null || p==""){
        return;
    }

    const Prénom = p.charAt(0).toUpperCase() + p.slice(1);
    console.log(Prénom);

    for (i=0; i<tab.length; i++){
        if (Prénom==tab[i]) {
            tab.splice(i, 1);
            tab.push("");
            console.log(tab);
            window.alert(`Le prénom "${Prénom}" a été trouvé et retiré de la liste!\nEt la dernière case est mise à blanc.\n${tab}`);
            return true;
        }
    }
    window.alert(`Le prénom "${Prénom}" n'a pas été trouvé`);
    return false;
});