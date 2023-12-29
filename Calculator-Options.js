let checkbox_ToggleAnimation = document.getElementById("animation-toggle");
let calc_div = document.getElementsByClassName("calculator-table")[0];

checkbox_ToggleAnimation.addEventListener("change", function() {
    calc_div.classList.toggle('enable-hover', checkbox_ToggleAnimation.checked);
});