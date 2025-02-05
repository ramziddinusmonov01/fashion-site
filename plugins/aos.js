import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1360) {
      AOS.init({ once: true }); // Initialize AOS normally on larger screens
    } else if (screenWidth < 1300) {
      // Initialize AOS with faster animations on smaller screens
      AOS.init({
        once: true, // Animation triggers once
        duration: 200, // Shorten animation duration for faster visibility
        offset: 10, // Trigger as soon as the element appears on the screen
      });
    }
  }
  if (process.client) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 900) {
      AOS.init({ once: true }); // Initialize AOS normally on larger screens
    } else if (screenWidth < 800) {
      // Initialize AOS with faster animations on smaller screens
      AOS.init({
        once: true, // Animation triggers once
        duration: 200, // Shorten animation duration for faster visibility
        offset: -10, // Trigger as soon as the element appears on the screen
      });
    }
  }
});
