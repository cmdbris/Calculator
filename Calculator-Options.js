// Animation checkbox functions

let checkbox_ToggleAnimation = document.getElementById("animation-toggle");
let calc_div = document.getElementsByClassName("calculator-table")[0];

checkbox_ToggleAnimation.addEventListener("change", function () {
    calc_div.classList.toggle('enable-hover', checkbox_ToggleAnimation.checked);
});

// Colour changing checkboxes functions

let checkbox_TogglePresetColour = document.getElementById('preset-colour-toggle');
let checkbox_ToggleCustomColour = document.getElementById('custom-colour-toggle');

checkbox_TogglePresetColour.addEventListener("change", function (event) {
    let targetCheckbox = event.target;
    let checkbox = targetCheckbox.getAttribute('checkbox-data');
    updateCheckboxes(checkbox);
});

checkbox_ToggleCustomColour.addEventListener("change", function (event) {
    let targetCheckbox = event.target;
    let checkbox = targetCheckbox.getAttribute('checkbox-data');
    updateCheckboxes(checkbox);
});

function updateCheckboxes(checkbox) {
    // Check which checkbox was clicked
    // If one checkbox is checked, the other is unchecked
    if (checkbox === 'preset' && checkbox_TogglePresetColour.checked) {
        checkbox_ToggleCustomColour.checked = false;
      } else if (checkbox === 'custom' && checkbox_ToggleCustomColour.checked) {
        checkbox_TogglePresetColour.checked = false;
      }
}