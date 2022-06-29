const dropdownMenu = document.getElementById("dropdownMenu");
const notePrefs = document.getElementById("notePrefs");
const deleteOption = document.getElementById("deleteOption");

notePrefs.addEventListener("mouseover", function () {
  dropdownMenu.style.visibility = "visible";
});

window.addEventListener("click", () => {
  dropdownMenu.style.visibility = "hidden";
});

deleteOption.addEventListener("click", () => console.log(deleteOption))