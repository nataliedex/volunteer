// Edit the About me and Image section for the user
export function toggleEdit(sectionId){
  const section = document.getElementById(sectionId);
  const currentElement = section.querySelector(".current-content");
  const editButton = section.querySelector(".edit-button");
  const editForm = section.querySelector(".edit-form");

  if(currentElement && editButton && editForm) {
    currentElement.style.display = "block";
    editButton.style.display = "block";
    editForm.style.display = "block";
  }
}

export function exitEdit(sectionId) {
  const section = document.getElementById(sectionId);
  const currentElement = section.querySelector(".current-content");
  const editButton = section.querySelector(".edit-button");
  const editForm = section.querySelector(".edit-form");

  if (currentElement && editButton && editForm) {
    currentElement.style.display = "block";
    editButton.style.display = "block";
    editForm.style.display = "none";
  }
}

document.querySelectorAll(".section").forEach((section) => {
  const sectionId = section.id;
  const editButton = section.querySelector(".edit-button");
  const exitButton = section.querySelector(".exit-edit-button");

  if(editButton){
    editButton.addEventListener("click", () => toggleEdit(sectionId));
  }
  if(exitButton){
    exitButton.addEventListener("click", () => exitEdit(sectionId));
  }
});

