document.getElementById("addPetBtn").addEventListener("click", () => {
  const petBox = document.getElementById("petBox");

  // Create a new pet element
  const pet = document.createElement("img");
  pet.src = "assets/images/akita_walk_8fps.gif"; // Replace with your GIF path
  pet.classList.add("pet");

  // Randomize the pet's starting position along the x-axis, but keep it at the bottom of the container
  const randomX = Math.random() * (petBox.clientWidth - 50); // 50 is the pet's width
  pet.style.position = "absolute";
  pet.style.bottom = "0px"; // Keep it at the bottom
  pet.style.transform = `translateX(${randomX}px)`; // Only translate along the x-axis

  // Add the pet to the petBox
  petBox.appendChild(pet);

  // Function to move the pet randomly along the x-axis
  const movePetRandomly = () => {
    const newRandomX = Math.random() * (petBox.clientWidth - 50); // Random new x position
    pet.style.transition = "transform 1s ease-in-out"; // Smooth transition
    pet.style.transform = `translateX(${newRandomX}px)`; // Keep it at the bottom, just move horizontally
  };

  // Move the pet randomly every 2-5 seconds
  setInterval(movePetRandomly, Math.random() * 3000 + 2000); // 2000 to 5000 ms interval
});
