// Select color input
// Select size input

//when the size is submitted by the user, call makeGrid
const myTable = document.getElementById('pixelCanvas'); //create a variable and set the value to the table


document.getElementById('sizePicker').addEventListener('submit', function (event) {
    event.preventDefault();
    let inputHeight = document.getElementById('inputHeight').value; // Height of the input element
    let inputWidth = document.getElementById('inputWidth').value; // Width of the input element
    myTable.innerHTML = ""
    makeGrid(inputHeight, inputWidth);
});
// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
    for (let i = 0; i < h; i++) {
        let row = document.createElement('tr');
        myTable.appendChild(row); // insert row
    
        for (let i = 0; i < w; i++) {
            let cell = document.createElement('td');
            row.appendChild(cell);//insert cell
            cell.addEventListener("click", function (event) {
                let color = document.getElementById("colorPicker");
                event.target.style.backgroundColor = color.value;
              

            });
        };
    };
    };
