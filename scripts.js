document.getElementById("addPetBtn").addEventListener("click", () => {
  const petBox = document.getElementById("petBox");

  // Array of GIF paths
  const gifPaths = [
    "/assets/images/akita_walk_8fps.gif",
    "/assets/images/green_walk_8fps.gif",
    "/assets/images/red_walk_fast_8fps.gif",
    "/assets/images/warrior_walk_8fps.gif",
  ];

  // Create a new pet element
  const pet = document.createElement("img");

  // Randomly select a GIF path from the array
  const randomGif = gifPaths[Math.floor(Math.random() * gifPaths.length)];
  pet.src = randomGif; // Set the selected GIF as the source
  pet.classList.add("pet");

  // Randomize the pet's starting position along the x-axis, but keep it at the bottom of the container
  let randomX = Math.random() * (petBox.clientWidth - 50); // 50 is the pet's width
  pet.style.position = "absolute";
  pet.style.bottom = "0px"; // Keep it at the bottom
  pet.style.transform = `translateX(${randomX}px)`; // Only translate along the x-axis
  pet.style.transition = "transform 0.5s ease-in-out"; // Smooth transition for initial movement

  // Add the pet to the petBox
  petBox.appendChild(pet);

  // Store the last known X position to determine the direction
  let lastX = randomX;

  // Function to move the pet randomly along the x-axis with smooth and direction-aware movement
  const movePetRandomly = () => {
    const newRandomX = Math.random() * (petBox.clientWidth - 50); // Random new x position

    // Determine the direction of movement
    if (newRandomX > lastX) {
      // Moving right, face right (no flip)
      pet.style.transform = `translateX(${lastX}px) scaleX(1)`;

      // Move after flip
      setTimeout(() => {
        pet.style.transition = "transform 1s ease-in-out"; // Smooth transition for movement
        pet.style.transform = `translateX(${newRandomX}px) scaleX(1)`;
      }, 500); // Wait for the flip to be applied before moving
    } else {
      // Moving left, face left (flip horizontally)
      pet.style.transform = `translateX(${lastX}px) scaleX(-1)`;

      // Move after flip
      setTimeout(() => {
        pet.style.transition = "transform 1s ease-in-out"; // Smooth transition for movement
        pet.style.transform = `translateX(${newRandomX}px) scaleX(-1)`;
      }, 500); // Wait for the flip to be applied before moving
    }

    // Update lastX to the new position
    lastX = newRandomX;
  };

  // Move the pet randomly every 2-5 seconds
  setInterval(movePetRandomly, Math.random() * 3000 + 2000); // 2000 to 5000 ms interval
});
