
document.addEventListener('keydown',
    function(event) {
    var keylogger = document.getElementById("keylogger");
    var letter = event.key.toLowerCase();
    if (/^[a-z]$/.test(letter)) { // Vérifie que la lettre est dans la plage a-z
    if (document.activeElement == keylogger) { // Vérifie que le focus est dans le textarea
    keylogger.value += letter + letter; // Ajoute la lettre deux fois
} else {
    keylogger.value += letter; // Ajoute la lettre une fois
}
}
}
