const btn = document.getElementById("sub_btn");
const title = document.getElementById("title");
const sub = document.getElementById("sub");

const toggleSub = () => {
  sub.style.display = sub.style.display === "none" ? "block" : "none";
  title.style.display = title.style.display === "none" ? "block" : "none";
};
const hideSub = () => {
  sub.style.display = "none";
};
btn.addEventListener("click", toggleSub);
