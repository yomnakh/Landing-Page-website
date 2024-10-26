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

  // navbarList.classList.toggle("active");
  if (navbarList.style.display === "block") {
    navbarList.style.display = "none";
  } else {
    navbarList.style.display = "block";
  }
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
//Prevent the makeActive function to start on load of the page 
document.addEventListener('DOMContentLoaded', makeActive);

// Build menu

// Scroll to section on link click
navbarList.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);

  // Scroll to anchor ID using scrollIntoView event
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// Hide fixed navigation bar while not scrolling
let hideNav;
window.addEventListener("scroll", () => {
  // Only apply behavior if the screen width is above 768px
  if (window.innerWidth > 1000) {
    navbarList.style.display = "block"; // Always show on scroll
  }

  // Clear the previous hideNav timeout to reset it
  clearTimeout(hideNav);

  // Set a timeout to hide the navbar after scrolling stops
  hideNav = setTimeout(function () {
    if (window.innerWidth > 1000) {
      navbarList.style.display = "none";
    }
  }, 800);
});


// Prevent navbar from hiding when the user hovers over it
navbarList.addEventListener("mouseenter", () => {
  clearTimeout(hideNav); 
  // navbarList.style.display = "block"; // Ensure the navbar is visible
});
navbarList.addEventListener("mouseleave", () => {
  // Set the hide timeout again when the user moves the mouse away
  hideNav = setTimeout(function () {
    if (window.innerWidth > 1000) {
      navbarList.style.display = "none";
    }
  }, 1000);
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
