const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  updateEnrollment(sectionNum, add) {
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if(sectionIndex != -1 && sectionIndex != null && sectionIndex != undefined) {
        if(add === true) {
            this.sections[sectionIndex].enrolled++;
        } else if (add === false) {
            this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
    }
  }
//   enrollstudent(sectionNum) {
//     const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
//     this.sections[sectionIndex].enrolled++;
//     renderSections(this.sections);
//   },
//   dropstudent(sectionNum) {
//     const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
//     this.sections[sectionIndex].enrolled--;
//     renderSections(this.sections);
//   }
};

const renderCourse = (course) => {
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
}

const renderSections = (sections) => {
    const sectionElement = document.getElementById('sections');
    sectionElement.innerHTML = '';
    sections.forEach(section => {
        const row = document.createElement('tr');
        const sectionNum = document.createElement('td');
        sectionNum.textContent = section.sectionNum;
        row.append(sectionNum);
        const roomNum = document.createElement('td');
        roomNum.textContent = section.roomNum;
        row.append(roomNum);
        const numEnrolled = document.createElement('td');
        numEnrolled.textContent = section.enrolled;
        row.append(numEnrolled);
        const days = document.createElement('td');
        days.textContent = section.days;
        row.append(days);
        const instructor = document.createElement('td');
        instructor.textContent = section.instructor;
        row.append(instructor);
        sectionElement.append(row);
    });
}

renderCourse(aCourse);
renderSections(aCourse.sections);

const sectionInput = document.getElementById("sectionNumber");
const enrollmentButton = document.getElementById("enrollStudent");
const dropButton = document.querySelector("#dropStudent");
enrollmentButton.addEventListener('click', (event) => 
    aCourse.updateEnrollment(sectionInput.value, true)
);
dropButton.addEventListener('click', (event) => 
    aCourse.updateEnrollment(sectionInput.value, false)
);