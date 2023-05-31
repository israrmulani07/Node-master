const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());



app.get("/", (req, res) => {

    res.send("Thanks For Joining Pdac....");

})


const server = app.listen(5050, () => {
    console.log("server is up and runing at port 5050...");
});

app.get("/home", (req, res) => {
    res.send("My home is in pune..");
});

app.get("/service", (req, res) => {
    res.send("At your Service.......");
});

app.get("/Dept", (req, res) => {
    res.send("Software Engineer with no knowledge")
})

app.get("/Emp", (req, res) => {
    res.json(["Sahil", "Salman", "Sohel", "Abrar", "Adnan", "Sandesh", "Rahul", "Israr"])
})
app.get("/cars", (req, res) => {
    res.json([
        {
            Brand: "BMW",
            Model: 1021,
            Color: "Gold"
        },
        {
            Brand: "Mercedes",
            Model: 1591,
            Color: "DarkBlue"
        },
        {
            Brand: "Ferrai",
            Model: 5674,
            Color: "Red"
        },
        {
            Brand: "Range Rover",
            Model: 1235,
            Color: "lightgray"
        },
        {
            Brand: "Porsche",
            Model: 7762,
            Color: "Green"
        },
        {
            Brand: "Tata-i20",
            Model: 0888,
            Color: "lightblue"
        },
        {
            Brand: "Swift",
            Model: 3325,
            Color: "aqua"
        },
        {
            Brand: "Jaguar",
            Model: 9998,
            Color: "Orange"
        }

    ])
})

app.get("/Branches", (req, res) => {
    res.json([
        {
            Name: "Nigdi",
            City: "Pune",
        },
        {
            Name: "ShivajiNagar",
            City: "Pune",
        },
        {
            Name: "Pimpri",
            City: "Pune",
        },
        {
            Name: "Kondhwa",
            City: "Pune",
        },
        {
            Name: "Thane",
            City: "Mumbai",
        },
        {
            Name: "Kurla",
            City: "Mumbai",
        },
        {
            Name: "Bhandup",
            City: "Mumbai",
        },
        {
            Name: "Bhiwandi",
            City: "Mumbai",
        }
    ])

})
