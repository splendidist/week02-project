//Buttons
const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn1 = document.getElementById("upgradeBtn1");
const upgradeBtn2 = document.getElementById("upgradeBtn2");
const upgradeBtn3 = document.getElementById("upgradeBtn3");
const upgradeBtn4 = document.getElementById("upgradeBtn4");
const upgradeBtn5 = document.getElementById("upgradeBtn5");
const upgradeBtn6 = document.getElementById("upgradeBtn6");
const resetBtn = document.getElementById("resetBtn");

//Text
const counterNumber = document.getElementById("counterNumber");
const cpsNumber = document.getElementById("cpsNumber");

const gameStats = {
  cookies: 0,
  cps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("gameStats"));

if (storageStats) {
  gameStats.cookies = storageStats.cookies;
  gameStats.cps = storageStats.cps;
  updatePage();
}

function makeCookie() {
  gameStats.cookies++;
  updatePage();
  updateStorage();
}

//Upgrade button functions
function buyUpgrade() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 10) {
    gameStats.cps++;
    gameStats.cookies -= 10;
    updatePage();
    updateStorage();
  }
}

function buyUpgrade2() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 200) {
    gameStats.cps = gameStats.cps + 5;
    gameStats.cookies -= 200;
    updatePage();
    updateStorage();
  }
}

function buyUpgrade3() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 2000) {
    gameStats.cps = gameStats.cps + 10;
    gameStats.cookies -= 2000;
    updatePage();
    updateStorage();
  }
}

function buyUpgrade4() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 10000) {
    gameStats.cps = gameStats.cps + 20;
    gameStats.cookies -= 10000;
    updatePage();
    updateStorage();
  }
}

function buyUpgrade5() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 50000) {
    gameStats.cps = gameStats.cps + 50;
    gameStats.cookies -= 50000;
    updatePage();
    updateStorage();
  }
}

function buyUpgrade6() {
  let currentCookies = counterNumber.textContent;
  if (currentCookies >= 200000) {
    gameStats.cps = gameStats.cps + 100;
    gameStats.cookies -= 200000;
    updatePage();
    updateStorage();
  }
}

//
function updatePage() {
  counterNumber.textContent = gameStats.cookies;
  cpsNumber.textContent = gameStats.cps;
}

function updateStorage() {
  localStorage.setItem("gameStats", JSON.stringify(gameStats));
}

//Button events
cookieBtn.addEventListener("click", makeCookie);
upgradeBtn1.addEventListener("click", buyUpgrade);
upgradeBtn2.addEventListener("click", buyUpgrade2);
upgradeBtn3.addEventListener("click", buyUpgrade3);
upgradeBtn4.addEventListener("click", buyUpgrade4);
upgradeBtn5.addEventListener("click", buyUpgrade5);
upgradeBtn6.addEventListener("click", buyUpgrade6);

setInterval(function () {
  gameStats.cookies += gameStats.cps;
  updatePage();
  updateStorage();
}, 1000);

//Unlock upgrades
setInterval(function () {
  if (counterNumber.textContent >= 10 || cpsNumber.textContent >= 1) {
    upgradeBtn1.disabled = false;
    upgradeBtn1.style.backgroundImage = "url('./assets/cat icon.png')";
  }
  if (cpsNumber.textContent >= 50) {
    upgradeBtn2.disabled = false;
    upgradeBtn2.style.backgroundImage = "url('./assets/cat icon.png')";
  }
  if (cpsNumber.textContent >= 100) {
    upgradeBtn3.disabled = false;
    upgradeBtn3.style.backgroundImage = "url('./assets/cat icon.png')";
  }
  if (cpsNumber.textContent >= 200) {
    upgradeBtn4.disabled = false;
    upgradeBtn4.style.backgroundImage = "url('./assets/cat icon.png')";
  }
  if (cpsNumber.textContent >= 1000) {
    upgradeBtn5.disabled = false;
    upgradeBtn5.style.backgroundImage = "url('./assets/cat icon.png')";
  }
  if (cpsNumber.textContent >= 10000) {
    upgradeBtn6.disabled = false;
    upgradeBtn6.style.backgroundImage = "url('./assets/cat icon.png')";
  }
}, 1);

//Reset game

function resetGame() {
  gameStats.cookies = 0;
  gameStats.cps = 0;
  updatePage();
  upgradeBtn1.disabled = true;
  upgradeBtn1.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
  upgradeBtn2.disabled = true;
  upgradeBtn2.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
  upgradeBtn3.disabled = true;
  upgradeBtn3.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
  upgradeBtn4.disabled = true;
  upgradeBtn4.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
  upgradeBtn5.disabled = true;
  upgradeBtn5.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
  upgradeBtn6.disabled = true;
  upgradeBtn6.style.backgroundImage =
    "url('https://img.icons8.com/?size=256&id=121428&format=png')";
}

resetBtn.addEventListener("click", resetGame);
