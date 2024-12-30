// This function will be called when the form is submitted
// This function will be called when the form is submitted
function getFormvalue() {
  // Get the values of First Name and Last Name from the form
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  
  // Combine First Name and Last Name and display them in an alert
  alert(firstName + " " + lastName);
  
  // Return false to prevent the form from actually submitting and refreshing the page
  return false;
}
