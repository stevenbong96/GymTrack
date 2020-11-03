// const { response } = require("express");

$(document).ready(function(){
    $('.sidenav').sidenav();
});

// $.ajax({
//     url: "/workoutCard",
//     method: "GET"
// }).then(result => {
    
// })

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
        url: "/api/workout",
        method: "POST",
        data: {
            name: workoutName,
            trainingName: trainingType,
            sets: setsNumber,
            reps: repsNumber,
            break: breakDuration,
            description: description
        }
    }).then(response => {
        
        redirectMain()
    })
})

function redirectMain () {
    window.location.replace("/workoutCard")
}

function updateExercise (id) {
    $.ajax({
        url: "/api/workout/" + id,
        method: "PUT",
        // data: "cats"
    }).then(response => {
        console.log(response);
    })
}
// To update workout
$("#cardForm").on("submit", updateExercise)

// To delete workout
$("#deleteTraining").on("click", () => {
    $.ajax({
        url: "/api/workout/" + id,
        method: "DELETE",
    }).then(response => {
        console.log(response)
    })
})