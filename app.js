var coll = document.getElementsByClassName("card-title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// A javascript file should be linked at the end of an html file
// Place the <script> tag right before the closing </body> tag. 
// This ensures the HTML content is loaded before the JavaScript runs.