import { http } from "./app";
import "./websocket/client"

http.listen(3333, () => console.log("Server is running"))