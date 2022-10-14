const calcultorBtn = document.getElementById("calculator"); // cible mon bouton d'action

calcultorBtn.addEventListener("click", function() {
    let firstValue = document.getElementById("number1").value;
    let secondValue = document.getElementById("number2").value;
    const operator = document.getElementById("operator").value;
    
    if (firstValue === "" || secondValue === "") { // si nos valeurs number 1 et number 2 sont vides 
        return // on sort de la fonction
    }

    firstValue = parseInt(firstValue)
    secondValue = parseInt(secondValue)
    
    const resultArea = document.getElementById("result") // zone cible pour afficher mon résultat
    
    let result // je crée cette variable qui va me permettre de stocker le resultat de l'opération
    resultArea.classList.remove("error") // si une classe error est présente sur le div resultArea je la suprrime 
    
    // selon ce que j'ai sélectionné dans mon select je fais l'opération associée
    switch (operator) {
        case "+":
            result = firstValue + secondValue;
            break; // permet de sortir du switch quand la condition est satisfaite
        case "-":
            result = firstValue - secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "/":
            if (secondValue === 0) { // division par zéro impossible
                result = "Division par zéro impossible" // result devient ici un message d'erreur
                resultArea.classList.add("error") // j'ajoute au div qui affichera le résultat une class error pour styliser mon message d'erreur
            } else {
                result = firstValue / secondValue;
            }
            break;
        default: 
            result = "Invalid operator";
            break;
    }

    resultArea.innerHTML = result; // j'écris mon resultat (result) dans mon div resultArea
})