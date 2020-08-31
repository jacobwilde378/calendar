$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
//var hour = moment().format("H")
var hour = 12
console.log(hour)
var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (i = 0; i < timeSlots.length; i++) {
    if (timeSlots[i] === hour) {
        classes = "row time-block present"
    }
    else if (timeSlots[i] < hour) {
        classes = "row time-block past"
    }
    else {
        classes = "row time-block future"
    }

    var createRow = $("<div>")
        .attr("id", "hour-" + timeSlots[i])
        .attr("class", classes)
        
    

    $(".container").append(createRow)


   
}
//create event listener using 'this'
