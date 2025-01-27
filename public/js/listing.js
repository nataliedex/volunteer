const editButton = document.getElementById("listing-edit");
const saveButton = document.getElementById("save-edit");
const exitButton = document.getElementById("exit-edit");

const descriptionField = document.getElementById("listing-description");
const locationField = document.getElementById("listing-location");
const dateField = document.getElementById("listing-date");

let originalValues = {};

// Function to create input fields dynamically
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
  textarea.value = value || "";  // Pre-fill with value
  textarea.className = "form-control";
  return textarea;
}

// Capture the current values before entering edit mode
function captureOriginalValues() {
  originalValues = {
    description: descriptionField.textContent.trim(),
    location: locationField.textContent.trim(),
    date: dateField.textContent.trim(),
  };
}

// Enter edit mode
editButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  // Capture original values before editing
  captureOriginalValues();

  // Replace <p> elements with input fields
  descriptionField.replaceWith(createTextarea("description", originalValues.description));
  locationField.replaceWith(createInput("location", "text", originalValues.location));
  dateField.replaceWith(createInput("date", "date", originalValues.date));

  // Toggle button visibility
  editButton.style.display = "none";
  saveButton.style.display = "block";
  exitButton.style.display = "block";
});

// Exit edit mode without saving
exitButton.addEventListener("click", (event) => {
  event.preventDefault();

// Revert to original <p> elements with captured values
const newDescription = document.getElementById("description-field");
const newLocation = document.getElementById("location-field");
const newDate = document.getElementById("date-field");

descriptionField.textContent = originalValues.description;
locationField.textContent = originalValues.location;
dateField.textContent = originalValues.date;

newDescription.replaceWith(descriptionField);
newLocation.replaceWith(locationField);
newDate.replaceWith(dateField);

// Toggle button visibility
editButton.style.display = "block";
saveButton.style.display = "none";
exitButton.style.display = "none";
});

// Save changes
saveButton.addEventListener("click", (event) => {
event.preventDefault();

// Get updated values
const updatedDescription = document.getElementById("description-field").value;
const updatedLocation = document.getElementById("location-field").value;
const updatedDate = document.getElementById("date-field").value;

// Update the original values
originalValues.description = updatedDescription;
originalValues.location = updatedLocation;
originalValues.date = updatedDate;

// Optionally, submit the form or send updated values to the server
const form = document.getElementById("update-listing-form");
const formData = new FormData(form);
formData.set("description", updatedDescription);
formData.set("location", updatedLocation);
formData.set("date", updatedDate);

// Toggle button visibility
editButton.style.display = "block";
saveButton.style.display = "none";
exitButton.style.display = "none";

// Submit the form if needed
form.submit();
});


