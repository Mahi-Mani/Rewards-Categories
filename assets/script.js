// $(document).ready(function (){
// function allowDrop(ev) {
//     console.log("1");
//     ev.preventDefault();
// }

// function drag(ev) {
//     console.log(ev.target.id);
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     console.log(event.dataTransfer);
//     var data = ev.dataTransfer.getData("text");
//     console.log(data);
//     ev.target.appendChild(document.getElementById(data));
// }

document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  /* Events fired on the drop target */
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  });


console.log("Inside script");

function generateHeading() {
    var rowHeading = $("<div>");
    rowHeading.addClass("row heading");
    // console.log(rowHeading);
    for (var i = 0; i <= 5; i++) {
        var cols = $("<div>");
        cols.addClass("col-md-2");
        if (i === 0) {
            cols.text("Heading");
        } else {
            cols.text("C" + (i));
        }
        rowHeading.append(cols);
    }

    $("#heading").append(rowHeading);
    $("#heading").append("<br>");
}

function generateNextRows() {
    var rowNum = 0;
    while (rowNum < 5) {
        var newRow = $("<div>");
        newRow.addClass("row reward" + i);
        for (var i = 0; i < 5; i++) {
            var newCol = $("<div>");
            newCol.addClass("col-md-2 droptarget");
            newCol.attr("id", "c" + i);
            if (i === 0) {
                newCol.text("R" + (rowNum + 1));
            }
            // newCol.attr("ondrop", drop(event));
            // newCol.attr("ondragover", allowDrop(event));
            newRow.append(newCol);
            // $("#c" + i).on("drop", function (event) {
            //     event.preventDefault();
            //     console.log(event.dataTransfer);
            //     var data = event.dataTransfer.getData("text");
            //     console.log(data);
            //     event.target.appendChild(document.getElementById(data));
            //     // drag(event);
            // });
            // $("#c" + i).on("dragover", function (event) {
            //     console.log("1");
            //     event.preventDefault();
            //     // drag(event);
            // });
            // function drag(ev) {
            //     console.log(ev.target.id);
            //     ev.dataTransfer.setData("text", ev.target.id);
            // }
        }
        $("#nextRows").append(newRow);
        $("#nextRows").append("<br>");
        rowNum++;
    }
}

generateHeading();
generateNextRows();
// })