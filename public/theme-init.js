/* Runs synchronously in <head> before paint (CSP-safe, no inline script).
   Restores the stored brand + light/dark preference so the page never flashes
   the wrong theme. Ported from theqrl.org's assets/js/head.js. */
(function () {
  try {
    var el = document.documentElement;
    var brand = localStorage.getItem("qrl-brand") || el.getAttribute("data-brand") || "dawn";
    var pref = localStorage.getItem("qrl-theme"); // "light" | "dark"
    el.setAttribute("data-brand", brand);
    if (pref) {
      el.setAttribute("data-theme", pref === "light" ? "qrl-" + brand + "-light" : "qrl-" + brand);
    } else {
      el.setAttribute("data-theme", "qrl-" + brand);
    }
  } catch (e) {}
  document.documentElement.classList.add("js");
})();
