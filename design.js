let table = document.querySelector("#pixelCanvas");
let form = document.querySelector("#sizePicker");
let color = document.querySelector("#colorPicker");


form.addEventListener("submit", makeGrid);


function makeGrid(e) {
    table.innerHTML = null;
    e.preventDefault();
    let height = document.querySelector("#inputHeight").value;
    let width = document.querySelector("#inputWidth").value;
    for (let i = 1; i <= height; i++) {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        for (let j = 1; j <= width; j++) {
            let tableData = document.createElement("td");
            tableRow.appendChild(tableData);
            
        }
        
    }
};

table.addEventListener('click', colorChange)

function colorChange(e) {
    let currentColor = color.value;
    if(e.target.tagName.toLowerCase() === "td") {
        let clickedBox = e.target;
        if (clickedBox.style.backgroundColor === currentColor){
            clickedBox.style.backgroundColor === null;
        }
        else {
            clickedBox.style.backgroundColor = currentColor;
        }
    }
}

