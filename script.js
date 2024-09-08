"use strict";
// function myFunction(): void {
//     const x: HTMLElement | null = document.getElementById("myDIV");
//     if (x) {
//       if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
//     }
//   }
function myFunction() {
    const x = document.getElementById("myDIV");
    if (x) {
        x.style.display = "block";
    }
}
document.getElementById(`resumForm`)?.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const textElement = document.getElementById(`name`);
    const emailElement = document.getElementById(`email-input`);
    const numberElement = document.getElementById(`number-input`);
    const dateElement = document.getElementById(`date-input`);
    const educationElement = document.getElementById(`education`);
    const experienceElement = document.getElementById(`experience`);
    const skillsElement = document.getElementById(`skills`);
    if (textElement && emailElement && numberElement && dateElement && educationElement && experienceElement && skillsElement) {
        const name = textElement.value;
        const email = emailElement.value;
        const number = numberElement.value;
        const date = dateElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
     <p><strong>Email:</strong> ${email} </p>
       <p><strong>Number:</strong> ${number} </p>
        <p><strong>Date:</strong> ${date} </p>
        <h3>

         <h3>Education</h3>
          <p>${education} </p>
          <h3>Experience</h3>
          <p>${experience} </p>
          <h3>Skills</h3>
          <p>${skills} </p>
           ${experience} </p>
    `;
        const resumeOutputElement = document.getElementById(`resumeOutput`);
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error(`the resume output element are missing`);
        }
    }
    else {
        console.error(`one or more output element are missing`);
    }
});
// formElements.forEach((element) => {
//   const label = document.createElement("label");
//   label.textContent = element.label;
//   formContainer.appendChild(label);
//   let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
//   switch (element.inputType) {
//     case "text":
//     case "email":
//     case "password":
//     case "number":
//     case "date":
//     case "color":
//     case "range":
//     case "search":
//     case "tel":
//     case "url":
//       input = document.createElement("input");
//       input.type = element.inputType;
//       break;
//     case "checkbox":
//       input = document.createElement("input");
//       input.type = "checkbox";
//       break;
//     case "radio":
//       input = document.createElement("input");
//       input.type = "radio";
//       break;
//     case "textarea":
//       input = document.createElement("textarea");
//       break;
//     case "select":
//       input = document.createElement("select");
//       element.options.forEach((option) => {
//         const optionElement = document.createElement("option");
//         optionElement.value = option.value;
//         optionElement.text = option.text;
//         input.appendChild(optionElement);
//       });
//       break;
//     case "file":
//       input = document.createElement("input");
//       input.type = "file";
//       input.accept = element.accept;
//       break;
//   }
//   input.id = element.id;
//   input.name = element.name;
//   formContainer.appendChild(input);
// });
