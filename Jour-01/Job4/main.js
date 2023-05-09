function bisextile(annee) {
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) { // Si l'année est divisible par 4 et non divisible par 100 ou si l'année est divisible par 400
        return true;
    } else {
        return false;
    }

}

console.log(bisextile(2024)); // Affichera true
console.log(bisextile(2022)); // Affichera false
