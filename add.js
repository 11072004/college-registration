document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const addresses = document.getElementById('addresses').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const aadharno=document.getElementById('Aadharnum').value;
    
    // Basic validation
    if (addresses && city && state && country) {
        document.getElementById('message').innerHTML = `<div class="alert alert-success" role="alert">
            Registration successful! <br>Name: ${addresses}<br>Email: ${city}<br>Phone: ${state}<br>Course: ${country}
        </div>`;
    } else {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">
            Please fill out all fields.
        </div>`;
    }

});
