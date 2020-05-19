// $(document).ready(function (){
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}


console.log("Inside script");
function 
var rowHeading = $("<div>");
rowHeading.addClass("row heading");
// console.log(rowHeading);
for (var i = 0; i < 5; i++) {
    var cols = $("<div>");
    cols.addClass("col-md-2");
    if(i === 0) {
        cols.text("Heading");
    } else {
    cols.text("C" + (i));
    }
    rowHeading.append(cols);
}


$("#heading").append(rowHeading);
// })