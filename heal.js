document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bloodgroup = document.getElementById('blood').value;
    const birthmark = document.getElementById('birthmark').value;
    
    // Basic validation
    if (height && weight && bloodgroup && birthmark) {
        document.getElementById('message').innerHTML = `<div class="alert alert-success" role="alert">
            Registration successful! <br>Name: ${height}<br>Email: ${weight}<br>Phone: ${bloodgroup}<br>Course: ${birthmark}
        </div>`;
    } else {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">
            Please fill out all fields.
        </div>`;
    }

});