// Disabler and Enabler of Classes

let disable1 = document.getElementsByClassName("disable")[0];

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
let applyColourButton = document.getElementById('apply-colour');

presetColourOptions.classList.add('disable');
customColourOptions.classList.add('disable');
applyColourButton.classList.add('disable');

checkbox_TogglePresetColour.addEventListener("change", function () {
    updateCheckboxes('preset');
});

checkbox_ToggleCustomColour.addEventListener("change", function () {
    updateCheckboxes('custom');
});

function updateCheckboxes(checkbox) {
    applyColourButton.classList.add('disable');
    // Check which checkbox was clicked
    // If one checkbox is checked, the other is unchecked
    if (checkbox === 'preset' && checkbox_TogglePresetColour.checked) {
        checkbox_ToggleCustomColour.checked = false;
        customColourOptions.classList.add('disable');
        presetColourOptions.classList.remove('disable');
    }
    else if (checkbox === 'custom' && checkbox_ToggleCustomColour.checked) {
        checkbox_TogglePresetColour.checked = false;
        presetColourOptions.classList.add('disable');
        customColourOptions.classList.remove('disable');
    }
    else {
        presetColourOptions.classList.add('disable');
        customColourOptions.classList.add('disable');
        applyColourButton.classList.add('disable');
    }
}

// Colour changing options functions

let customColour =  document.getElementById('custom-colour');
let presetColour = document.getElementById('preset-colour-options');

presetColour.addEventListener('change', function () {
    applyColourButton.classList.remove('disable');
});

customColour.addEventListener('input', function() {
    applyColourButton.classList.remove('disable');
});

applyColourButton.addEventListener('click', function () {
    if (checkbox_TogglePresetColour.checked) {
        applyPresetColour(presetColour.value);
    }
    else if (checkbox_ToggleCustomColour.checked) {
        applyCustomColour(customColour.value);
    }
});

function applyPresetColour(selectedPresetColour) {

}

function applyCustomColour(selectedCustomColour) {

}