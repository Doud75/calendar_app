// const planning = require("./bibli.json")
// console.log(planning.may7.nom);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }

installBtn = document.querySelector("#button")
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.addEventListener('click', async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the prompt');
        }
        deferredPrompt = null;
    });
});