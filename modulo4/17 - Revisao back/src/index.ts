import app from "./app"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)