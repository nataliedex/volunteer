const editButton = document.getElementById("listing-edit");
const saveButton = document.getElementById("save-edit");
const exitEdit = document.getElementById("exit-edit");

const form = document.getElementById("update-listing-form");
const displayFields = {
    description: document.getElementById("listing-description"),
    location: document.getElementById("listing-location"),
    date: document.getElementById("listing-date"),
};

let originalValues = {};

// Create dynamic input fields
function createInput(name, type, value) {
    const input = document.createElement("input");
    input.id = `${name}-field`;
    input.name = name;
    input.type = type;
    input.value = value || "";
    input.className = "form-control";
    return input;
}

function createTextarea(name, value) {
    const textarea = document.createElement("textarea");
    textarea.id = `${name}-field`;
    textarea.name = name;
    textarea.value = value || ""; // Pre-fill with value
    textarea.className = "form-control";
    return textarea;
}

// Enter edit mode
editButton.addEventListener("click", (event) => {
    event.preventDefault();

    originalValues = {
        description: displayFields.description.textContent.trim(),
        location: displayFields.location.textContent.trim(),
        date: displayFields.date.textContent.trim(),
    };

    const descriptionInput = createTextarea("description", originalValues.description);
    const locationInput = createInput("location", "text", originalValues.location);
    const dateInput = createInput("date", "date", originalValues.date);

    displayFields.description.replaceWith(descriptionInput);
    displayFields.location.replaceWith(locationInput);
    displayFields.date.replaceWith(dateInput);

    displayFields.description = descriptionInput;
    displayFields.location = locationInput;
    displayFields.date = dateInput;

    editButton.style.display = "none";
    saveButton.style.display = "block";
    exitEdit.style.display = "block";

    console.log("Entered edit mode:", originalValues);
});

// Exit edit mode
exitEdit.addEventListener("click", (event) => {
    event.preventDefault();

    const descriptionInput = document.getElementById("description-field");
    const locationInput = document.getElementById("location-field");
    const dateInput = document.getElementById("date-field");

    descriptionInput.replaceWith(displayFields.description);
    locationInput.replaceWith(displayFields.location);
    dateInput.replaceWith(displayFields.date);

    displayFields.description.textContent = originalValues.description;
    displayFields.location.textContent = originalValues.location;
    displayFields.date.textContent = originalValues.date;

    editButton.style.display = "block";
    saveButton.style.display = "none";
    exitEdit.style.display = "none";

    console.log("exited edit mode");
});

// Save changes
saveButton.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log("Form data to submit:", Object.fromEntries(formData));

    form.submit();
});
