var timesClicked = 0;
var numClickRng = 0;
var defButton = document.createElement('button');

function nice() {
    if (numClickRng == 1) {
        defButton.style.filter = "blur(10px)"
        setTimeout(() =>{
        defButton.style.filter = "none"
        }, 50)
       
    }
}

defButton.style.width = '70%';
defButton.style.height = '70%';
defButton.style.fontSize = '10vw';
defButton.style.backgroundColor = "#5a485fff";
defButton.style.borderColor = "#ffffffff";
defButton.style.borderRadius = "1vw";
defButton.style.borderWidth = "1vw";
defButton.style.color = "#ffffff";
defButton.style.position = 'absolute';
defButton.style.top = '50%';
defButton.style.left = '50%';
defButton.style.transform = 'translate(-50%, -50%)';
defButton.textContent = timesClicked;

document.body.append(defButton);

defButton.addEventListener('click', () => {
    numClickRng = 1
    timesClicked += numClickRng;
    defButton.textContent = timesClicked;
    nice();
    
})

if (timesClicked == 10000) {
    alert("you're win!")
}
