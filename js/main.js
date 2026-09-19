let userName = document.querySelector("#name");
let jobTitle = document.querySelector("#jobTitle");
let mail = document.querySelector("#mail");
let tel = document.querySelector("#tel");
let locationTitle = document.querySelector("#location");
let image = document.querySelector("#image");
let inputImg = document.querySelector(".inputImg");
let about = document.querySelector("#about");
let degree = document.querySelector("#degree");
let university = document.querySelector("#university");
let major = document.querySelector("#major");
let startYear = document.querySelector("#startYear");
let endYear = document.querySelector("#endYear");
let addDegree = document.querySelector("#addDegree");
let jobTitleEx = document.querySelector("#jobTitleEx");
let companyName = document.querySelector("#companyName");
let startYearEx = document.querySelector("#startYearEx");
let endYearEx = document.querySelector("#endYearEx");
let descriptionJob = document.querySelector("#descriptionJob");
let skills = document.querySelector("#skills");
let language = document.querySelector("#language");
let languageLevel = document.querySelector("#languageLevel");
let addEx = document.querySelector("#addEx");
let proName = document.querySelector("#proName");
let descriptionPro = document.querySelector("#descriptionPro");
let liveUrl = document.querySelector("#liveUrl");
let githubUrl = document.querySelector("#githubUrl");
let linkedin = document.querySelector("#linkedin");
let github = document.querySelector("#github");
let portfolio = document.querySelector("#portfolio");
let createCv = document.querySelector("#createCv");
let prevEdu = document.querySelector(".prevEdu");
let prevEx = document.querySelector(".prevEx");
let prevSkills = document.querySelector(".prevSkills");
let prevLang = document.querySelector(".prevLang");
let prevPro = document.querySelector(".prevPro");
let prevLink = document.querySelector(".prevLink");
let skillBtn = document.querySelector("#skillBtn");
let addlang = document.querySelector("#addlang");
let addPro = document.querySelector("#addPro");
let addLink = document.querySelector("#addLink");

let selectedLang = document.getElementById("selectedLang");

let previewDataImage = document.querySelector(".profile-image");
let cvPrevCon = document.querySelector(".cv-preview");
let previewProfileData = document.querySelector(".cv-header .profile-info");
let aboutPreview = document.querySelector(".cv-content .aboutPreview");
let preveviewExperinse = document.querySelector(
  ".cv-content .preveviewExperinse",
);
let eduPreview = document.querySelector(".cv-content .eduPreview");
let preveviewLanguage = document.querySelector(
  ".cv-content .preveviewLanguage",
);
let projectsPreview = document.querySelector(".cv-content .projectsPreview");
let skillsPreview = document.querySelector(".cv-content .skillsPreview");
let skillsPreviewUl = document.querySelector(
  ".cv-content .skillsPreview .skillsPreviewUl",
);
let checkLinksLength = document.querySelector(".cv-content  .checkLinksLength");
let linksPrev = document.querySelector(
  ".cv-content .checkLinksLength .linksPrev",
);
let errosText = document.querySelector(".errosText");
let errors = document.querySelector(".errors");
let closeErrBtn = document.querySelector(".closeErrBtn");

closeErrBtn.addEventListener("click", () => {
  closeErr();
});
    cvPrevCon.style.display = 'none'

// let preveviewImage = document.querySelector('.preveviewImage')
// let preveviewName = document.querySelector('.preveviewName')
// let preveviewJobTitle = document.querySelector('.preveviewJobTitle')
// let preveviewMail = document.querySelector('.preveviewMail')
// let preveviewPhone = document.querySelector('.preveviewPhone')
// let preveviewLocation = document.querySelector('.preveviewLocation')
// inputImg.textContent = 'اضغط لاختيار صورة'
let imageVal;

let cvData = {
  personal: {
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    image: "",
  },

  about: "",

  education: [],

  experience: [],

  skills: [],

  languages: [],

  projects: [],

  links: {
    linkedin: "",
    github: "",
    portfolio: "",
  },
};

// create url src for image and added to object
image.addEventListener("change", (e) => {
  imageVal = URL.createObjectURL(e.target.files[0]);
  cvData.personal.image = imageVal;
  inputImg.textContent = e.target.files[0].name;
});

function sheowErr() {
  errors.style.scale = "1";
}
function closeErr() {
  errors.style.scale = "0";
}
// added some data to bject
createCv.addEventListener("click", () => {
  if (!userName.value.trim()) {
    userName.classList.add("err");
    userName.focus();
    errosText.innerHTML = "الاسم مطلوب";
    sheowErr();
    return;
  } else if (!jobTitle.value.trim()) {
    jobTitle.classList.add("err");
    jobTitle.focus();
    errosText.innerHTML = "المسمى الوطيفي مطلوب";
    sheowErr();
    return;
  } else if (!mail.value.trim()) {
    mail.classList.add("err");
    mail.focus();
    errosText.innerHTML = "البريد الالكتروني مطلوب";
    sheowErr();
    cvPrevCon.style.display = 'none'
    return;
  } else {
    displayData();
    cvPrevCon.style.display = 'block'
    //   cvData = {
    //   personal: {
    //     name: "",
    //     jobTitle: "",
    //     email: "",
    //     phone: "",
    //     location: "",
    //     image: "",
    //   },

    //   about: "",

    //   education: [],

    //   experience: [],

    //   skills: [],

    //   languages: [],

    //   projects: [],

    //   links: {
    //     linkedin: "",
    //     github: "",
    //     portfolio: "",
    //   },
    // }
  }
});

// add education data to object
addDegree.addEventListener("click", () => {
  let degreeVal = degree.value.trim();
  let universityVal = university.value.trim();
  // let majorVal = major.value.trim().toLowerCase();
  let startYearVal = startYear.value.trim();
  let endYearVal = endYear.value.trim();
  if (degreeVal && universityVal && startYearVal && endYearVal) {
    cvData.education.push({
      degree: degreeVal,
      university: universityVal,
      // major: majorVal,
      startYear: startYearVal,
      endYear: endYearVal,
    });
    displayEducation();
    checkEducationItem();
    closeErr();
    degree.value = "";
    university.value = "";
    startYear.value = "";
    endYear.value = "";
  } else {
    sheowErr();
    errosText.textContent = "لا يمكن إضافة مؤهل والحقول فارغة !!";
  }
});

// display education data to html body
function displayEducation() {
  let box = "";
  cvData.education.forEach((edu, i) => {
    box += `
        <div>
        <h3>${i + 1}</h3>
        <p><strong>المؤهل الدراسي :</strong> <span>${edu.degree}</span></p>
        <p><strong>الجامعة / المؤسسة التعليمية :</strong> <span>${edu.university}</span></p>
        
        <p><strong>تاريخ البدء :</strong> <span>${edu.startYear}</span></p>
        <p><strong>تاريخ الانتهاء :</strong> <span>${edu.endYear}</span></p>
        <button onclick='delEdu(${i})' class="btnDel"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
  });
  prevEdu.innerHTML = box;
}
// delete one item education data from html body
function delEdu(i) {
  cvData.education.splice(i, 1);
  displayEducation();
  checkEducationItem();
}
// add experience data to object
addEx.addEventListener("click", () => {
  let jobTitleExVal = jobTitleEx.value.trim();
  let companyNameVal = companyName.value.trim();
  let startYearExVal = startYearEx.value.trim();
  let endYearExVal = endYearEx.value.trim();
  let descriptionJobVal = descriptionJob.value.trim();

  if (
    (jobTitleExVal && companyNameVal && startYearExVal && endYearExVal) ||
    descriptionJobVal
  ) {
    cvData.experience.push({
      jobTitle: jobTitleExVal,
      company: companyNameVal,
      startDate: startYearExVal,
      endDate: endYearExVal,
      description: descriptionJobVal,
    });
    displayExperience();
    checkExperienceItem();
    closeErr();
  } else {
    sheowErr();
    errosText.textContent = "لا يمكن إضافة خبرة والحقول فارغة !!";
  }
});
// display experience data to html body
function displayExperience() {
  let box = "";
  cvData.experience.forEach((edu, i) => {
    box += `
        <div>
        <h3>${i + 1}</h3>
        <p><strong>المهنة :</strong> <span>${edu.jobTitle}</span></p>
        <p><strong>الشركة / اسم مكان العمل :</strong> <span>${edu.company}</span></p>
        <p><strong>تاريخ البدء :</strong> <span>${edu.startDate}</span></p>
        <p><strong>تاريخ الانتهاء :</strong> <span>${edu.endDate}</span></p>
        <button onclick='delEx(${i})' class="btnDel"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
  });
  prevEx.innerHTML = box;
}
// delete one item experience data from html body
function delEx(i) {
  cvData.experience.splice(i, 1);
  displayExperience();
  checkExperienceItem();
}

// add skills data to object
skillBtn.addEventListener("click", () => {
  let skillVal = skills.value.trim().toLowerCase();

  if (skillVal) {
    cvData.skills.push(skillVal);
    displaySkills();
    checkSkillsItem();
    closeErr();
  } else {
    errosText.textContent = "لا يمكن إضافة مهارة والحقل فارغ !!";
    sheowErr();
  }
});

// display skills data to html body
function displaySkills() {
  let box = "";
  cvData.skills.forEach((skill, i) => {
    box += `
        <li><button onclick = 'delskill(${i})' class="btnDel"><i class="fa-solid fa-trash"></i></button> ${skill}</li>
        `;
  });
  prevSkills.innerHTML = box;
}
// delete one item skills data from html body
function delskill(i) {
  cvData.skills.splice(i, 1);
  displaySkills();
  checkSkillsItem();
}

// add language data to object
addlang.addEventListener("click", () => {
  let langVal = language.value.trim();
  let langLevelVal = Number(languageLevel.value);
  if (langLevelVal > 100 || langLevelVal < 0) {
    sheowErr();
    errosText.textContent = "يرجى ادخال رقم ما بين [ 0 - 100 ] !!";
    languageLevel.focus();
    languageLevel.classList.add("err");
    return;
  }
  cvData.languages.push({
    language: langVal,
    level: langLevelVal,
  });
  displayLanguage();
  checkLanguagesItem();
  closeErr()
    languageLevel.classList.remove("err");
});

// display language data to html body
function displayLanguage() {
  let box = "";
  cvData.languages.forEach((lang, i) => {
    box += `
        <div>
        <h3>${i + 1}</h3>
        <p><strong>اللغة :</strong> <span>${lang.language}</span></p>
        <p><strong>المستوى :</strong> <span>${lang.level}%</span></p>
        <button onclick='delLang(${i})' class="btnDel"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
  });
  prevLang.innerHTML = box;
}
// delete one item language data from html body
function delLang(i) {
  cvData.languages.splice(i, 1);
  displayLanguage();
  checkLanguagesItem();
}

// add projects data to object
addPro.addEventListener("click", () => {
  let proNameVal = proName.value.trim();
  let descriptionProVal = descriptionPro.value.trim() 
  let liveUrlVal = liveUrl.value.trim() ;
  let githubUrlVal = githubUrl.value.trim() ;
  if (!proNameVal) {
    sheowErr()
    errosText.textContent = "لا يمكن إضافة مشروع والحقول فارغة !!";
    return
  }
  cvData.projects.push({
    name: proNameVal,
    description: descriptionProVal,
    liveUrl: liveUrlVal,
    githubUrl: githubUrlVal,
  });
  checkProjectsItem();
  displayProjects();
  closeErr()
});

// display projects data to html body
function displayProjects() {
  let box = "";
  cvData.projects.forEach((pro, i) => {
    box += `
        <div>
        <h3>${i + 1}</h3>
        <p><strong>اسم المشروع :</strong> <span>${pro.name}</span></p>
        <p><strong>وصف المشروع :</strong> <span>${pro.description}</span></p>
        <p><strong>المعاينة :</strong> <a style='color : var(--primary)' target="_blank" href='${pro.liveUrl}'>${liveUrl.value ? 'رابط المعاينة' : "لم يتم إضافة رابط المعاينة"}</a></p>
        <p><strong>المشروع :</strong> <a style='color : var(--primary)' target="_blank" href='${pro.githubUrl}'>${liveUrl.value ? 'رابط المشروع' : "لم يتم إضافة رابط الجيت هب"}</a></p>
        <button onclick='delPro(${i})' class="btnDel"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
  });
  prevPro.innerHTML = box;
}
// delete one item projects data from html body
function delPro(i) {
  cvData.projects.splice(i, 1);
  displayProjects();
  checkProjectsItem();
}
let linksText = document.createElement("h3");

let skillsText = document.createElement("h3");

selectedLang.addEventListener("change", () => {
  if (cvData.about != "") {
    displayAboutData();
  }
  if (cvData.experience.length > 0) {
    displayExData();
  }
  if (cvData.projects.length > 0) {
    displayProData();
  }
  if (cvData.education.length > 0) {
    displayEduData();
  }
  if (cvData.languages.length > 0) {
    displayLangData();
  }
  if (cvData.skills.length > 0) {
    displaySkillsData();
  }
  if (cvData.links) {
    displayLinksData();
  }
  selectedLang.value === "arabic"
    ? (cvPrevCon.style.direction = "rtl")
    : selectedLang.value === "english"
      ? (cvPrevCon.style.direction = "ltr")
      : (cvPrevCon.style.direction = "rtl");
});

function displayAboutData() {
  if (cvData.about) {
    aboutPreview.innerHTML = `
      ${selectedLang.value === "arabic" ? `<h3>الخبرات العملية</h3>` : `<h3>About Me</h3>`}
          <p>
${cvData.about}
          </p>
  `;
  } else {
    aboutPreview.style.display = "none";
  }
}
function displayExData() {
  let boxExper = "";
  cvData.experience.forEach((ele) => {
    boxExper += `
            <article class="experience-item">

            <div class="item-head">

              <div>
                <h4>${ele.jobTitle}</h4>
                <span class="company">
                  ${ele.company}
                </span>
              </div>

              <span class="date">
                ${ele.startDate} - ${ele.endDate}
              </span>

            </div>

            <p>
             ${ele.description}
            </p>

          </article>
            `;
  });
  cvData.experience.length === 0
    ? (preveviewExperinse.style.display = "none")
    : (preveviewExperinse.style.display = "block");
  preveviewExperinse.innerHTML = `
          ${selectedLang.value === "arabic" ? `<h3>الخبرات العملية</h3>` : `<h3>Experiences</h3>`}

${boxExper}`;
}
function displayProData() {
  let boxPro = "";
  cvData.projects.forEach((ele) => {
    boxPro += `
            <article class="project-item">

            <div class="item-head">
              <h4>${ele.name}</h4>
            </div>

            <p>
             ${ele.description}
            </p>

            <div class="project-links">
              <a href="${ele.liveUrl}">المعاينة</a>
              <a href="${ele.githubUrl}">GitHub</a>
            </div>

          </article>
            `;
  });
  cvData.projects.length === 0
    ? (projectsPreview.style.display = "none")
    : (projectsPreview.style.display = "block");
  projectsPreview.innerHTML = `
          ${selectedLang.value === "arabic" ? `<h3>المشاريع</h3>` : `<h3>Projects</h3>`}
${boxPro}`;
}

function displayEduData() {
  let boxEdu = "";
  cvData.education.forEach((ele) => {
    boxEdu += `
            <div class="education-item">

            <h4>
             ${ele.degree}
            </h4>

            <p class="company">
             ${ele.university}
            </p>

            <span class="date">
              ${ele.startYear} - ${ele.endYear}
            </span>

          </div>
            `;
  });
  cvData.education.length === 0
    ? (eduPreview.style.display = "none")
    : (eduPreview.style.display = "block");
  eduPreview.innerHTML = `
          ${selectedLang.value === "arabic" ? `<h3>التعليم</h3>` : `<h3>Education</h3>`}
          
${boxEdu}`;
}

function displayLangData() {
  let boxLang = "";
  cvData.languages.forEach((ele) => {
    boxLang += `
 <div class="language">

            <div>
              <span>${ele.language}</span>
            </div>

            <div class="progress">
              <span style="width: ${ele.level}%;"></span>
            </div>

          </div>

            `;
  });
  cvData.languages.length === 0
    ? (preveviewLanguage.style.display = "none")
    : (preveviewLanguage.style.display = "block");
  preveviewLanguage.innerHTML = `
          ${selectedLang.value === "arabic" ? `<h3>اللغات</h3>` : `<h3>Languaes</h3>`}
${boxLang}`;
}

function displaySkillsData() {
  skillsText.textContent =
    selectedLang.value === "arabic" ? `المهارات` : `Skills`;

  let boxSkills = "";
  cvData.skills.forEach((ele) => {
    boxSkills += `
            <li>${ele}</li>
            `;
  });
  cvData.skills.length === 0
    ? (skillsPreview.style.display = "none")
    : `
${(skillsPreviewUl.innerHTML = boxSkills)}
    ${skillsPreview.prepend(skillsText)}
`;
}

function displayLinksData() {
  linksText.textContent = selectedLang.value === "arabic" ? `الروايط` : `Links`;

  cvData.links.linkedin != "" ||
  cvData.links.github != "" ||
  cvData.links.portfolio != ""
    ? checkLinksLength.prepend(linksText)
    : "";
  linksPrev.innerHTML = `
          ${
            cvData.links.linkedin
              ? `
            <a href="${cvData.links.linkedin}">
              <i class="fa-brands fa-linkedin"></i>
              ${cvData.links.linkedin}
            </a>
            `
              : ""
          }

            ${
              cvData.links.github
                ? `
            <a href="${cvData.links.github}">
              <i class="fa-brands fa-github"></i>
              ${cvData.links.github}
            </a>
            `
                : ""
            }
        
            ${
              cvData.links.portfolio
                ? `
            <a href="${cvData.links.portfolio}">
              <i class="fa-solid fa-globe"></i>
              ${cvData.links.portfolio}
            </a>
            `
                : ""
            }

`;
}

function displayData() {
  let userNameVal = userName.value.trim();
  let jobTitleVal = jobTitle.value.trim();
  let mailVal = mail.value.trim().toLowerCase();
  let telVal = tel.value.trim();
  let locationVal = locationTitle.value.trim();
  let linkedinVal = linkedin.value.trim();
  let githubVal = github.value.trim();
  let portfoliotVal = portfolio.value.trim();
  let aboutVal = about.value.trim();

  cvData.personal.name = userNameVal;
  cvData.personal.jobTitle = jobTitleVal;
  cvData.personal.email = mailVal;
  cvData.personal.phone = telVal;
  cvData.personal.location = locationVal;
  cvData.about = aboutVal;
  cvData.links.linkedin = linkedinVal;
  cvData.links.github = githubVal;
  cvData.links.portfolio = portfoliotVal;

  cvData.personal.image
    ? `${(previewDataImage.innerHTML = `<img src="${cvData.personal.image}" alt=${cvData.personal.name}>`)} 
 ${(previewDataImage.style.display = "block")}
`
    : (previewDataImage.style.display = "none");

  previewProfileData.innerHTML = `
          <h1>${cvData.personal.name}</h1>
          <h2>${cvData.personal.jobTitle}</h2>

          <div class="contact">

            <span>
              <i class="fa-solid fa-envelope"></i>
              ${cvData.personal.email}
            </span>

            ${
              cvData.personal.phone
                ? `<span>
              <i class="fa-solid fa-phone"></i>
              ${cvData.personal.phone}
            </span>`
                : ""
            }

            ${
              cvData.personal.location
                ? `<span>
              <i class="fa-solid fa-location-dot"></i>
              ${cvData.personal.location}
            </span>`
                : ""
            }
           

          </div>
`;
  displayAboutData();

  displayExData();

  displayProData();

  displayEduData();

  displayLangData();

  displaySkillsData();

  displayLinksData();
}

function checkEducationItem() {
  if (cvData.education.length == 0) {
    prevEdu.style.display = "none";
  } else {
    prevEdu.style.display = "block";
  }
}
function checkExperienceItem() {
  if (cvData.experience.length == 0) {
    prevEx.style.display = "none";
  } else {
    prevEx.style.display = "block";
  }
}
function checkSkillsItem() {
  if (cvData.skills.length == 0) {
    prevSkills.style.display = "none";
  } else {
    prevSkills.style.display = "block";
  }
}
checkSkillsItem();
function checkProjectsItem() {
  if (cvData.projects.length == 0) {
    prevPro.style.display = "none";
  } else {
    prevPro.style.display = "block";
  }
}
function checkLanguagesItem() {
  if (cvData.languages.length == 0) {
    prevLang.style.display = "none";
  } else {
    prevLang.style.display = "block";
  }
}

function validationBlur(input) {
  if (input.value == "") {
    input.classList.add("err");
    sheowErr();
    errosText.innerHTML = input.dataset.err;
  }
}
function validationChange(input) {
  if (input.value != "") {
    input.classList.remove("err");
    closeErr();
    errosText.innerHTML = "";
  }
}

let btnPrint = document.querySelector(".btnPrint");
btnPrint.addEventListener("click", () => {
  window.print();
});

// templates 

let templates = document.querySelectorAll('.templates .box')
let templatesImages = document.querySelectorAll('.templates .box img')
let imageShowCon = document.querySelector('.imageShow')
let imageShow = document.querySelector('.imageShow img')
let closeImgShow = document.querySelector('#closeImgShow')

templates.forEach((temp) => {
  temp.addEventListener('click', () => {

    cvPrevCon.classList.remove('temp-1', 'tem-2', 'temp-3')
    cvPrevCon.classList.add(temp.dataset.temp)

    templates.forEach((item) => {
      item.classList.remove('active')
    })

    temp.classList.add('active')
  })
})

templatesImages.forEach((img)=>{
  img.addEventListener('click' , ()=>{
  imageShowCon.style.scale = '1'
  imageShow.src = img.src
  })
})

closeImgShow.addEventListener('click' , ()=>{
  imageShowCon.style.scale = '0'
})
