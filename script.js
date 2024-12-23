document.addEventListener('DOMContentLoaded', () => {
    // Attach an event listener to the form submission
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', getFormValue);
});

function getFormValue(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine the first and last names
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using alert
    alert(fullName);
}


