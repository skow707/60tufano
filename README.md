# Alien Transmission System 6.0

Piccola esperienza interattiva in HTML, CSS e JavaScript vanilla per il 60esimo compleanno del Prof. Tufano, pensata per funzionare su GitHub Pages senza dipendenze esterne.

## Come avviare

Apri `index.html` tramite un server locale, oppure pubblica il repository su GitHub Pages.

Esempio locale:

```bash
python3 -m http.server 8000
```

Poi visita `http://localhost:8000`.

## Come aggiungere un alieno

1. Inserisci l'avatar PNG in `assets/avatars/`.
2. Apri `data/aliens.json`.
3. Aggiungi un nuovo oggetto all'array:

```json
{
  "name": "Nome Studente",
  "avatar": "assets/avatars/nome-studente.png",
  "messages": [
    "Primo messaggio",
    "Secondo messaggio",
    "Terzo messaggio"
  ]
}
```

Non serve modificare `script.js`: il sistema carica tutti gli alieni dal JSON e sceglie un messaggio casuale tra quelli disponibili.

## Come aggiungere un avatar

Gli avatar devono essere immagini PNG, preferibilmente quadrate.

Percorso consigliato:

```text
assets/avatars/nome-studente.png
```

Poi usa lo stesso percorso nel campo `avatar` dentro `data/aliens.json`.

## Come aggiungere messaggi

Ogni alieno può avere uno o più messaggi. Aggiungi nuove stringhe nell'array `messages`:

```json
"messages": [
  "Messaggio già esistente",
  "Nuovo messaggio"
]
```

Il codice non assume che tutti abbiano lo stesso numero di messaggi.

## Come modificare le frasi del TUFALIEN

Il TUFALIEN non è dentro `data/aliens.json`.

Apri `script.js` e modifica l'array:

```js
const TUFALIEN = {
  messages: [
    "Ragazzi...",
    "Questa cosa va approfondita."
  ]
};
```

Il TUFALIEN appare con probabilità controllata circa ogni 10 click, senza comparire sempre al decimo.

## Come cambiare i suoni

Sostituisci i file dentro `assets/sounds/` mantenendo gli stessi nomi:

```text
click.wav
blip.wav
crt.wav
interference.wav
tufalien.wav
```

In alternativa, cambia i percorsi nell'oggetto `SOUND_FILES` in `script.js`.

## Come cambiare lo sfondo

Lo sfondo principale usa CSS in `style.css` e l'immagine:

```text
assets/images/star-noise.png
```

Puoi sostituire `star-noise.png` con una texture diversa, oppure modificare le regole `.space-field`, `.star-layer-one` e `.star-layer-two`.

## Struttura

```text
/
  index.html
  style.css
  script.js
  data/
    aliens.json
  assets/
    avatars/
    sounds/
    images/
    fonts/
```
