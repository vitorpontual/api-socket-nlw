import express from "express";
import { createServer} from "http";
import { Server, Socket} from "socket.io";
import path from "path";

import "./database"
import { router } from "./routes";

console.log("db connected")

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html")
})

const http = createServer(app); //criando protocolo http
const io = new Server(http); // criano protocolo de ws


io.on("connection", (socket: Socket) => {
  
})

app.use(express.json())
app.use(router)

export { http, io }