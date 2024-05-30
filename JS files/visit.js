
var submit = document.querySelector('.submit');
var date = document.querySelector('#DDate');
var number_of_visitors = document.querySelector('#NOV');
var message = document.querySelector('#message');
var time = document.querySelector("#TTime");
submit.addEventListener('click', click_submit);


console.log(date.value);
function click_submit() {
    if (date.value == "" || number_of_visitors.value.trim()==""){
        event.preventDefault();
        message.innerHTML = 'Data not completed. Please re-enter';
        message.style.color = 'red';
        
    }
    else if (number_of_visitors.value == NaN || number_of_visitors.value == "" || number_of_visitors.value < 1 || Number(Math.floor(number_of_visitors.value)) != Number(number_of_visitors.value)) {
        event.preventDefault();
        message.innerHTML= "Please enter a valid number of people!";
        message.style.color = "red";

    }
    else {
        event.preventDefault();
        if (reserve(date.value,time.value, number_of_visitors.value)){
            alert("Your reservation is successful.");
        }
        else{
            alert("Sorry, the reservation is full");
        }
    }

}