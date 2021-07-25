const sequelize = require('../config/connection');
const stylesheet = require('../public/assets/css/style.css')

myStorage = window.localStorage;

// STICKY HEADER / When the user scrolls the page, execute myFunction
window.onscroll = function() {myHeader()};

// Get the header
var header = document.getElementById("echeriri");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
}}

app.use(express.static(__dirname + '../views/layouts/echeriri.handlebars'));

module.exports = myHeader;