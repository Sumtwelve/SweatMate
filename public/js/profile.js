let routineDetailsSection = document.getElementById("routine-details");
let workoutTable = document.querySelector("workouts-table-box");
let workoutTableBody = document.getElementById("workout-table-body");
let newWorkoutBtn = document.getElementById("new-workout-btn");
let buttonRow = document.getElementById("button-row");
let saveWorkoutBtn = document.getElementById("save-workout-btn");

let nameField = document.createElement("input");
nameField.value = "";
nameField.setAttribute("placeholder", "Workout name");
let descField = document.createElement("input");
descField.value = "";
descField.setAttribute("placeholder", "X sets of X reps");

function renderNewWorkoutForm() {
    newWorkoutBtn.disabled = true;
    newWorkoutBtn.classList.replace("add-btn", "disabled-btn");

    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    //const nameField = document.createElement("input");
    //nameField.setAttribute("placeholder", "Workout Name");
    let descCell = document.createElement("td");
    //let descField = document.createElement("input");
    //descField.setAttribute("placeholder", "X sets of X reps");
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

    //saveWorkoutBtn.addEventListener("click", handleWorkoutSave);
}

const saveWorkout = (workout) =>
        fetch('/api/workout/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(workout),
    });

const getUserID = () => {
        fetch('/api/users/id', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        });
}

function handleWorkoutSave(user_id) {
    
    let workout = {
        title: nameField.value,
        description: descField.value,
        user_id: user_id
    }

    console.log(workout.user_id);

    saveWorkout(workout);
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