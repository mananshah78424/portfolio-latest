document.getElementById("addPetBtn").addEventListener("click", () => {
  const petBox = document.getElementById("petBox");

  // Create a new pet element
  const pet = document.createElement("div");
  pet.classList.add("pet");

  // Randomize the pet's starting position along the x-axis, but keep it at the bottom of the container
  const randomX = Math.random() * (petBox.clientWidth - 50); // 50 is the pet's width

  // Set the initial position of the pet
  pet.style.transform = `translateX(${randomX}px)`; // Only translate along the x-axis

  // Add the pet to the petBox
  petBox.appendChild(pet);

  // Function to move the pet in small steps along the x-axis
  const movePetInSteps = () => {
    const currentX =
      parseFloat(
        pet.style.transform.replace("translateX(", "").replace("px)", "")
      ) || randomX;
    // Randomly decide if the pet moves forward or backward
    const stepSize = Math.random() * 50 - 25; // Random step between -25px to 25px (backward or forward)
    let newRandomX = currentX + stepSize;

    // Ensure the pet doesn't go outside the container
    newRandomX = Math.max(0, Math.min(newRandomX, petBox.clientWidth - 50)); // 50 is the pet's width

    // Move the pet smoothly to the new x position
    pet.style.transform = `translateX(${newRandomX}px)`;
  };

  // Move the pet in small steps every 1-3 seconds
  setInterval(movePetInSteps, Math.random() * 2000 + 1000); // 1000 to 3000 ms interval
});
