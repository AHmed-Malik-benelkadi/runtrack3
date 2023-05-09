function jourtravaille(date) {
    // Tableau des jours fériés de l'année 2020
    const joursFeries = [
        new Date(2021, 0, 1),
        new Date(2021, 3, 13),
        new Date(2021, 3, 12),
        new Date(2021, 4, 1),
        new Date(2021, 4, 8),
        new Date(2021, 4, 21),
        new Date(2021, 5, 1),
        new Date(2021, 6, 14),
        new Date(2021, 7, 15),
        new Date(2021, 10, 1),
        new Date(2021, 10, 11),
        new Date(2021, 11, 25),
    ];

    // Vérifie si la date est un jour férié
    for (let i = 0; i < joursFeries.length; i++) { // Parcours le tableau des jours fériés de l'année 2020 et compare la date avec chaque élément du tableau
        if (date.getTime() === joursFeries[i].getTime()) {
            console.log("Le " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un jour férié");
            return;
        }
    }

    // Vérifie si la date est un week-end
    if (date.getDay() === 0 || date.getDay() === 6) { // Si le jour de la semaine est égal à 0 (dimanche) ou 6 (samedi)
        console.log("Non, " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un week-end");
    } else {
        console.log("Oui, " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un jour travaillé");
    }
}

// Exemple d'utilisation de la fonction
jourtravaille(new Date(2020, 11, 25));
jourtravaille(new Date(2020, 11, 26));