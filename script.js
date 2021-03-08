var today = moment();
var saveBtn = $(".saveBtn");
var description = $(".description");

description = localStorage.getItem("workDayText");

$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

saveBtn.on('click', function(event) {
    event.preventDefault();
    // alert ("hey!");
    // description.textContent = description;
    localStorage.setItem("workDayText", description);
})

$(".time-block").each(function(i, elem) {
    let currHour = moment().format("HH");
    let elemId = elem.id;
    let idHour = elemId.replace("hour");

    if (currHour <= idHour) {
        $("#elemId").addClass("past");
    } else if (currHour = idHour) {
        $("#elemId").addClass("present");
    } else if (currHour >= idHour) {
    $("#elemId").addClass("future");
}
})



