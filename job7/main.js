const

function jourdetravaille(date) {
    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log("Non, " + date + " est un jour de weekend");
    }
    else {
        console.log("Oui, " + date + " est un jour de travail");
    }


}
jourdetravaille(new Date(2020, 11, 25));