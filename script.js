var today = moment();
var saveBtn = $(".saveBtn");

// Load all descriptions
$(".description").each(function(i, elem) {
    let storageId = $(elem).parent().attr("id");
    let descriptionText = localStorage.getItem(storageId) || "";
    $(elem).val(descriptionText);
});

function updateColor() {
    let currTime = parseInt(moment().format("HH"));
    
    $(".time-block").each(function(i, elem) {
        let currDiv = $(elem);
        currDiv.remove("past");
        currDiv.remove("future");
        currDiv.remove("present");

        let divId = currDiv.attr("id");
        let divHour = parseInt(divId.replace("hour", ""));

        if (divHour > currTime) {
            currDiv.addClass("future");
        }

        if (divHour == currTime) {
            currDiv.addClass("present");
        }

        if (divHour < currTime) {
            currDiv.addClass("past");
        }

    });
}

setInterval(updateColor, 10000);

$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

saveBtn.on('click', function(event) {
    event.preventDefault();
    let buttonThatWasClicked = $(this);
    let buttonId = buttonThatWasClicked.attr("id");
    let textId = buttonId.replace("save-", "");

    let $text = $("#" + textId + " .description");

    localStorage.setItem(textId, $text.val());
})

