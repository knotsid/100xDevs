const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json())

const schema = zod.ZodArray(zod.number())

app.post("/health-checkup", function (req, res) {
     //  kidneys = [1,2]
     const kidneys = req.body.kidneys;
     const response = schema.safeParse(kidneys)

     res.send({ response });
});


app.listen(3000)