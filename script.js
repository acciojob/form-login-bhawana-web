function getFormvalue(event) {
    // Prevent form submission to avoid page reload
    event.preventDefault();
    
    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    // Concatenate the names and display them in an alert
    alert(firstName + ' ' + lastName);
}
