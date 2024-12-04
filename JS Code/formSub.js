document.getElementById("consultationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.querySelector('input[name="account"]:checked').value;
    var requests = document.getElementById("requests").value;

    // Construct the URL with query parameters
    var thankYouUrl = "thank-you.html?name=" + encodeURIComponent(name) + 
                      "&email=" + encodeURIComponent(email) + 
                      "&service=" + encodeURIComponent(service) + 
                      "&requests=" + encodeURIComponent(requests);
    
    // Redirect to the thank-you page
    window.location.href = thankYouUrl;
});
