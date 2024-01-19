const switcher = document.querySelector("#switch");
const btnToggle = document.querySelector(".switcher");

function ToggleDarkMode(checkbox) {

  if(checkbox.checked){
    document.body.classList.add("darkMode");
    btnToggle.classList.add("active")
  }else{
    document.body.classList.remove("darkMode");
    btnToggle.classList.remove("active");
  }

  
  
}
switcher.addEventListener("click", () => ToggleDarkMode(switcher));
