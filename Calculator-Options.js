// Disabler and Enabler of Classes

let diable = document.getElementsByClassName("diable")[0];

// Animation checkbox functions

let checkbox_ToggleAnimation = document.getElementById("animation-toggle");
let calculatorTable = document.getElementsByClassName("calculator-table")[0];

checkbox_ToggleAnimation.addEventListener("change", function () {
    calculatorTable.classList.toggle('enable-hover', checkbox_ToggleAnimation.checked);
});

// Colour changing checkboxes functions

let checkbox_TogglePresetColour = document.getElementById('preset-colour-toggle');
let checkbox_ToggleCustomColour = document.getElementById('custom-colour-toggle');
let presetColourOptions = document.getElementById('preset-colour-options-placeholder');
let customColourOptions = document.getElementById('custom-colour-options-placeholder');

presetColourOptions.classList.remove('preset-colour-options');
customColourOptions.classList.remove('custom-colour-options-placeholder');

checkbox_TogglePresetColour.addEventListener("change", function () {
    updateCheckboxes('preset');
});

checkbox_ToggleCustomColour.addEventListener("change", function () {
    updateCheckboxes('custom');
});

function updateCheckboxes(checkbox) {
    // Check which checkbox was clicked
    // If one checkbox is checked, the other is unchecked
    if (checkbox === 'preset' && checkbox_TogglePresetColour.checked) {
        checkbox_ToggleCustomColour.checked = false;
        customColourOptions.classList.remove();
        presetColourOptions.classList.add();
    }
    else if (checkbox === 'custom' && checkbox_ToggleCustomColour.checked) {
        checkbox_TogglePresetColour.checked = false;
        presetColourOptions.classList.remove();
        customColourOptions.classList.add();
    }
}