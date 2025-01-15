// Edit the About me section for the user
const form = document.getElementById("edit-about-form");
const current = document.getElementById("current-about-me");
const editButton = document.getElementById("about-me-edit-button");
const exitButton = document.getElementById("exit-edit-mode");

export function toggleEdit(){
  current.style.display = "none";
  editButton.style.display = "none";
  form.style.display = form.style.display === "none" ? "block" : "none";
}
export function exitEdit(){
  form.style.display = "none";
  current.style.display = "block";
  editButton.style.display = "block";
}

editButton.addEventListener("click", toggleEdit);
exitButton.addEventListener("click", exitEdit);