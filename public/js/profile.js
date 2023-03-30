let routineDetailsSection = document.getElementById("routine-details");
let workoutTable = document.querySelector("workouts-table-box");
let workoutTableBody = document.getElementById("workout-table-body");
let newWorkoutBtn = document.getElementById("new-workout-btn");
let buttonRow = document.getElementById("button-row");
let saveWorkoutBtn = document.getElementById("save-workout-btn");

function saveWorkout(workout, routine) {
    //TODO: fetch request POSTing new workout to proper route
}

function renderNewWorkoutForm() {
    newWorkoutBtn.disabled = true;
    newWorkoutBtn.classList.replace("add-btn", "disabled-btn");

    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    let nameField = document.createElement("input");
    nameField.setAttribute("placeholder", "Workout Name");
    let descCell = document.createElement("td");
    let descField = document.createElement("input");
    descField.setAttribute("placeholder", "X sets of X reps");
    let deleteCell = document.createElement("td");
    deleteCell.setAttribute("class", "text-center");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = "❌";

    nameCell.appendChild(nameField);
    descCell.appendChild(descField);
    deleteCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(descCell);
    row.appendChild(deleteCell);

    workoutTableBody.appendChild(row);

    nameField.addEventListener("keyup", enableSaveWorkoutBtn);
    descField.addEventListener("keyup", enableSaveWorkoutBtn);

    saveWorkoutBtn.removeAttribute("hidden");
}

function enableSaveWorkoutBtn() {

    saveWorkoutBtn.classList.replace("disabled-btn", "add-btn");

    saveWorkoutBtn.addEventListener("click", handleWorkoutSave);
}

function handleWorkoutSave() {

}

const renderNewRoutineForm = () => {
    routineDetailsSection.style.display = "none";

    let routinesSection = document.getElementById("routines");

    let newRoutineForm = document.createElement("form");

};

function la() {
    console.log("you clicked it");
}

newWorkoutBtn.addEventListener("click", renderNewWorkoutForm);