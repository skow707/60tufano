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
  avatar: "assets/avatars/tufalien.png",
  messages: [
    "Ragazzi...",
    "Questa cosa va approfondita.",
    "Interessante.",
    "Non mi convince.",
    "Dovete osare.",
    "Qui manca un livello di ricerca.",
    "Proviamo a guardarla da un'altra angolazione."
  ]
};

const SOUND_FILES = {
  click: "assets/sounds/click.wav",
  blip: "assets/sounds/blip.wav",
  crt: "assets/sounds/crt.wav",
  interference: "assets/sounds/interference.wav",
  tufalien: "assets/sounds/tufalien.wav"
};

const SOUND_VOLUME = {
  click: 0.35,
  blip: 0.28,
  crt: 0.13,
  interference: 0.32,
  tufalien: 0.42
};

const state = {
  aliens: [],
  deck: [],
  lastAlienName: "",
  currentSignal: 0,
  clicksSinceTufalien: 0,
  bootTyped: false,
  dataReady: false,
  started: false,
  audioUnlocked: false,
  tufalienTimer: 0,
  closingTufalien: false,
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

const elements = {
  body: document.body,
  crtScreen: document.querySelector("#crtScreen"),
  bootScene: document.querySelector("#bootScene"),
  transmissionScene: document.querySelector("#transmissionScene"),
  bootCopy: document.querySelector("#bootCopy"),
  startButton: document.querySelector("#startButton"),
  nextButton: document.querySelector("#nextButton"),
  mainWindow: document.querySelector("#mainWindow"),
  alienCard: document.querySelector(".alien-card"),
  alienAvatar: document.querySelector("#alienAvatar"),
  alienName: document.querySelector("#alienName"),
  alienMessage: document.querySelector("#alienMessage"),
  signalLabel: document.querySelector("#signalLabel"),
  frequencyLabel: document.querySelector("#frequencyLabel"),
  tufalienOverlay: document.querySelector("#tufalienOverlay"),
  tufalienWindow: document.querySelector("#tufalienWindow"),
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
  typeBootText();
  loadAliens();
}

function bindEvents() {
  elements.startButton.addEventListener("click", startExperience);
  elements.nextButton.addEventListener("click", requestTransmission);
  elements.closeTufalien.addEventListener("click", dismissTufalien);

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
  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Archivio non raggiungibile: ${response.status}`);
    }

    const aliens = await response.json();
    state.aliens = validateAliens(aliens);
    state.deck = shuffleAliens(state.aliens);
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
  playSound("click");
  playCrtHum();
  state.started = true;
  window.scrollTo(0, 0);
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
  const message = pickRandom(alien.messages);

  state.currentSignal += 1;
  state.lastAlienName = alien.name;

  elements.alienAvatar.src = alien.avatar;
  elements.alienAvatar.alt = `Avatar alieno di ${alien.name}`;
  elements.alienName.textContent = alien.name;
  elements.alienMessage.textContent = message;
  elements.signalLabel.textContent = `SIGNAL ${String(state.currentSignal).padStart(3, "0")}`;
  elements.frequencyLabel.textContent = `${createFrequency()} MHz`;

  playSound("blip");
  revealAlienCard();
}

function drawAlien() {
  if (!state.deck.length) {
    state.deck = shuffleAliens(state.aliens, state.lastAlienName);
  }

  return state.deck.pop();
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

function prepareAudio() {
  Object.entries(SOUND_FILES).forEach(([name, source]) => {
    const audio = new Audio(source);
    audio.preload = "auto";
    audio.volume = SOUND_VOLUME[name] ?? 0.3;

    if (name === "crt") {
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
