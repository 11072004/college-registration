document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const aadharno=document.getElementById('Aadharnum').value;
    
    // Basic validation
    if (name && email && phone && course) {
        document.getElementById('message').innerHTML = `<div class="alert alert-success" role="alert">
            Registration successful! <br>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Course: ${course}
        </div>`;
    } else {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">
            Please fill out all fields.
        </div>`;
    }
    if(aadharno.length!==12)
    {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">
            Please enter 12 digits aadhar number.
        </div>`;
    }
    if(phone.length!==10)
        {
            document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">
                Please enter 10 digits phone number.
            </div>`;
        }
});
