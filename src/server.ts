import express, { request, response } from "express";

const app = express()

app.get("/", (request, response) => {
  return response.send("Hello Wolrd NLW 5")
})

app.listen(3333, () => console.log("Server is running"))