"use strict";

const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLElement;

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Retrieve input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const passingYear = (document.getElementById("passingYear") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const photoFile = (document.getElementById("photo") as HTMLInputElement).files?.[0];

    // Populate the resume display
    (document.getElementById("displayName") as HTMLElement).textContent = name;
    (document.getElementById("displayEmail") as HTMLElement).textContent = email;
    (document.getElementById("displayPhone") as HTMLElement).textContent = phone;
    (document.getElementById("displayAddress") as HTMLElement).textContent = address;
    (document.getElementById("displayInstitution") as HTMLElement).textContent = `${degree} from ${institution}, ${passingYear}`;
    (document.getElementById("displaySkills") as HTMLElement).textContent = skills;
    (document.getElementById("displayExperience") as HTMLElement).textContent = experience;

    if (photoFile) {
        const photoBase64 = await fileToBase64(photoFile);
        (document.getElementById("displayPhoto") as HTMLImageElement).src = photoBase64;
    }

    form.classList.add("hidden");
    resumeDisplay.classList.remove("hidden");
});

document.getElementById("editButton")?.addEventListener("click", () => {
    form.classList.remove("hidden");
    resumeDisplay.classList.add("hidden");
});

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
    });
};
