const students = [ 
    { name: "Antoine", phone: "0601020304", address: "Paris", email: "antoine@mail.com", gender: "M", diploma: "Bac" },
    { name: "Lucas", phone: "0611121314", address: "Lyon", email: "lucas@mail.com", gender: "M", diploma: "Licence" },
    { name: "Lucie", phone: "0621222324", address: "Marseille", email: "lucie@mail.com", gender: "F", diploma: "Master" },
    { name: "Malik", phone: "0631323334", address: "Toulouse", email: "malik@mail.com", gender: "M", diploma: "BTS" },
    { name: "Juliette", phone: "0641424344", address: "Nice", email: "juliette@mail.com", gender: "F", diploma: "Doctorat" }
];

let currentIndex = 0;

const studentList = document.querySelector(".eleve-list");
const inputs = document.querySelectorAll(".details input");
const studentName = inputs[0];
const addressInput = inputs[1];
const phoneInput = inputs[2];
const emailInput = inputs[3];
const genderInput = inputs[4];
const diplomaInput = inputs[5];
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const searchBar = document.querySelector(".search-bar");

function displayStudent(index) {
    let student = students[index];
    studentName.value = student.name;
    addressInput.value = student.address;
    phoneInput.value = student.phone;
    emailInput.value = student.email;
    genderInput.value = student.gender;
    diplomaInput.value = student.diploma;
}

function populateStudentList() {
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        let button = document.createElement("button");
        button.classList.add("student");
        button.textContent = `${student.name} - ELEVE`;
        button.addEventListener("click", () => {
            currentIndex = index;
            displayStudent(index);
        });
        studentList.appendChild(button);
    });
}

searchBar.addEventListener("input", function () {
    let filter = searchBar.value.toLowerCase();
    let buttons = studentList.querySelectorAll(".student");
    
    buttons.forEach(button => {
        let text = button.textContent.toLowerCase();
        if (text.includes(filter)) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayStudent(currentIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < students.length - 1) {
        currentIndex++;
        displayStudent(currentIndex);
    }
});

populateStudentList();
displayStudent(currentIndex);
