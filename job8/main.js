function sommenombrespremiers(a, b) {
    // Fonction qui vérifie si un nombre est premier
    function estPremier(n) {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Vérifie si a et b sont des nombres premiers, puis calcule leur somme
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemples d'utilisation de la fonction
console.log(sommenombrespremiers(2, 5)); // 7
console.log(sommenombrespremiers(3, 4)); // false
console.log(sommenombrespremiers(17, 19)); // 36
console.log(sommenombrespremiers(18, 19)); // false