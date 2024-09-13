"use strict";
const form = document.getElementById(`resume-form`);
const resumeDisplayElement = document.getElementById(`resum-display`);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const Phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeHTML = `
            <h2> Editable Resume</h2>
            <h3> personal information</h3>b
        
               <p><strong>Name:</strong> <span  contenteditable="true"> ${name}</span></p>
              <p><strong>Email:</strong> <span  contenteditable="true">${email}</span></p>
              <p><strong>Phone Number:</strong><span  contenteditable="true"> ${Phone}</span></p>
              <h3>Education</h3>
              <p  contenteditable="true">${education}</p>
              <h3>Experience</h3>
              <p  contenteditable="true">${experience}</p>
              <h3>Skills</h3>
              <p  contenteditable="true">${skills}</p>
          `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume output element is missing');
    }
});
