const button = document.querySelector('button');

const newLocal = () => {
    let output = document.getElementById("output")
    let x = parseInt(document.getElementById("input1").value);

    let y = parseInt(document.getElementById("input2").value);
    if (x === NaN && y === NaN) {
        console.log("Enter something");
    }
    console.log(x+y);
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    for (var i = 0; i < parseInt(x); i++){
        // create row
        var row = document.createElement("tr");
        for (var j = 0; j < parseInt(y); j++) {
            // create column
            var column = document.createElement("td");

            row.appendChild(column);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    output.appendChild(table);
};
    
 button.addEventListener('click', newLocal => {
     newLocal.preventDefault();
     console.log(newLocal.target.value);
 });






