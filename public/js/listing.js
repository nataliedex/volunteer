const editButton = document.getElementById("listing-edit");
const saveButton = document.getElementById("save-edit");
const exitEdit = document.getElementById("exit-edit");

const form = document.querySelector("form[action^='/listing/updateListing']");
const displayFields = {
    description: document.getElementById("listing-description"),
    location: document.getElementById("listing-location"),
    date: document.getElementById("listing-date"),
};

let originalValues = {};

// Create dynamic input fields
function createInput(id, type, value) {
    const input = document.createElement("input");
    input.id = id;
    input.name = id;
    input.type = type;
    input.value = value;
    input.className = "form-control";
    return input;
}

// Enter edit mode
editButton.addEventListener("click", (event) => {
    event.preventDefault();

    originalValues = {
        description: displayFields.description.textContent.trim(),
        location: displayFields.location.textContent.trim(),
        date: displayFields.date.textContent.trim(),
    };

    displayFields.description.replaceWith(createInput("description-field", "text", originalValues.description));
    displayFields.location.replaceWith(createInput("location-field", "text", originalValues.location));
    displayFields.date.replaceWith(createInput("date-field", "date", originalValues.date));

    editButton.style.display = "none";
    saveButton.style.display = "block";
    exitEdit.style.display = "block";
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
});

// Save changes
saveButton.addEventListener("click", (event) => {
    event.preventDefault();

    const descriptionInput = document.getElementById("description-field");
    const locationInput = document.getElementById("location-field");
    const dateInput = document.getElementById("date-field");

    console.log("Submitting form data:", new FormData(form)); 

    form.submit();
});
