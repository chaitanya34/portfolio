document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});
