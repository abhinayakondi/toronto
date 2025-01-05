// var coll = document.getElementsByClassName("card-title");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// A javascript file should be linked at the end of an html file
// Place the <script> tag right before the closing </body> tag. 
// This ensures the HTML content is loaded before the JavaScript runs.

const collapsible = document.querySelectorAll(".collapsible");

collapsible.forEach((item, index) => {
    let cardTitle = item.querySelector(".card-title");
    cardTitle.addEventListener("click", () =>{
        item.classList.toggle("open");
        let contentBox = item.querySelector(".content-box");
        if(item.classList.contains("open")){
            contentBox.style.height = `${contentBox.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
        }else{
            contentBox.style.height = "0px";
        }
    })
})