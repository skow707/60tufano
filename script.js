const DATA_URL = "data/aliens.json";

const BOOT_TEXT = `Archivio Galattico NTA

Anno terrestre: 2026
Destinatario: Prof. Tufano
Età rilevata: 60 anni

Missione:
Intercettare le trasmissioni provenienti dalle civiltà extraterrestri del corso NTA.
Ogni frequenza contiene un messaggio destinato al Professore.
Premi il pulsante per iniziare.`;

const TUFALIEN = {
  name: "TUFALIEN",
  avatar: "img/tufalien.png",
  messages: [
    "Muoviti, sùrice, ca 'a gatta corre!",
    "Dicette 'o pappice vicino a 'o noce: Ramm' 'o tiemp' ca te spertose",
    "Chi dorme piscia a lietto e dice ca ha sudato.",
    "Chi strapazza 'o faticà, strapazza 'a vita.",
    "Fatica e stenta per arrivare a i' 'eccellenza."
  ]
};

const PREVIEW_ALIENS = [
  {
    "name": "Fede",
    "avatar": "img/fede.png",
    "messages": [
      "Tanti auguri prof Tufano!🎉Mi auguro che la sua RAM interiore rimanga sempre libera dalle convenzioni sociali terrestri e piena di idee strambe.",
      "Il mio consiglio su cosa NON fare nei prossimi anni è sicuramente diventare noioso 😴... ma tanto sappiamo che per lei questo è matematicamente impossibile! Gli alieni di NTA fanno il tifo per lei! 👽❤️."
    ]
  },
  {
    "name": "Nadia",
    "avatar": "img/nadia.png",
    "messages": [
      "Grazie prof per averci insegnato in un modo che ci permette di applicare concretamente le competenze nella vita di tutti i giorni! Ricorderò sicuramente alcuni argomenti trattati in classe, anche quelli che potrebbero non essere di natura accademica per il resto della mia vita. Le auguro un felicissimo sessantesimo compleanno e spero che gli anni a venire siano pieni solo di pace e gioia!"
    ]
  },
  {
    "name": "borzi",
    "avatar": "img/borzi.png",
    "messages": [
      "Restare un po' Peter Pan aiuta nella vita così complessa ma meravigliosa, ti auguro di volare sempre🥂."
    ]
  },
  {
    "name": "Sara",
    "avatar": "img/sara.png",
    "messages": [
      "Tanti auguri prof, continui ad essere la prova vivente che la normalità è sopravvalutata."
    ]
  },
  {
    "name": "Davido",
    "avatar": "img/davido.png",
    "messages": [
      "come si dice a Napoli: buon compleanno!",
      "spinello?"
    ]
  },
  {
    "name": "matilde",
    "avatar": "img/matilde.png",
    "messages": [
      "Abarc non esiste. È tutto nascosto nel rumorio del bla bla. Rilassati."
    ]
  },
  {
    "name": "Pina",
    "avatar": "img/Pina.png",
    "messages": [
      "Buon compleanno, Giacomo! 🥳 Ti auguro di conservare sempre quella curiosità che ti fa guardare le cose da prospettive diverse. È contagiosa, nel senso migliore. E se qualcuno ti dice che sei un po' fuori dal mondo... è vero ed è anche per questo che tvb assaj 🫂"
    ]
  },
  {
    "name": "Paola",
    "avatar": "img/paola.jpg",
    "messages": [
      "Messaggio intercettato dal Settore NTA-404. Il soggetto Giacomo Tufano è autorizzato a compiere un’ulteriore orbita attorno al Sole. \n I parametri di WFMU, strisce a fumetti e livello di negroni nel sangue risultano ancora ben oltre i limiti consentiti! Consigli per il futuro: limita i casini da risolvere, ma resta sempre l’uomo che sa aggiustare tutte le cose.\n Missione autorizzata! Buona orbita."
    ]
  },
  {
    "name": "Francesca",
    "avatar": "img/francesca.png",
    "messages": [
      "Tantissimi auguri di buon compleanno! Cosa augurarti per il futuro? Novità, Telepatie, Artisticità 🤪👾"
    ]
  },
  {
    "name": "Monica",
    "avatar": "img/monica.png",
    "messages": [
      "Sono 60 e alla medesima pagina del “manuale pratico di smarrimento” di L. Marone, ho preso un piccolo estratto: “[…] la serendipità a volte ci avvicina alla vita che sta nel mezzo, tra ciò che avevamo pianificato e l’inaspettato. Dovremo imparare a sporcare le agende con gesti inattesi, a infrangere la continuità dei discorsi con una domanda semplice, a infilarci nei pensieri degli altri non per disturbarli, ma per ricordare che esistono”. Buon compleanno Giacomo ♥️"
    ]
  },
  {
    "name": "Leon",
    "avatar": "img/leon.png",
    "messages": [
      "Mio carissimo professore, tantissimi auguri di buon compleanno!!! 🎂\n    vi auguro tanta felicità, tanta salute e anche tanta di pazienza per sopportare studenti difficili come me 😂voglio anche ringraziare, quando sono venuto da voi per la prima volta, mi ha davvero messo sulla strada giusta. se oggi sono arrivato fin qui, è anche grazie a lei. È un insegnante eccezionale e spero con tutto il cuore che continui a insegnare ancora per tanti anni, persone come lei danno stima di andare avanti a suoi studenti vi auguro tutto il bene del mondo ,e sempre restare così umano ,buono e spiritoso. Grazie di cuore per tutto quello che ha fatto per me. Buon compleanno, professore! vi voglio tanto bene,con abbraccio Leon ❤️."
    ]
  },
  {
    "name": "Davide",
    "avatar": "img/davide.png",
    "messages": [
      "Caro Giacomo in un giorno come questo, pieno di pensieri, di sogni, di speranza; ricordarti di non dimenticare ciò che vuoi tenere a mente per non scordarti che la memoria è importante solo se il ricordo permane nelle cellule cerebrali."
    ]
  },
  {
    "name": "Peppe",
    "avatar": "img/peppe.png",
    "messages": [
      "Buon 60° compleanno, Prof! Congratulazioni per il rilascio della versione 6.0! sei ancora il progetto open source più fuori dagli schemi che conosco! Grazie per averci fatto sopravvivere a GitHub, per averci fatto litigare con SwiftUI, esplorare HTML e anche scoprire che Blowfish può essere più simpatico di quanto sembri.Continua a dimostrarci che la curiosità non va mai in pensione... si aggiorna soltanto. Happy Birthday, Prof! E ricorda: i 60 sono solo un numero... come una variabile, basta dichiararla nel modo giusto!"
    ]
  },
  {
    "name": "Annalara",
    "avatar": "img/annalara.png",
    "messages": [
      "Per te è un 60 e Lode!"
    ]
  },
  {
    "name": "Sibora",
    "avatar": "img/sibora.png",
    "messages": [
      "Roses are red\n    Violets are blue\n    L'accademia non funziona\n    Solo perché ci sei tu."
    ]
  },
  {
    "name": "Antonio",
    "avatar": "img/antonio.png",
    "messages": [
      "Secondo me manca un “;” ."
    ]
  },
  {
    "name": "Veronica",
    "avatar": "img/veronica.png",
    "messages": [
      "Se qualcosa può andare storto lo farà, quindi tanto vale non preoccuparsi affatto!",
      "Secondo una rarissima estensione della legge di Murphy, il bug più assurdo comparirà sempre cinque minuti prima della consegna oppure quando un UFO sorvola il laboratorio. In entrambi i casi: salva tutto, riavvia e apri una birra.",
      "package main\n\n    func main() {\n        for {\n            Debug()\n            TrainAliens()\n            DrinkBeer()\n            Laugh()\n        }\n    }\n    Commit: 60 Tuf. Push."
    ]
  },
  {
    "name": "giacomo",
    "avatar": "img/giacomo.png",
    "messages": [
      "Caro Giacomo, averti incontrato quattro anni fa e avere avuto, da allora, il privilegio di ascoltare i tuoi pensieri, i tuoi giudizi e il tuo modo di guardare il mondo è stato per me una straordinaria occasione di arricchimento intellettuale e, direi, persino filosofico. Di te ammiro profondamente la coerenza morale, l’onestà intellettuale e quella saldezza adamantina dei valori che ti consente di attraversare le cose senza mai tradire te stesso. Per i tuoi sessant’anni ti auguro, innanzitutto, di non perdere mai la tua ironia: un’ironia che può nascere soltanto da un’intelligenza affilatissima, capace di comprendere la realtà e, nello stesso tempo, di prenderne le giuste distanze. Ti auguro di non dover più soffrire per gli affanni e le incombenze del lavoro quotidiano e di poter sorvolare, dall’alto della tua superiorità morale, sulle quisquilie con le quali qualcuno vorrebbe costringerti a confrontarti. Ti auguro di ridere molto: con la tua famiglia, con gli amici, con i tuoi studenti e con tutte le persone che hanno la fortuna di condividere con te un tratto di strada. Hai una risata particolarmente simpatica, sai? Soprattutto, ti auguro di rimanere esattamente la persona che sei già, per altri mille anni almeno. Buon sessantesimo compleanno."
    ]
  },
  {
    "name": "rori",
    "avatar": "img/rori.jpeg",
    "messages": [
      "Tanti auguri! Grazie per essere una di quelle eccezioni che migliorano il sistema invece di adattarsi a lui! Un algoritmo vivente che integra sapere, ironia e sensibilità e che nonostante tutto non manda mai il programma in crash.",
      "Dicono che chi nasce nell’anno del Cavallo sia instancabile e con un grande senso dell’umorismo. La tradizione cinese non ha considerato anche che trova sempre una soluzione … e poi riesce pure a farci una battuta!",
      "Continui a fare la cosa più rivoluzionaria di tutte, condividere non solo conoscenza ma anche umanità… una cosa ormai rara e prima o poi qualcuno proverà a trasformarla in un abbonamento 😉 Doctorow non approverebbe ❤️."
    ]
  },
  {
    "name": "Alessandro",
    "avatar": "img/alessandro.png",
    "messages": [
      "Già come mago silvano,\n unisce il codice al gesto umano.\n Là n.T.i., qui N.T.A.: chi osserva impara,\n chi crea prepara;\nsi mettono in libertà\n e tu fanno il resto con mano."
    ]
  },
  {
    "name": "Zappone",
    "avatar": "img/zappone.png",
    "messages": [
      "Per Tufano, brindisi al volo con il calice in mano: Allerta caldo, fuori si schiatta. Prendo un bianco dal frigo, dentro lo studio che è una stufa. Brindisi faccio al Tufa. 🥂"
    ]
  },
  {
    "name": "Sara B.",
    "avatar": "img/sarab.png",
    "messages": [
      "Trasmissione intergalattica in arrivo... 👾 Tanti auguri di buon compleanno! Da oggi ha ufficialmente raggiunto il livello +1 di esperienza. \n Skill sbloccata: sopravvivere con stile 😎 \n Dopo aver analizzato l'intero pianeta Terra, il Consiglio Galattico è giunto alla conclusione che è tra gli umani più interessanti in circolazione. Che il suo upgrade prosegua senza bug e ancora tantissimi auguri! 🚀😘"
    ]
  },
  {
    "name": "Aly",
    "avatar": "img/aly.png",
    "messages": [
      "L'età è solo un numero, buon compleanno! 🥳"
    ]
  },
  {
    "name": "Ila",
    "avatar": "img/ila.png",
    "messages": [
      "Auguri al prof con il codino più bello!"
    ]
  },
  {
    "name": "Aldo",
    "avatar": "img/aldo.png",
    "messages": [
      "⭐⭐⭐⭐⭐ \n «Software solido di rara qualità: gira da anni senza crash gravi e regge carichi di studenti rincoglioniti. Interfaccia vintage, ma ormai è un’estetica. Forte nel debug, è l unico abonamento che farei a vita🫶🏻>>"
    ]
  }
];

const SOUND_FILES = {
  alienzip: "alienzip.mp3",
  click: "assets/sounds/click.wav",
  blip: "assets/sounds/blip.wav",
  crt: "assets/sounds/crt.wav",
  interference: "assets/sounds/interference.wav",
  tufalien: "assets/sounds/tufalien.wav"
};

const SOUND_VOLUME = {
  alienzip: 0.24,
  click: 0.35,
  blip: 0.28,
  crt: 0.13,
  interference: 0.32,
  tufalien: 0.42
};

const state = {
  aliens: [],
  deck: [],
  readMessageIndexes: new Map(),
  lastMessageIndexes: new Map(),
  lastAlienName: "",
  currentSignal: 0,
  clicksSinceTufalien: 0,
  audioAuthorized: false,
  bootTyped: false,
  bootTypingStarted: false,
  dataReady: false,
  started: false,
  audioUnlocked: false,
  homeAudioStarted: false,
  homeAudioRetryTimer: 0,
  tufalienTimer: 0,
  closingTufalien: false,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

const elements = {
  body: document.body,
  crtScreen: document.querySelector("#crtScreen"),
  bootContent: document.querySelector("#bootContent"),
  bootScene: document.querySelector("#bootScene"),
  transmissionScene: document.querySelector("#transmissionScene"),
  bootCopy: document.querySelector("#bootCopy"),
  desktopViewport: document.querySelector("#desktopViewport"),
  homeAlienAudio: document.querySelector("#homeAlienAudio"),
  audioPermissionPanel: document.querySelector("#audioPermissionPanel"),
  audioPermissionButton: document.querySelector("#audioPermissionButton"),
  startButton: document.querySelector("#startButton"),
  nextButton: document.querySelector("#nextButton"),
  closeTransmission: document.querySelector("#closeTransmission"),
  mainWindow: document.querySelector("#mainWindow"),
  alienCard: document.querySelector(".alien-card"),
  alienAvatar: document.querySelector("#alienAvatar"),
  alienName: document.querySelector("#alienName"),
  alienMessage: document.querySelector("#alienMessage"),
  signalLabel: document.querySelector("#signalLabel"),
  frequencyLabel: document.querySelector("#frequencyLabel"),
  tufalienOverlay: document.querySelector("#tufalienOverlay"),
  tufalienWindow: document.querySelector("#tufalienWindow"),
  tufalienAvatar: document.querySelector("#tufalienAvatar"),
  tufalienMessage: document.querySelector("#tufalienMessage"),
  closeTufalien: document.querySelector("#closeTufalien"),
  particles: document.querySelector("[data-particles]"),
  ships: document.querySelector("[data-ships]")
};

const audioClips = new Map();

document.addEventListener("DOMContentLoaded", init);

function init() {
  prepareAudio();
  createAmbientParticles();
  createShips();
  bindEvents();
  loadAliens();
}

function bindEvents() {
  elements.startButton.addEventListener("click", startExperience);
  elements.nextButton.addEventListener("click", requestTransmission);
  elements.closeTransmission.addEventListener("click", returnHome);
  elements.closeTufalien.addEventListener("click", dismissTufalien);
  elements.audioPermissionButton.addEventListener("click", authorizeHomeAudio);

  elements.tufalienOverlay.addEventListener("click", (event) => {
    if (event.target === elements.tufalienOverlay || elements.tufalienWindow.contains(event.target)) {
      dismissTufalien();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.tufalienOverlay.hidden) {
      dismissTufalien();
      return;
    }

    if (!state.started || !elements.tufalienOverlay.hidden) {
      return;
    }

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      requestTransmission();
    }
  });
}

async function loadAliens() {
  let aliens = PREVIEW_ALIENS;

  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Archivio non raggiungibile: ${response.status}`);
    }

    aliens = await response.json();
  } catch (error) {
    console.info("Archivio JSON non caricato, uso i messaggi di anteprima incorporati.", error);
  }

  try {
    state.aliens = validateAliens(aliens);
    resetTransmissionQueues();
    state.dataReady = true;
    updateStartAvailability();
  } catch (error) {
    elements.bootCopy.textContent = `${BOOT_TEXT}\n\nERRORE DI SISTEMA:\n${error.message}`;
    elements.startButton.textContent = "ARCHIVIO NON DISPONIBILE";
    elements.startButton.disabled = true;
  }
}

function validateAliens(aliens) {
  if (!Array.isArray(aliens)) {
    throw new Error("data/aliens.json deve contenere un array.");
  }

  const validAliens = aliens.filter((alien) => {
    return (
      alien &&
      typeof alien.name === "string" &&
      alien.name.trim() &&
      typeof alien.avatar === "string" &&
      Array.isArray(alien.messages) &&
      alien.messages.some((message) => typeof message === "string" && message.trim())
    );
  });

  if (!validAliens.length) {
    throw new Error("Nessuna trasmissione aliena valida trovata.");
  }

  return validAliens.map((alien) => ({
    name: alien.name.trim(),
    avatar: alien.avatar.trim(),
    messages: alien.messages
      .filter((message) => typeof message === "string" && message.trim())
      .map((message) => message.trim())
  }));
}

function typeBootText() {
  if (state.reducedMotion) {
    elements.bootCopy.textContent = BOOT_TEXT;
    state.bootTyped = true;
    updateStartAvailability();
    return;
  }

  let index = 0;
  const typingSpeed = 18;

  function typeCharacter() {
    elements.bootCopy.textContent = BOOT_TEXT.slice(0, index);
    index += 1;

    if (index <= BOOT_TEXT.length) {
      window.setTimeout(typeCharacter, typingSpeed);
      return;
    }

    state.bootTyped = true;
    updateStartAvailability();
  }

  typeCharacter();
}

function updateStartAvailability() {
  if (!state.dataReady || !state.bootTyped) {
    return;
  }

  elements.startButton.disabled = false;
  elements.startButton.textContent = "INIZIA LA TRASMISSIONE";
}

function startExperience() {
  if (!state.dataReady) {
    return;
  }

  unlockAudio();
  pauseSound("alienzip");
  state.homeAudioStarted = false;
  stopHomeAudioRetry();
  playSound("click");
  playCrtHum();
  state.started = true;
  window.scrollTo(0, 0);
  resetDesktopScroll();
  elements.body.classList.add("is-starting");
  flashScreen();

  window.setTimeout(() => {
    elements.bootScene.classList.remove("is-active");
    elements.bootScene.setAttribute("aria-hidden", "true");
    elements.transmissionScene.classList.add("is-active");
    elements.transmissionScene.setAttribute("aria-hidden", "false");
    showNormalTransmission();
  }, state.reducedMotion ? 0 : 520);
}

function returnHome() {
  if (!state.started) {
    return;
  }

  unlockAudio();
  playSound("click");
  hideTufalienOverlay();
  pauseSound("crt");
  state.started = false;
  state.currentSignal = 0;
  state.clicksSinceTufalien = 0;
  state.deck = shuffleAliens(state.aliens);
  elements.body.classList.remove("is-starting", "tufalien-mode");
  elements.mainWindow.classList.remove("is-tuning");
  elements.transmissionScene.classList.remove("is-active");
  elements.transmissionScene.setAttribute("aria-hidden", "true");
  elements.bootScene.classList.add("is-active");
  elements.bootScene.setAttribute("aria-hidden", "false");
  resetDesktopScroll();
  flashScreen();
  startHomeAudio();
  elements.startButton.focus({ preventScroll: true });
}

function requestTransmission() {
  if (!state.started || elements.mainWindow.classList.contains("is-tuning")) {
    return;
  }

  unlockAudio();
  playSound("click");
  elements.mainWindow.classList.add("is-tuning");
  flashScreen();

  window.setTimeout(() => {
    elements.mainWindow.classList.remove("is-tuning");

    if (shouldShowTufalien()) {
      showTufalien();
      return;
    }

    showNormalTransmission();
  }, state.reducedMotion ? 0 : 390);
}

function showNormalTransmission() {
  const alien = drawAlien();
  const message = drawAlienMessage(alien);

  state.currentSignal += 1;
  state.lastAlienName = alien.name;

  elements.alienAvatar.src = alien.avatar;
  elements.alienAvatar.alt = `Avatar alieno di ${alien.name}`;
  elements.alienName.textContent = alien.name;
  elements.alienMessage.textContent = message;
  elements.alienMessage.classList.toggle("is-code", isCodeMessage(message));
  elements.signalLabel.textContent = `SIGNAL ${String(state.currentSignal).padStart(3, "0")}`;
  elements.frequencyLabel.textContent = `${createFrequency()} MHz`;

  resetDesktopScroll();
  playSound("blip");
  revealAlienCard();
}

function resetDesktopScroll() {
  scrollDesktopToTop();

  requestAnimationFrame(() => {
    scrollDesktopToTop();
    window.setTimeout(scrollDesktopToTop, 80);
  });
}

function scrollDesktopToTop() {
  if (!elements.desktopViewport) {
    return;
  }

  elements.desktopViewport.scrollTop = 0;
  elements.desktopViewport.scrollLeft = 0;
}

function drawAlien() {
  if (!state.deck.length) {
    state.deck = shuffleAliens(state.aliens, state.lastAlienName);
  }

  return state.deck.pop();
}

function drawAlienMessage(alien) {
  if (alien.messages.length === 1) {
    return alien.messages[0];
  }

  const messageIndexes = alien.messages.map((_, index) => index);
  const readIndexes = state.readMessageIndexes.get(alien.name) ?? new Set();
  let availableIndexes = messageIndexes.filter((index) => !readIndexes.has(index));

  if (!availableIndexes.length) {
    readIndexes.clear();
    availableIndexes = messageIndexes.filter((index) => index !== state.lastMessageIndexes.get(alien.name));
  }

  const messageIndex = pickRandom(availableIndexes.length ? availableIndexes : messageIndexes);
  readIndexes.add(messageIndex);
  state.readMessageIndexes.set(alien.name, readIndexes);
  state.lastMessageIndexes.set(alien.name, messageIndex);

  return alien.messages[messageIndex];
}

function resetTransmissionQueues() {
  state.deck = shuffleAliens(state.aliens);
  state.readMessageIndexes.clear();
  state.lastMessageIndexes.clear();
  state.lastAlienName = "";
}

function shuffleAliens(aliens, avoidFirstName = "") {
  const shuffled = [...aliens];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  const firstDrawIndex = shuffled.length - 1;

  if (shuffled.length > 1 && avoidFirstName && shuffled[firstDrawIndex]?.name === avoidFirstName) {
    [shuffled[firstDrawIndex], shuffled[0]] = [shuffled[0], shuffled[firstDrawIndex]];
  }

  return shuffled;
}

function shouldShowTufalien() {
  state.clicksSinceTufalien += 1;

  if (state.clicksSinceTufalien < 6) {
    return false;
  }

  const probability = Math.min(0.46, 0.1 + (state.clicksSinceTufalien - 6) * 0.045);
  const driftGuard = state.clicksSinceTufalien >= 17 && Math.random() < 0.72;
  const appears = Math.random() < probability || driftGuard;

  if (appears) {
    state.clicksSinceTufalien = 0;
  }

  return appears;
}

function showTufalien() {
  const message = pickRandom(TUFALIEN.messages);

  state.closingTufalien = false;
  elements.tufalienAvatar.src = TUFALIEN.avatar;
  elements.tufalienAvatar.alt = `Avatar ${TUFALIEN.name}`;
  elements.tufalienMessage.textContent = message;
  elements.tufalienOverlay.hidden = false;
  elements.crtScreen.classList.add("has-interference");
  elements.body.classList.add("tufalien-mode");
  playSound("interference");
  playSound("tufalien");

  requestAnimationFrame(() => {
    elements.tufalienOverlay.classList.add("is-visible");
    elements.closeTufalien.focus({ preventScroll: true });
  });

  window.clearTimeout(state.tufalienTimer);
  state.tufalienTimer = window.setTimeout(dismissTufalien, state.reducedMotion ? 1200 : 5600);
}

function hideTufalienOverlay() {
  window.clearTimeout(state.tufalienTimer);
  state.closingTufalien = false;
  elements.tufalienOverlay.classList.remove("is-visible");
  elements.tufalienOverlay.hidden = true;
  elements.crtScreen.classList.remove("has-interference");
}

function dismissTufalien() {
  if (elements.tufalienOverlay.hidden || state.closingTufalien) {
    return;
  }

  state.closingTufalien = true;
  window.clearTimeout(state.tufalienTimer);
  elements.tufalienOverlay.classList.remove("is-visible");
  elements.crtScreen.classList.remove("has-interference");
  elements.body.classList.remove("tufalien-mode");
  playSound("blip");

  window.setTimeout(() => {
    elements.tufalienOverlay.hidden = true;
    state.closingTufalien = false;
    showNormalTransmission();
    elements.nextButton.focus({ preventScroll: true });
  }, state.reducedMotion ? 0 : 230);
}

function revealAlienCard() {
  elements.alienCard.classList.remove("is-revealing");
  void elements.alienCard.offsetWidth;
  elements.alienCard.classList.add("is-revealing");
}

function flashScreen() {
  elements.crtScreen.classList.remove("is-flashing");
  void elements.crtScreen.offsetWidth;
  elements.crtScreen.classList.add("is-flashing");
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createFrequency() {
  const base = 60 + Math.random() * 39;
  return base.toFixed(1);
}

function isCodeMessage(message) {
  return /\bpackage\s+main\b|func\s+main\(\)|Commit:\s*60\s*Tuf/i.test(message);
}

function prepareAudio() {
  Object.entries(SOUND_FILES).forEach(([name, source]) => {
    const audio = name === "alienzip" && elements.homeAlienAudio
      ? elements.homeAlienAudio
      : new Audio(source);

    if (!audio.getAttribute("src")) {
      audio.setAttribute("src", source);
    }

    audio.preload = "auto";
    audio.volume = SOUND_VOLUME[name] ?? 0.3;

    if (name === "crt" || name === "alienzip") {
      audio.loop = true;
    }

    audioClips.set(name, audio);
  });
}

function unlockAudio() {
  if (state.audioUnlocked) {
    return;
  }

  state.audioUnlocked = true;
}

function unlockAudioFromHome() {
  unlockAudio();
  keepHomeAudioAlive();
}

function keepHomeAudioAlive() {
  if (!state.audioAuthorized || state.started) {
    return;
  }

  startHomeAudio();
}

function authorizeHomeAudio() {
  unlockAudio();
  markHomeAudioAuthorized();
  startHomeAudio();
}

function markHomeAudioAuthorized() {
  if (state.audioAuthorized) {
    return;
  }

  state.audioAuthorized = true;
  elements.audioPermissionPanel.classList.add("is-authorized");
  elements.audioPermissionButton.disabled = true;
  elements.audioPermissionButton.textContent = "AUDIO AUTORIZZATO";
  elements.bootContent.classList.remove("is-awaiting-audio");
  addHomeAudioUnlockListeners();
  startBootSequence();
}

function startBootSequence() {
  if (state.bootTypingStarted) {
    return;
  }

  state.bootTypingStarted = true;
  typeBootText();
}

function addHomeAudioUnlockListeners() {
  document.addEventListener("pointerdown", unlockAudioFromHome, { passive: true });
  document.addEventListener("click", unlockAudioFromHome);
  document.addEventListener("touchstart", unlockAudioFromHome, { passive: true });
  document.addEventListener("keydown", unlockAudioFromHome);
}

function removeHomeAudioUnlockListeners() {
  document.removeEventListener("pointerdown", unlockAudioFromHome);
  document.removeEventListener("click", unlockAudioFromHome);
  document.removeEventListener("touchstart", unlockAudioFromHome);
  document.removeEventListener("keydown", unlockAudioFromHome);
}

function startHomeAudio() {
  if (state.started) {
    return Promise.resolve(false);
  }

  return playLoopingSound("alienzip").then((started) => {
    if (started) {
      state.homeAudioStarted = true;
      markHomeAudioAuthorized();
      stopHomeAudioRetry();
      removeHomeAudioUnlockListeners();
    } else if (!state.started) {
      scheduleHomeAudioRetry();
    }

    return started;
  });
}

function scheduleHomeAudioRetry() {
  window.clearTimeout(state.homeAudioRetryTimer);
  state.homeAudioRetryTimer = window.setTimeout(startHomeAudio, 1200);
}

function stopHomeAudioRetry() {
  window.clearTimeout(state.homeAudioRetryTimer);
  state.homeAudioRetryTimer = 0;
}

function playLoopingSound(name) {
  const audio = audioClips.get(name);

  if (!audio || !audio.paused) {
    return Promise.resolve(Boolean(audio));
  }

  audio.volume = SOUND_VOLUME[name] ?? 0.3;
  return audio.play()
    .then(() => true)
    .catch(() => false);
}

function pauseSound(name) {
  const audio = audioClips.get(name);

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;

  if (name === "alienzip") {
    state.homeAudioStarted = false;
    addHomeAudioUnlockListeners();
  }
}

function playSound(name) {
  if (!state.audioUnlocked) {
    return;
  }

  const audio = audioClips.get(name);

  if (!audio) {
    return;
  }

  const sound = name === "crt" ? audio : audio.cloneNode(true);
  sound.volume = SOUND_VOLUME[name] ?? 0.3;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playCrtHum() {
  const audio = audioClips.get("crt");

  if (!audio || !audio.paused) {
    return;
  }

  audio.play().catch(() => {});
}

function createAmbientParticles() {
  if (!elements.particles) {
    return;
  }

  const particleCount = state.reducedMotion ? 14 : 44;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty("--duration", `${6 + Math.random() * 8}s`);
    particle.style.setProperty("--delay", `${Math.random() * -8}s`);
    particle.style.setProperty("--travel-x", `${-24 + Math.random() * 48}px`);
    elements.particles.append(particle);
  }
}

function createShips() {
  if (!elements.ships) {
    return;
  }

  const ships = [
    { y: "18vh", scale: 0.72, speed: "46s", delay: "-12s", color: "#a8beb6" },
    { y: "64vh", scale: 0.56, speed: "58s", delay: "-33s", color: "#d6a94a" },
    { y: "42vh", scale: 0.42, speed: "68s", delay: "-5s", color: "#bd5548" }
  ];

  ships.forEach((shipData) => {
    const ship = document.createElement("span");
    ship.className = "ship";
    ship.style.setProperty("--ship-y", shipData.y);
    ship.style.setProperty("--ship-scale", shipData.scale);
    ship.style.setProperty("--ship-speed", shipData.speed);
    ship.style.setProperty("--ship-delay", shipData.delay);
    ship.style.setProperty("--ship-color", shipData.color);
    elements.ships.append(ship);
  });
}
