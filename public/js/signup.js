export function toggleSignUpType(value){
    const indivSection = document.getElementById("individual-section");
    const orgSection = document.getElementById("organization-section");

    if(value === "Organization"){
        orgSection.style.display = "block";
        indivSection.style.display = "none";
    } else if(value === "Volunteer"){
        indivSection.style.display = "block";
        orgSection.style.display = "none";
    }
}

document.querySelectorAll('input[type="radio"][name="userType"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        toggleSignUpType(selectedValue);
    });
});