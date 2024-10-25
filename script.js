// Select the input field
var inputField = document.getElementById("fname");

// Add event listener for the 'blur' event
inputField.addEventListener('blur', function() {
inputField.value = inputField.value.toUpperCase();

});
