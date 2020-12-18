"use strict";
import EventHandler from './EventHandler.js';

class main {
    constructor() {
        main.prepApp();
        new EventHandler();
        main.loadServiceWorker();
        main.handleManifest();
    }

    static prepApp() {
        document.getElementById('login').style.display = 'block';
    }


static async loadServiceWorker(){
    if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register('/ServiceWorker.js').then((registration) => {
            console.log(`BDH ServiceWorker registration succeeded. Scope is ${registration.scope}`);
        }).catch((error) => {
            console.log(`Registration failed with ${error}`);
        });
    }
}

static handleManifest(){
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        deferredPrompt = event;
        document.getElementById(`installBanner`).style.display = 'block';
        document.getElementById(`installButton`).addEventListener('click', () => {
            document.getElementById(`installBanner`).style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
        });
    });
}
}

window.addEventListener('load', () => {
    new main();
});