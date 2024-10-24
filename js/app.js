/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
sections.forEach(function (section) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a class="menu__link" href="#${section.id}" data-nav="${section.id}">${section.dataset.nav}</a>`;
  navbarList.appendChild(listItem);
});

// Navigation button in the smaller screens
const nav__btn = document.querySelector(".navbar__menu-btn");
nav__btn.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active
const navLists = document.querySelectorAll(".menu__link");

// Function to Make Sections Active
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const value = 150;

    // Check if the section is in the viewport using top and bottom values
    if (box.top <= value && box.bottom >= value) {
      // Add active state to current section
      section.classList.add("your-active-class");

      // Find the corresponding navigation link
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active-link");
    } else {
      // Remove active state from sections not in the viewport
      section.classList.remove("your-active-class");

      // Remove active state from corresponding navigation links
      const navLink = document.querySelector(`a[href="#${section.id}"]`);
      navLink.classList.remove("active-link");
    }
  }
}
// Call makeActive() when the user scrolls the page
document.addEventListener("scroll", makeActive);

// Build menu

// Scroll to section on link click
navbarList.addEventListener("click", (evet) => {
  evet.preventDefault();
  console.log(evet.target);

  // Scroll to anchor ID using scrollIntoView event
  if (evet.target.dataset.nav) {
    document
      .getElementById(`${evet.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// To The Top Button when scrolling using onScroll
const top__btn = document.querySelector(".top-btn");

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    top__btn.style.display = "block";
  }else {
    top__btn.style.display = "none";
  }
};
top__btn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
})
b9bdc6d18ca679b9d41ebd0b41d1332
