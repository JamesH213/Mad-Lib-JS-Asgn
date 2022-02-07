// Mad Lib with JavaScript by James

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
  // Input 
  let subject = document.getElementById("subject").value;
  let color = document.getElementById("color").value;
  let clothes= document.getElementById("clothes").value;

  // Process
  let result = '"In ' + subject + ' class, our teacher was wearing a '
   + color + ' ' + clothes + '."' ; 

   // Output
  document.getElementById("result").innerHTML = result;
}