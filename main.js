document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const panel = this.parentElement.nextElementSibling;
      const radioInput = this.querySelector(".form-check-input");

      if (!panel.classList.contains("show")) {
        // Expand smoothly
        panel.classList.add("show");
        panel.style.display = "block"; // Ensure it's visible before measuring height
        let height = panel.scrollHeight; // Get actual height
        panel.style.height = "0px"; // Set height to zero before transition
        setTimeout(() => {
          panel.style.height = height + "px"; // Transition to full height
        }, 10);

        setTimeout(() => {
          panel.style.height = "auto"; // Reset to auto after transition
        }, 500); // Match transition time

        // Check the radio button and apply styles
        radioInput.checked = true;
        radioInput.style.backgroundColor = "#FF6B82";
        radioInput.style.borderColor = "#FF6B82";
      } else {
        // Collapse smoothly
        let height = panel.scrollHeight; // Get current height
        panel.style.height = height + "px"; // Fix height before collapsing
        setTimeout(() => {
          panel.style.height = "0px";
        }, 10);

        setTimeout(() => {
          panel.classList.remove("show");
          panel.style.display = "none";
        }, 500); // Wait for transition to finish
      }

      // Close other panels smoothly and uncheck other radio buttons
      document.querySelectorAll(".accordion-collapse").forEach((collapse) => {
        if (collapse !== panel) {
          let height = collapse.scrollHeight;
          collapse.style.height = height + "px";
          setTimeout(() => {
            collapse.style.height = "0px";
          }, 10);

          setTimeout(() => {
            collapse.classList.remove("show");
            collapse.style.display = "none";
          }, 500);
        }
      });

      // Reset all other radio buttons' styles
      document.querySelectorAll(".form-check-input").forEach((input) => {
        if (input !== radioInput) {
          input.style.backgroundColor = "";
          input.style.borderColor = "";
        }
      });
    });
  });
});
