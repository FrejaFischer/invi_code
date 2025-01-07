document.querySelector(".spinner").classList.add("hidden");
document.querySelector("header").classList.add("hidden");
document.querySelector("main").classList.add("hidden");
document.querySelector("footer").classList.add("hidden");

document.querySelector("#first_view").addEventListener("animationend", () => {
  document.querySelector("#first_view").classList.add("disappear");
  setTimeout(() => {
    document.querySelector("#first_view").classList.add("hidden");
    document.querySelector(".spinner").classList.remove("hidden");
    document.querySelector(".spinner img").addEventListener("animationend", showContent);
  }, 1000);
});

function showContent() {
  document.querySelector(".spinner").classList.add("hidden");
  document.querySelector("header").classList.add("appear");
  document.querySelector("main").classList.add("appear");
  document.querySelector("footer").classList.add("appear");
  document.querySelector("header").classList.remove("hidden");
  document.querySelector("main").classList.remove("hidden");
  document.querySelector("footer").classList.remove("hidden");
}
