const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

//#region Menu1
// -----------Home------------//
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
//---------------------------//
//#endregion Menu1

//#region FAQ_collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.transition = "all 3s";
      content.style.textAlign = "left";
    }
  });
}
//#endregion FAQ_collapsible