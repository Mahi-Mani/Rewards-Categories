$(document).ready(function () {
    jQuery.noConflict();
    $("#questionModal").modal("show");

    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        var categories = $("#input-categories").val().trim();
        var rewards = $("#input-rewards").val().trim();
        console.log(categories);
        console.log(rewards);
        generateHeading(categories);
        generateNextRows(rewards);
        generateRewards(rewards);
    })

    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);
    });

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        console.log(data);
        var number = data.split("-")[1];
        var value = data.split("-")[0];
        console.log(value);
        var upperCaseData = value.toUpperCase();
        event.target.appendChild(document.getElementById(data));
        $("." + value).html(`<div class="card droptarget" id=${data}-${number} draggable="true" style="width: 5rem; height: 5rem;">
    <span class="close-icon float-right"><i class="fa fa-times"></i></span>
    <div class="card-body">
        <span>${upperCaseData}</span>
    </div>
</div>`);
        $(`#${data}`).on("click", function (event) {
            event.preventDefault();
            console.log("I'm clicked", this.id);
            $(`#${data}`).remove();
        })
    });

    function generateHeading(categories) {
        var rowHeading = $("<div>");
        rowHeading.addClass("row heading");
        // console.log(rowHeading);
        for (var i = 0; i <= categories; i++) {
            var cols = $("<div>");
            cols.addClass("col-md-1");
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

    function generateNextRows(rewards) {
        var rowNum = 0;
        while (rowNum < rewards) {
            var newRow = $("<div>");
            newRow.addClass("row reward" + i);
            for (var i = 0; i < rewards; i++) {
                var newCol = $("<div>");
                newCol.addClass("col-md-1 droptarget");
                newCol.attr("id", "c" + i);
                if (i === 0) {
                    newCol.text("R" + (rowNum + 1));
                    newCol.removeClass("droptarget");
                }
                newRow.append(newCol);
            }
            $("#nextRows").append(newRow);
            $("#nextRows").append("<br>");
            rowNum++;
        }
    }

    function generateRewards(rewards) {
        for (var i = 0; i < rewards; i++) {
            var mainDiv = $("<div>");
            mainDiv.addClass("r" + (i + 1));
            mainDiv.append(`<div class="card droptarget" id=r${i + 1}-0 draggable="true" style="width: 5rem; height: 5rem;">
        <span class="close-icon float-right"><i class="fa fa-times"></i></span>
        <div class="card-body">
            <span><small>R${i + 1}</small></span>
        </div>
    </div>`);
            $("#rewards").append(mainDiv);
        }

    }
});