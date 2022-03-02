var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormBtn = document.querySelector(".form__btn");
var elResult = document.querySelector(".result")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var listOne = [2, 16, 4, 22, 30];
    var listTwo = [1, 9, 33, 13, 17];

    var elInputVal = elFormInput.value;

    if (elInputVal % 2 == 0){
        elResult.textContent = `Bu son juft !`;
        
        console.log(listOne);
        listOne.push(elInputVal);
        console.log(listOne);
        elResult.classList.add("result__two");

    }
    else{
        elResult.textContent = `Bu son toq !`;
        
        console.log(listTwo);
        listTwo.push(elInputVal);
        console.log(listTwo);
        elResult.classList.add("result__two");
    } 
    if (elInputVal <= 0){
        elResult.textContent = `Please enter a number greater than 0 !`
    }
})