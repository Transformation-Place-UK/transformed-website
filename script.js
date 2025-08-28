const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

$(document).ready(function() {
   $(".navbar ul li.disabled a").click(function() {
     return false;
   });
});