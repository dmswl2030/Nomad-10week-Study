const body = document.body;

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add("screen_big");
    body.classList.remove("screen_medium");
  } else if (width <= 1300 && width >= 700) {
    body.classList.add("screen_medium");
    body.classList.remove("screen_big", "screen_small");
  } else {
    body.classList.add("screen_small");
    body.classList.remove("screen_medium");
  }
}

window.addEventListener("resize", handleResize);