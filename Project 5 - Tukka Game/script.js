let msg = document.querySelector("p");
let btn = document.getElementById("check");
let number = Math.floor(Math.random() * 100);
let count = 7;

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(count);
    count--;
    if (count == 0) {
        console.log("qwerrty");
        msg.innerText = "Game Over";
    }

    let input = document.querySelector("input");
    let inputValue = input.value;
    if (inputValue == "") {
        msg.innerText = "Choose a Number";
    }

    else if (inputValue == number) {
        msg.innerText = "Correct";

    }

    else if (inputValue >= number) {
        msg.innerText = "Too High";
    }

    else {
        msg.innerText = "Too Low";
    }
    input.value = "";
});