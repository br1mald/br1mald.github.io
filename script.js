document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the closest parent .toggle-container from the clicked button
      const toggleContainer = this.closest(".toggle-container");

      if (toggleContainer) {
        // Find the .toggle-content within THIS specific toggle-container
        const content = toggleContainer.querySelector(".toggle-content");

        if (content) {
          content.classList.toggle("active"); // Toggle visibility of content
          this.classList.toggle("rotated"); // Toggle arrow rotation
        }
      }
    });
  });
});
