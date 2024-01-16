$(document).ready(function () {
  const getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
  };

  const getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
  };

  const getDistanceHint = function (distance) {
    if (distance < 10) {
      return "Boiling hot!";
    } else if (distance < 20) {
      return "Really hot!";
    } else if (distance < 40) {
      return "Hot!";
    } else if (distance < 80) {
      return "Warm";
    } else if (distance < 160) {
      return "Cold";
    } else if (distance < 320) {
      return "Really cold";
    } else {
      return "Freeezing";
    }
  };

  let width = 600;
  let height = 600;
  let clicks = 0;

  // Обработчик события клика на изображении карты
  $("#map").on("click", function (event) {
    clicks++;

    let target = {
      x: getRandomNumber(width),
      y: getRandomNumber(height),
    };

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distance < 8) {
      alert(`Found the treasure in ${clicks} clicks!`);
    }
  });
});
