const form = document.getElementById(`resume-form`) as HTMLFormElement
const resumeDisplayElement = document.getElementById(`resum-display`) as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value; 
    const email = (document.getElementById('email') as HTMLInputElement).value; 
    const Phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills =(document.getElementById('skills') as HTMLTextAreaElement).value;
      
        const resumeHTML = `
            <h2> Editable Resume</h2>
            <h3> personal information</h3>b
        
               <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong>${email}</p>
              <p><strong>Phone Number:</strong> ${Phone}</p>
              <h3>Education</h3>
              <p>${education}</p>
              <h3>Experience</h3>
              <p>${experience}</p>
              <h3>Skills</h3>
              <p>${skills}</p>
          `;
  
          if (resumeDisplayElement) {
              resumeDisplayElement.innerHTML = resumeHTML;
          } else {
              console.error('The resume output element is missing');
          }
  });
  
