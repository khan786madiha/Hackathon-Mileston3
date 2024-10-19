let profileImage = document.querySelector('.imgBox img') as HTMLImageElement;
const resumeData = JSON.parse(localStorage.getItem("resumeData") || '{}');
console.log("hello");



// Function to set text content
function setText(selector: string, text: string): void {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function createListItem(year: string, degree: string, institute: string): string {
    return `
        <li>
            <h5>${year}</h5>
            <h4>${degree}</h4>
            <h4>${institute}</h4>
        </li>
    `;
}

function createExperienceItem(years: string, jobTitle: string, companyDesc: string): string {
    return `
        <div class="box">
            <div class="year_company">
                <h5>${years}</h5>
            </div>
            <div class="text">
                <h4>${jobTitle}</h4>
                <p>${companyDesc}</p>
            </div>
        </div>
    `;
}

function createSkillItem(skill: string, proficiency: string): string {
    return `
        <div class="box">
            <h4>${skill}</h4>
            <div class="percent2">
                <div style="width: ${proficiency}%;"></div>
            </div>
        </div>
    `;
}

if (resumeData.profileImage) {
    profileImage.src = resumeData.profileImage;
}


setText("#profileName", `${resumeData.aboutMe?.firstName || ''} ${resumeData.aboutMe?.lastName || ''}`);
setText("#profileDesignation", resumeData.aboutMe?.designation || '');
setText("#profileDescription", resumeData.aboutMe?.yourself || '');

const contactInfo = resumeData.contactInfo || {};
setText("#contactPhone", contactInfo.mobileNumber || '');
setText("#contactEmail", contactInfo.email || '');
setText("#contactLinkedIn", contactInfo.linkedin || '');
setText("#contactAddress", contactInfo.address || '');

const educationList = document.querySelector("#educationList");
if (educationList && Array.isArray(resumeData.education)) {
    educationList.innerHTML = resumeData.education.map((edu: any) =>
        createListItem(edu.year, edu.degree, edu.institute)
    ).join('');
}

const languagesList = document.querySelector("#languageList");
if (languagesList && Array.isArray(resumeData.languages)) {
    languagesList.innerHTML = resumeData.languages.map((lang: any) =>
        `<li>
            <span class="text">${lang.language}</span>
            <span class="percent">
                <div style="width: ${lang.proficiency}%;"></div>
            </span>
        </li>`
    ).join('');
}

const experienceList = document.querySelector("#experienceList");
if (experienceList && Array.isArray(resumeData.experience)) {
    experienceList.innerHTML = resumeData.experience.map((exp: any) =>
        createExperienceItem(exp.years, exp.jobTitle, exp.companyDesc)
    ).join('');
}

const skillsList = document.querySelector("#skillsList");
if (skillsList && Array.isArray(resumeData.skills)) {
    skillsList.innerHTML = resumeData.skills.map((skill: any) =>
        createSkillItem(skill.skill, skill.level)

    ).join('');
}



function downloadResume(): void {
    const resumeElement = document.querySelector('.container') as HTMLElement;

    if (!resumeElement) {
        console.error('Resume container not found!');
        return;
    }
    const options = {
        margin: 0.5, 
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: "a4", orientation: 'portrait' }, 
    };
    (window as any).html2pdf().from(resumeElement).set(options).save();
}

const downloadButton = document.getElementById('downloadResume');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadResume);
} else {
    console.error('Download button not found!');
}