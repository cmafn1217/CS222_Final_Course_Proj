// Get the URL parameters
var urlParams = new URLSearchParams(window.location.search);

// Display the values on the page
document.getElementById("name").innerText = "Name: " + urlParams.get("name");
document.getElementById("email").innerText = "Email: " + urlParams.get("email");
document.getElementById("service").innerText = "Service: " + urlParams.get("service");
document.getElementById("requests").innerText = "Requests: " + urlParams.get("requests");
