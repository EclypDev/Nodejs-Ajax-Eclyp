import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import bodyparse from "body-parser";
import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "public");
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparse.json());
// Llama a morgan como funcion y especifica el formato de registro "dev"

// SETTINGS
const PORT = process.env.PORT || 3000;

// ROUTES
app.use("/api", routes);

// STATIC Files
app.use(express.static(filePath));

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
