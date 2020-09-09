import "./styles.css";

document.getElementById("anime").innerHTML = "";

bullet.onclick = function () {
  document.getElementById("bullet").style.transformOrigin = "250 250";

  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start + 3000;

    bullet.style.left = timePassed / 10 + "px";

    if (timePassed > 7000) clearInterval(timer);
    document.getElementById("anime").innerHTML = timePassed;
  }, 10);
};
