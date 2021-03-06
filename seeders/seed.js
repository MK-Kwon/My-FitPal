let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
    userNewUrlParser: true,
    useFindAndModify: false
});

let workoutSeed = [
    {
        day: new Date().setDate(new Date().getDate() -10),
        exercises: [
            {
                type: "resistance",
                name: "Bicep Curl",
                duration: 20,
                weight: 100,
                reps: 10,
                sets: 4
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -9),
        exercises: [
            {
                type: "resistance",
                name: "Literal Pull",
                duration: 20,
                weight: 200,
                reps: 10,
                sets: 5
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -8),
        exercises: [
            {
                type: "resistance",
                name: "Push Press",
                duration: 30,
                weight: 300,
                reps: 8,
                sets: 4
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -7),
        exercises: [
            {
                type: "resistance",
                name: "Bench Press",
                duration: 20,
                weight: 330,
                reps: 20,
                sets: 3
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -6),
        exercises: [
            {
                type: "cardio",
                name: "Running",
                duration: 30,
                weight: 300,
                reps: 8,
                sets: 4
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -5),
        exercises: [
            {
                type: "resistance",
                name: "Bench Press",
                duration: 20,
                weight: 300,
                reps: 10,
                sets: 4
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -4),
        exercises: [
            {
                type: "resistance",
                name: "Quad Press",
                duration: 30,
                weight: 300,
                reps: 10,
                sets: 4
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -3),
        exercises: [
            {
                type: "resistance",
                name: "Push Press",
                duration: 20,
                weight: 300,
                reps: 8,
                sets: 3
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -2),
        exercises: [
            {
                type: "resistance",
                name: "Millitary Press",
                duration: 20,
                weight: 300,
                reps: 10,
                sets: 2
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate() -1),
        exercises: [
            {
                type: "cardio",
                name: "Sprint",
                duration: 5,
                distance: 1
            }
        ]
    },
];

db.Workout.deleteMany({})
.then(() => db.Workout.collection.insertMany(workoutSeed))
.then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});