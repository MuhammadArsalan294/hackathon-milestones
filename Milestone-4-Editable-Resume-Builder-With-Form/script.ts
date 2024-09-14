// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const father = (document.getElementById('fathername') as HTMLInputElement).value
    const identity = (document.getElementById('identitynumber') as HTMLInputElement).value
    const date = (document.getElementById('dateofbirth') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Father Name: </b><span contenteditable="true">${father}</span></p>
    <p><b>Identity Number: </b><span contenteditable="true">${identity}</span></p>
    <p><b>Date Of Birth: </b><span contenteditable="true">${date}</span></p>
    <p><b>Contact Number: </b><span contenteditable="true">${contact}</span></p>
    <p><b>Address: </b><span contenteditable="true">${address}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}

    <h3>Skills</h3>
    <p contenteditable="true">${skills}

    <h3>Experience</h3>
    <p contenteditable="true">${experience}`;

    // Display the generated resume
    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML
    } else {
        console.error('The resume display element is missing.')
    }
})