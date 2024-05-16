function calculateLuckyNumber() {
    var numberInput = document.getElementById("numberInput").value;
    var luckyNumberResult = document.getElementById("luckyNumberResult");

    if (numberInput.trim() === "") { 
        luckyNumberResult.textContent = "Please enter a number.";
    } else {
        var number = parseInt(numberInput);
        var result = number % 9 === 0 ? 9 : number % 9;
        luckyNumberResult.innerHTML = "<i>Lucky number is: " + result + "</i>";
    }
}

/***************************************************/
            /* copied from google */
    /* this function for userfriendly purpose*/
/**************************************************/
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        var numberInput = document.getElementById("numberInput").value;
        if (numberInput.trim().length === 4) {
            calculateLuckyNumber();
        }
    }
}