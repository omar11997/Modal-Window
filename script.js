let btns = document.querySelectorAll(".show-modal");
let overlay = document.querySelector(".overlay");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    classAddRemove("modal", "remove");
  });
}
document.querySelector(".close-modal").addEventListener("click", function () {
  classAddRemove("modal", "add");
});
overlay.addEventListener("click", function () {
  classAddRemove("modal", "add");
});

const classAddRemove = function (className, verb) {
  if (verb == "add") {
    document.querySelector(`.${className}`).classList.add("hidden");
    overlay.classList.add("hidden");
  } else {
    document.querySelector(`.${className}`).classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    classAddRemove("modal", "add");
  }
});
