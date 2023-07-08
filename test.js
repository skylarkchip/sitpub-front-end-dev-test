const listContainer = document.querySelector(".list-container");
const list = document.querySelector(".list");
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");

scrollLeft.addEventListener("click", () => {
  listContainer.scroll({
    left: listContainer.scrollLeft - 200,
    behavior: "smooth",
  });
});

scrollRight.addEventListener("click", () => {
  listContainer.scroll({
    left: listContainer.scrollLeft + 200,
    behavior: "smooth",
  });
});

function updateScrollButtons() {
  if (listContainer.scrollLeft === 0) {
    scrollLeft.style.display = "none";
  } else {
    scrollLeft.style.display = "block";
  }

  if (
    listContainer.scrollLeft + listContainer.clientWidth >=
    list.scrollWidth
  ) {
    scrollRight.style.display = "none";
  } else {
    scrollRight.style.display = "block";
  }
}

updateScrollButtons();

listContainer.addEventListener("scroll", updateScrollButtons);

window.addEventListener("resize", () => {
  updateScrollButtons();
});
