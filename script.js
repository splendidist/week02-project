const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn1 = document.getElementById("upgradeBtn1");
// const upgradeBtn2 = document.getElementById("upgradeBtn2");
// const upgradeBtn3 = document.getElementById("upgradeBtn3");
// const upgradeBtn4 = document.getElementById("upgradeBtn4");
// const upgradeBtn5 = document.getElementById("upgradeBtn5");
// const upgradeBtn6 = document.getElementById("upgradeBtn6");

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

function buyUpgrade() {
  gameStats.cps++;
  gameStats.cookies -= 10;
  updatePage();
  updateStorage();
}

function updatePage() {
  counterNumber.textContent = gameStats.cookies;
  cpsNumber.textContent = gameStats.cps;
}

function updateStorage() {
  localStorage.setItem("gameStats", JSON.stringify(gameStats));
}

cookieBtn.addEventListener("click", makeCookie);
upgradeBtn1.addEventListener("click", buyUpgrade);

setInterval(function () {
  gameStats.cookies += gameStats.cps;
  updatePage();
  updateStorage();
}, 1000);

//if cat button clicked 4 times, button is not clickable, and next button is enabled.
