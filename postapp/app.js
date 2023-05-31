const { json } = require("body-parser");
const express = require("express")
const app = express();
const _ = require("underscore")
const cors = require("cors")
app.use(json())
app.use(cors())


app.listen(4040, () => {
    console.log("server is runing on port 4040.....")
})

app.get("/", (req, res) => {
    // res.send("Api is connected......")
    res.send("Whact u looking at......")

});

app.get("/clrs", (req, res) => {
    res.json(["yaaahhoo", "iddkkeek"])
})


app.post("/fullname", (req, res) => {
    const { fname, mname, lname } = req.body;
    res.json(`${fname} ${mname} ${lname}`)
});

app.post("/area", (req, res) => {
    const { w, b } = req.body
    const a = w * b;
    res.json(a)
});

app.post("/prof", (req, res) => {
    const { cp, sp } = req.body
    const benefit = sp - cp;
    res.json(benefit)
});

app.post("/memo", (req, res) => {
    const { arr } = req.body
    const totalMarks = arr.reduce((acc, curr) => acc + curr)
    const per = totalMarks / arr.length;
    res.json({ per, totalMarks });
});

app.post("/bignum", (req, res) => {
    const { arr } = req.body
    const big = arr.reduce((acc, curr) => (acc > curr ? acc : curr))
    res.json({ big })
});

app.post("/smallnum", (req, res) => {
    const { arr } = req.body
    const small = arr.reduce((acc, curr) => (acc < curr ? acc : curr))
    res.json({ small })
})

app.post("/sumeven", (req, res) => {
    const { arr } = req.body
    const even = arr.filter((item) => item % 2 === 0)
    const sum = even.reduce((acc, curr) => acc + curr)
    res.json({ sum })
});

app.post("/findnum", (req, res) => {
    const nums = _.range(1, 101)
    const { num } = req.body
    const isExist = nums.includes(num)
    res.json({ isExist })
})

//Other method to find number :- 
app.post("/findsnum", (req, res) => {
    const nums = Array.from(Array(100).keys())
    const { num } = req.body
    const doesExist = nums.includes(num)
    res.json({ doesExist })
})



