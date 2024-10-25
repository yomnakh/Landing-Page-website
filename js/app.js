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
 * Define Global Variables
 */
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");


// build the nav
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
// Add class 'active' to section when near top of viewport
const navLists = document.querySelectorAll(".menu__link");

// Function to Make Sections Active
function makeActive() {

  let currentSection = null;

  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const value = 150;
    // Check if the section is in the viewport using top and bottom values
    if (box.top <= value && box.bottom >= value) {
      // Add active state to current section
      currentSection = section;
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
document.addEventListener('DOMContentLoaded', makeActive);

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

//Hide fixed navigation bar while not scrolling
let hideNav;
window.addEventListener("scroll", () => {
  // Show the navigation bar when scrolling starts
  navbarList.style.top = "0";

  navbarList.style.display = "block";
  clearTimeout(hideNav);
  hideNav = setTimeout(function () {
    navbarList.style.display = "none";
  }, 800);
});

// To The Top Button when scrolling using onScroll
const top__btn = document.querySelector(".top-btn");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    top__btn.style.display = "block";
  } else {
    top__btn.style.display = "none";
  }
};
top__btn.addEventListener("click", () => {

  window.scrollTo({ top: 0, behavior: "smooth" }); 
});
