function validateNumericInput() {
    
 let age_input = document.getElementById('age-value').value;
 let weight_input = document.getElementById('wght-value').value;
 document.getElementById('result').innerHTML =  "";
 let form = document.querySelector('form');

 if(age_input == "") {
     alert("Please enter your age");
     return false;
 }
 else if(weight_input == "") {
     alert("Please enter you weight");
     return false;
 }
 else if(Math.sign(parseInt(age_input)) < 0) {
    alert("Age cannot be negative");
    form.reset();
    return false;
 } 
 else if(Math.sign(parseInt(weight_input)) < 0) {
    alert("Weight cannot be negative");
    form.reset();
    return false;
 } 

return true;
}

function clearResult() {
    document.getElementById('result').innerHTML =  "";
}
