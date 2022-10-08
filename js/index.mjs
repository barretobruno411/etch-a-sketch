// create a newBoard and add event listener
const aksForAmmountOfSquares = () => {
  const amount = prompt("insert the number of squares per line, max: 100");

  if (amount > 100 ) {
    alert("cannot use a value greater than 100")
    return
  }

  for (let i = 0; i < amount * amount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) =>
      console.log((e.target.style.backgroundColor = `#${rgbGenerator()}`))
    );
  });
};

//container selector
const container = document.querySelector(".container");
//button
const newBoard = document.querySelector(".newBoard");
newBoard.addEventListener("click", aksForAmmountOfSquares);

const squaresNumber = 256;

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

//hovering
const rgbGenerator = () => {
  return Math.floor(Math.random() * 1000000);
};
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", (e) =>
    console.log((e.target.style.backgroundColor = `#${rgbGenerator()}`))
  );
});
