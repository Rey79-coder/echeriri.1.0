const sequelize = require('../config/connection');
const stylesheet = require('./css/style.css')

myStorage = window.localStorage;

// STICKY HEADER / When the user scrolls the page, execute myFunction
window.onscroll = function() {Contact()};

// Get the header
var Contact = document.getElementById("contact-us");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Contact() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
}}

app.use(express.static(__dirname + '/public'));

module.exports = Contact;