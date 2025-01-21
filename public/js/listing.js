const editButton = document.getElementById("listing-edit");
const saveButton = document.getElementById("save-edit");
const exitEdit = document.getElementById("exit-edit");

const editFields= document.querySelectorAll(".listing-edit-field");
const displayFields = {
    description: document.getElementById("listing-description"),
    location: document.getElementById("listing-location"),
    date: document.getElementById("listing-date"),
};

let originalValues = {
    description: document.getElementById("description-field").value,
    location: document.getElementById("location-field").value,
    date: document.getElementById("date-field").value,
};

editButton.addEventListener("click", (event) => {
    event.preventDefault();
    editFields.forEach((field) => {
        field.style.display = "block";
        field.value = originalValues[field.name];
    });

    Object.values(displayFields).forEach((field) => (field.style.display = "none"));
    editButton.style.display = "none";
    saveButton.style.display = "block";
    exitEdit.style.display = "block";
});

exitEdit.addEventListener("click", (event) => {
    event.preventDefault();
    editFields.forEach((field) => {
        field.style.display = "none";
        field.value = "";
    });
    Object.values(displayFields).forEach((field) => (field.style.display = "block"));
    editButton.style.display = "block";
    saveButton.style.display = "none";
    exitEdit.style.display = "none";
});