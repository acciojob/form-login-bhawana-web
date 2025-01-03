// Function to handle the form submission
function getFormValue(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Retrieve the values from the form inputs
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;

  // Combine the first and last names and display in an alert
  alert(`${firstName} ${lastName}`);
}

// Attach the function to the form's submit event
document.getElementById('user-form').addEventListener('submit', getFormValue);
