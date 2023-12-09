function toggleMenu() {
    var navList = document.getElementById("navList");
    if (navList.style.display === "flex") {
        navList.style.display = "none";
    } else {
        navList.style.display = "flex";
    }
}

// Close the menu when a link is clicked (for small screens)
var navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var navList = document.getElementById("navList");
        navList.style.display = "none";
    });
});
