// hide and show navigation menu
function ddHandler() {
  document.getElementById("navDropdown").classList.toggle("show");
}

// close when clicking outside menu
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document. getElementsByClassName("nav-dd-content");
    var i;
    for (i=0; i<dropdowns.length; i++) {
      var opendropdown = dropdowns[i];
      if (opendropdown.classList.contains('show')) {
        opendropdown.classList.remove('show');
      }
    }
  }
}