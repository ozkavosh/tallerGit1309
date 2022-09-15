const btn = document.getElementById("sub_btn");
const sub = document.getElementById("sub");

const toggleSub = () => {
  sub.style.display = sub.style.display === "none" ? "block" : "none";
};

btn.addEventListener("click", toggleSub);
