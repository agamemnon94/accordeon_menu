import { acccordeon, accordion2 } from "../components/_accordeon.js";

window.addEventListener("DOMContentLoaded", () => {
  const inputLabelBtn = document.querySelectorAll('input[type="checkbox"]');

  acccordeon();
  accordion2(inputLabelBtn);
});
