//--------------------//

// ------------------ //
// --- Exercice 1 --- //
// ------------------ //

//--------------------//

var bouton15a = document.getElementById("Id_btn15a");
bouton15a.addEventListener("click",function()

{
    window.alert(`Vous avez saisi : ${document.getElementById("textBox1").value}`);
    return document.getElementById("textBox1").value = ``;
});

//--------------------//

// ------------------ //
// --- Exercice 2 --- //
// ------------------ //

//--------------------//

var random = randomNumber();

function randomNumber() {
    var random = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(`Numéro Aléatoire : ${random}`);
    //randomNumber();
    return random;
}

var input = document.getElementById("textBox2")
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("Id_btn15b").click();
      console.log("enter");
    }
  });

function verif(random) {
    let saisie = document.getElementById("textBox2").value;
    let B = Boolean(isNaN(saisie) || saisie < 1 || saisie > 100);

    document.getElementById("textBox2").value = ``; // Supprime la valeur inscrite dans la case
    document.getElementById("textBox2").placeholder =``; // Reset placeholder

    console.log(saisie);

    if (B) {
        //window.alert(`Vous n'avez pas saisie une valeur correcte`);
        return document.getElementById("textBox2").placeholder = `Pas valide`;
    }

    if (saisie<random) {
        return document.getElementById("p15text").innerHTML = `↑↑↑ Plus grand que ${saisie} ↑↑↑`;
    }
        
    else if (saisie>random) {
        return document.getElementById("p15text").innerHTML = `↓↓↓ Plus petit que ${saisie} ↓↓↓`;
    }

    else if (saisie==random){
        document.getElementById("textBox2").placeholder = `Bravo !`;
        document.getElementById("textBox2").setAttribute("readonly","");
        document.getElementById("p15text").innerHTML = `Félicitations, c'était : ${random} !`;
        return //randomNumber();
    }
}