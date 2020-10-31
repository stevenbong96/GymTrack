$(document).ready(function(){
    $('.sidenav').sidenav();
});

// To add workout
$(".addWorkout").on("submit", event => {
    event.preventDefault();

    // Get all the value from input text
    const workoutName = $("#workoutName").val().trim();
    const trainingType = $("#trainingType").val().trim();
    const setsNumber = $("#setsNumber").val().trim();
    const repsNumber = $("#repsNumber").val().trim();
    const breakDuration = $("#break").val().trim();
    const description = $("#description").val().trim();

    // AJAX Call
    $.ajax({
        url: "",
        method: "POST",
        data: {
            name: workoutName,

        }
    }).then(response => {
        console.log(response);
    })
})

// To update workout
$("#updateTraining").on("click", () => {
    // Get

    $.ajax({
        url: "",
        method: "PUT",
        data: 
    }).then(response => {
        console.log(response);
    })
})

// To delete workout
$("#deleteTraining").on("click", () => {
    $.ajax({
        url: "",
        method: "DELETE",
        data:
    }).then(response => {
        console.log(response)
    })
})