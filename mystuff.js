$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
var hour = moment().format("H")
//var hour = 12
var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17]

for (i = 0; i < timeSlots.length; i++) {
    if (timeSlots[i] === hour) {
        classes = "row  time-block present"
    }
    else if (timeSlots[i] < hour) {
        classes = "row  time-block past"
    }
    else {
        classes = "row time-block future"
    }

    var createRow = $("<div>")
        .attr("id", "hour-" + timeSlots[i])
        .attr("class", classes)

    var timeCol = $("<div>")
        .attr("class", "col-1 hour")
        .text(timeSlots[i] + ":00")


    var textCol = $("<div>")
        .attr("class", "col-10 description")

    var textArea = $("<textarea>")
        .attr("id", timeSlots[i])
        .attr("class", "col-12")
        .text(localStorage.getItem("task-desc-" + timeSlots[i]))

    textCol.append(textArea)


    var subButton = $("<button>")
        .attr("class", "col-1 saveBtn")
        .attr("data-hour", timeSlots[i])
        .text("Save")

    createRow.append(timeCol)
    createRow.append(textCol)
    createRow.append(subButton)


    $(".container").append(createRow)



}
//create event listener using 'this'
$(".saveBtn").on('click', function (event) {
    var clickHour = $(event.target).data('hour')
    console.log(clickHour)
    var clickDetail = $("#" + clickHour).val()
    localStorage.setItem('task-desc-' + clickHour, clickDetail)

    //var clickHour = this.childNodes[0].innerHTML;
    //console.log(clickHour)
    }   

        
        //var clickDetail = this.childNodes[1].childNodes[0].innerHTML;
        //console.log(clickHour)
        //console.log(clickDetail)
        //localStorage.setItem('task-desc-' + clickHour, clickDetail)
)