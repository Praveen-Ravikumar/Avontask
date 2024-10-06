document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const requiredFields = document.querySelectorAll("input[required]");
    let isValid = true;

    requiredFields.forEach((input) => {
        if (!input.value.trim()) {
            input.classList.add("is-invalid");
            isValid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        
    }
});


function updateSwitchLabel(switchInput, switchLabel) {
    switchLabel.textContent = switchInput.checked ? 'Active' : 'Inactive';
}



const switches = [
    {inputId: 'switch1', labelId: 'label1'},
    {inputId: 'switch2', labelId: 'label2'},
    {inputId: 'switch3', labelId: 'label3'},
    {inputId: 'switch4', labelId: 'label4'}
];


switches.forEach(function(switchObj) {
    const switchInput = document.getElementById(switchObj.inputId);
    const switchLabel = document.getElementById(switchObj.labelId);

    updateSwitchLabel(switchInput, switchLabel);

    switchInput.addEventListener('change', function() {
        updateSwitchLabel(switchInput, switchLabel);
    });
});
