function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) return a + b;
    return false;
}

// Exemples d'utilisation de la fonction
console.log(sommenombrespremiers(2, 5));
console.log(sommenombrespremiers(3, 4));
console.log(sommenombrespremiers(17, 19));
console.log(sommenombrespremiers(18, 19));