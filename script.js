const formContainer = document.querySelector(".formContainer");
const buttonCheck = document.getElementById("buttonCheck");

let isValid = false;

buttonCheck.addEventListener("click", validatePalindrome);

function validatePalindrome(event) {
  event.preventDefault(); //stops the page from reloading instantly
  let formInput = document.getElementById("palindrome").value; //gets the content from the input field
  console.log(formInput);

  const myArr = formInput.split(""); //make an array from the input string
  const reverseArr = myArr.reverse(); //reverse the array
  const reversedFormInput = reverseArr.join(""); //make a string out of the reversed array

  if (formInput === reversedFormInput) {
    //check if the input string and reversed string are the same
    let isPalindrome = document.createElement("p");
    isPalindrome.textContent = `${
      document.getElementById("palindrome").value
    } is a palindrome.`;
    isPalindrome.classList.add("output");
    formContainer.appendChild(isPalindrome);
  } else {
    let isNoPalindrome = document.createElement("p");
    isNoPalindrome.textContent = `${
      document.getElementById("palindrome").value
    } is not a palindrome.`;
    isNoPalindrome.classList.add("output");
    formContainer.appendChild(isNoPalindrome);
  }
}
