const buttonList = document.querySelectorAll("button");
let screen = document.querySelector(".display");

buttonList.forEach((event) => {
    event.addEventListener("click", () => {
        let Id = event.getAttribute("id");
        if (Id === '=')
        {
            let result = eval(screen.innerText);
            screen.innerText = result;
        }

        else if (Id === 'C')
        {
            screen.innerText = "";
        }

        else
        {
            screen.innerText += Id;
        }
    })
})