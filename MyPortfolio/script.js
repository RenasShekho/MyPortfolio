const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


var ContentHeight;
   var AboutHeight;
   var ContactHeight;

   document.onreadystatechange = () => {

      if (document.readyState == "complete") {


         ContentHeight = document.getElementById("Content").style.height;
         AboutHeight = document.getElementById("About").style.height;
         ContactHeight = document.getElementById("Contact").style.height;

      }
   }


   function SelectPart(PartNumber) {
      document.getElementById("ContentTest").classList.remove("active");
      document.getElementById("AboutTest").classList.remove("active");
      document.getElementById("Contacttest").classList.remove("active");
     
      document.getElementById("Content").style.height = 0;
      document.getElementById("About").style.height = 0;
      document.getElementById("Contact").style.height = 0;

      document.getElementById("Content").style.visibility = "collapse";
      document.getElementById("About").style.visibility = "collapse";
      document.getElementById("Contact").style.visibility = "collapse";

      if (1 == PartNumber) {
         document.getElementById("ContentTest").classList.add("active");
         document.getElementById("Content").style.visibility = "visible";
         document.getElementById("Content").style.height = ContentHeight;
      }

      if (2 == PartNumber) {
         document.getElementById("AboutTest").classList.add("active");
         document.getElementById("About").style.visibility = "visible";
         document.getElementById("About").style.height = AboutHeight;
      }
      if (3 == PartNumber) {
        document.getElementById("Contacttest").classList.add("active");
        document.getElementById("Contact").style.visibility = "visible";
        document.getElementById("Contact").style.height = ContactHeight;
     }
    }

//close nav bar when any items are clicked.
    const menuLinks = document.querySelectorAll('nav ul li a');

    // add a click event listener to each menu item link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        // get the checkbox element
        const checkbox = document.getElementById('check');
  
        // if the checkbox is checked, toggle its state to uncheck it
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });