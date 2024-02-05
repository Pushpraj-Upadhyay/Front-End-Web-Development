let result = 0;
let submit = document.querySelector("#submit");
let msg = document.querySelector("#msg");

submit.addEventListener("click", (evt) => {
    evt.preventDefault();

    let heightData = document.querySelector(".hdata input");
    let weightData = document.querySelector(".wdata input");
    let height = heightData.value;
    let weight = weightData.value;

    result = weight / ((height / 100) ** 2);
    result = parseFloat(result).toFixed(2);
    if (result >= 18.5 && result <= 24.5)
    {
        msg.innerText = `Your Score : ${result} \nYou are Healthy`;
    }
    else if (result > 24.5)
    {
        msg.innerText = `Your Score : ${result} \nYou are Over Weight`;
    }
    else
    {
        msg.innerText = `Your Score : ${result} \nYou are Under Weight`;
    }
});