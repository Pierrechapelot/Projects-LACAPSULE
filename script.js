document.querySelector("body").addEventListener("keydown", function (event) {
  const touche = event.key;
  const offSetTop = document.querySelector("#player").offsetTop;
  const offSetLeft = document.querySelector("#player").offsetLeft;

  if (touche === "ArrowUp") {
    document.querySelector("#player").src =
      "https://static.lacapsule.academy/practice/mario/mario-back-1.png";
    document.querySelector("#player").style.top = `${offSetTop - 10}px`;
  } else if (touche === "ArrowDown") {
    document.querySelector("#player").src =
      "https://static.lacapsule.academy/practice/mario/mario-front-1.png";
    document.querySelector("#player").style.top = `${offSetTop + 10}px`;
  } else if (touche === "ArrowRight") {
    document.querySelector("#player").src =
      "https://static.lacapsule.academy/practice/mario/mario-right-1.png";
    document.querySelector("#player").style.left = `${offSetLeft + 10}px`;
  } else if (touche === "ArrowLeft") {
    document.querySelector("#player").src =
      "https://static.lacapsule.academy/practice/mario/mario-left-1.png";
    document.querySelector("#player").style.left = `${offSetLeft - 10}px`;
  }
});
