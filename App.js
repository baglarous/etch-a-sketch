const container = document.querySelector('.container');
const changeButton = document.querySelector(".changeButton")

function changeGrid (userInput) {

  container.innerHTML = "";

  const containerWidth = container.offsetWidth;
  const squareSize = containerWidth / userInput;
  

  for (let i = 0; i < userInput; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.width = `${containerWidth}px`
    row.style.height = `${squareSize}px`
    
    for (let j = 0; j < userInput; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      row.appendChild(square);
  
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'pink';
      })
    }
    
    container.appendChild(row);
  }


}


changeGrid(16)

changeButton.addEventListener("click", () => {
  const userInput = parseInt(prompt("How many squares should be in one line?"))

  if (isNaN(userInput) || userInput < 4 || userInput > 100) {
    alert("Please insert only numbers between 4 and 100.")
  } else {
    changeGrid(userInput)
    alert(`Done. The row has now ${userInput} squares in it.`)
  }
})
