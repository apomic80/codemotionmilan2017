# Codemotion Milano 2017

Demo della sessione a Codemotion Milano 2017 sullo sviluppo di applicazioni Desktop con Angular e Electron

## Avvio applicazione

Eseguire `npm install` per scaricare le librerie necessarie al progetto e `npm run electron-build` per la generazione della distribuzione angular e l'avvio di electron. Eseguire npm run electron` se si modifica solamente il main.js.

## Creazione pacchetto di distribuzione per i diversi sistemi operativi

Eseguire `npm install -g electron-packager` per installare il pacchettizzatore di electron, eseguire `electron-packager . --platform=win32` per il pacchetto windows. Per le opzioni del packager consulatare la guida ufficiale [Electron Packager](https://github.com/electron-userland/electron-packager).
