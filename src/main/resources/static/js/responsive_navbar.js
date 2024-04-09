// Create logo section
const logoDiv = document.createElement('div'); // Create a div element for logo
logoDiv.classList.add('logo'); // Add 'logo' class to the logo div

// Create logo image section
const logoImgDiv = document.createElement('div'); // Create a div for logo image
logoImgDiv.classList.add('logo-img'); // Add 'logo-img' class to the logo image div
const logoLink = document.createElement('a'); // Create a link for the logo image
logoLink.setAttribute('href', './index.html'); // Set the href attribute of the logo link
const logoImage = document.createElement('img'); // Create an image element for the logo
logoImage.setAttribute('src', './img/logo citi.jpg'); // Set the src attribute for the logo image
logoImage.setAttribute('alt', ''); // Set alt attribute for the logo image
logoLink.appendChild(logoImage); // Append the logo image to the logo link
const logoParagraph = document.createElement('p'); // Create a paragraph element for the logo
logoParagraph.textContent = 'Bank'; // Set text content for the paragraph
logoImgDiv.appendChild(logoLink); // Append the logo link to the logo image div
logoImgDiv.appendChild(logoParagraph); // Append the paragraph to the logo image div

// Create contact section
const logoContactsDiv = document.createElement('div'); // Create a div for logo contacts
logoContactsDiv.classList.add('logo-contacts'); // Add 'logo-contacts' class to the logo contacts div
const phoneParagraph = document.createElement('p'); // Create a paragraph for phone contact
phoneParagraph.innerHTML = '<i class="fa fa-phone"></i> +353899636097'; // Set inner HTML for phone paragraph
const emailParagraph = document.createElement('p'); // Create a paragraph for email contact
emailParagraph.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i> shivparekh803@gmail.com'; // Set inner HTML for email paragraph
logoContactsDiv.appendChild(phoneParagraph); // Append phone paragraph to logo contacts div
logoContactsDiv.appendChild(emailParagraph); // Append email paragraph to logo contacts div

logoDiv.appendChild(logoImgDiv); // Append logo image div to the logo div
logoDiv.appendChild(logoContactsDiv); // Append logo contacts div to the logo div

// Create navigation bar
const navBar = document.createElement('nav'); // Create a nav element for the navigation bar
navBar.classList.add('nav-bar'); // Add 'nav-bar' class to the navigation bar
navBar.setAttribute('id', 'navbar'); // Set id attribute for the navigation bar

const navItemsDiv = document.createElement('div'); // Create a div for navigation items
navItemsDiv.classList.add('nav-items'); // Add 'nav-items' class to the navigation items div

const ulList = document.createElement('ul'); // Create an unordered list for navigation links

// Define navigation links
const navLinks = [
    { href: './index.html', iconClass: 'fa fa-fw fa-home', text: 'Home' },
    { href: '#', iconClass: 'fa fa-fw fa-user', text: 'Customer', dropdownLinks: [
        { href: '/CITIBANK/login', text: 'Login' },
        { href: './user-signup.html', text: 'Create Account' }
    ] },
    { href: './admin-signin.html', iconClass: 'fa fa-user-circle-o', text: 'Admin' },
    { href: './about-us.html', iconClass: 'fa fa-handshake-o', text: 'About' },
    { href: './contact-us.html', iconClass: 'fa fa-address-book', text: 'Contact Us' },
    { href: './gallery.html', iconClass: 'fa fa-picture-o', text: 'Gallery' }
];

// Create navigation links dynamically
navLinks.forEach(navLink => {
    const liItem = document.createElement('li'); // Create an li element for each navigation item
    const aLink = document.createElement('a'); // Create a link for the navigation item
    aLink.setAttribute('href', navLink.href); // Set href attribute for the link
    const iIcon = document.createElement('i'); // Create an icon element for the navigation item
    iIcon.setAttribute('class', navLink.iconClass); // Set class attribute for the icon
    aLink.appendChild(iIcon); // Append the icon to the link
    aLink.innerHTML += ` ${navLink.text}`; // Set text content for the link
    liItem.appendChild(aLink); // Append the link to the list item

    // If there are dropdown links, create dropdown menu
    if (navLink.dropdownLinks) {
        liItem.classList.add('dropdown'); // Add 'dropdown' class to the list item
        const dropDownDiv = document.createElement('div'); // Create a div for dropdown content
        dropDownDiv.classList.add('dropdown-content'); // Add 'dropdown-content' class to the dropdown div
        navLink.dropdownLinks.forEach(dropdownLink => {
            const aDropDownLink = document.createElement('a'); // Create a link for each dropdown item
            aDropDownLink.setAttribute('href', dropdownLink.href); // Set href attribute for the link
            aDropDownLink.textContent = dropdownLink.text; // Set text content for the link
            dropDownDiv.appendChild(aDropDownLink); // Append the link to the dropdown div
        });
        liItem.appendChild(dropDownDiv); // Append the dropdown div to the list item
    }

    ulList.appendChild(liItem); // Append the list item to the unordered list
});

navItemsDiv.appendChild(ulList); // Append the unordered list to the navigation items div

const userLoginButton = document.createElement('button'); // Create a button for user login
userLoginButton.textContent = 'User Login'; // Set text content for the button

navBar.appendChild(navItemsDiv); // Append navigation items div to the navigation bar
navBar.appendChild(userLoginButton); // Append the user login button to the navigation bar

// Append elements to the body or wherever you wish
document.body.appendChild(logoDiv); // Append logo div to the body
document.body.appendChild(navBar); // Append navigation bar to the body

// Sticky Navigation Bar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar"); // Get the navbar
var sticky = navbar.offsetTop; 

// Sticky navigation bar functionality
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
