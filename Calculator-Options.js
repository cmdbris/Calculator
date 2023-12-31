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

let originalCustomColour = '#ADD8E6';

function applyCustomColour(selectedCustomColour) {
    // Convert hex to RGB
    var mainRGB = hexToRgb(originalCustomColour);
    var newMainRGB = hexToRgb(selectedCustomColour);

    // Calculate the differences
    var diffR = newMainRGB.r - mainRGB.r;
    var diffG = newMainRGB.g - mainRGB.g;
    var diffB = newMainRGB.b - mainRGB.b;

    // Update colors
    document.documentElement.style.setProperty('--main-colour', `rgb(${newMainRGB.r}, ${newMainRGB.g}, ${newMainRGB.b})`);
    document.documentElement.style.setProperty('--light-accent', `rgb(${Math.round(newMainRGB.r - 0.5 * diffR)}, ${Math.round(newMainRGB.g - 0.5 * diffG)}, 
    ${Math.round(newMainRGB.b - 0.5 * diffB)})`);
    document.documentElement.style.setProperty('--dark-accent', `rgb(${Math.round(newMainRGB.r + 0.5 * diffR)}, ${Math.round(newMainRGB.g + 0.5 * diffG)}, ${Math.round(newMainRGB.b + 0.5 * diffB)})`);
    document.documentElement.style.setProperty('--checked-checkbox-colour', `rgb(${Math.round(newMainRGB.r - diffR)}, ${Math.round(newMainRGB.g - diffG)}, ${Math.round(newMainRGB.b - diffB)})`);
    document.documentElement.style.setProperty('--checkbox-border-colour', `rgb(${Math.round(newMainRGB.r + diffR)}, ${Math.round(newMainRGB.g + diffG)}, ${Math.round(newMainRGB.b + diffB)})`);
  }

function hexToRgb(hex) {
    // Remove the hash sign if present
    hex = hex.replace(/^#/, '');

    // Parse the hex values
    var bigint = parseInt(hex, 16);

    // Extract the RGB values
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return { r: r, g: g, b: b };
  }