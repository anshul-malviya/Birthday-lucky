const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");


checkBtn.addEventListener("click",checkBirthdayIsLucky);

function compareValues(sum, luckyNumber){
if(sum, luckyNumber == ""){
    output.innerHTML = "𝐹𝒾𝓁𝓁 𝒯𝒽𝑒 𝒱𝒶𝓁𝓊𝑒𝓈 𝐹𝒾𝓇𝓈𝓉"
}
else{
    if(sum%luckyNumber===0){
        output.innerHTML = "Your Birthday Is lucky🤩";
        }
        else{
          output.innerHTML = "Oops! Your Birthday Is Not lucky😔";
        }
}
}

function checkBirthdayIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob)
  compareValues(sum, luckyNumber.value);
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum=0;
  for(let index=0; index<dob.length; index++){
    sum = sum + Number(dob.charAt(index))
  }
  return sum;
}

