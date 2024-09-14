// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var father = document.getElementById('fathername').value;
    var identity = document.getElementById('identitynumber').value;
    var date = document.getElementById('dateofbirth').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Father Name: </b><span contenteditable=\"true\">").concat(father, "</span></p>\n    <p><b>Identity Number: </b><span contenteditable=\"true\">").concat(identity, "</span></p>\n    <p><b>Date Of Birth: </b><span contenteditable=\"true\">").concat(date, "</span></p>\n    <p><b>Contact Number: </b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    <p><b>Address: </b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience);
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
