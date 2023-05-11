    // récupération du footer et du body
    const footer = document.querySelector('footer');
    const body = document.body;

    // calcul de la hauteur de la page
    const height = Math.max(body.scrollHeight, body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight) - window.innerHeight;

    // fonction qui met à jour la couleur du footer en fonction du pourcentage de scrolling
    function updateFooterColor() {
    const percentage = Math.floor((window.scrollY / height) * 100);
    footer.style.backgroundColor = `hsl(${percentage}, 100%, 50%)`;
}

    // événement de scrolling
    window.addEventListener('scroll', () => {
    body.classList.add('scrolling');
    updateFooterColor();

    // enlever la classe "scrolling" après 500ms pour éviter le lag
    clearTimeout(body.data);
    body.data = setTimeout(() => {
    body.classList.remove('scrolling');
}, 500);
});