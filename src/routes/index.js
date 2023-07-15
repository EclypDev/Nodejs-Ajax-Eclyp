import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const route = Router();

//database
const movies = [
  {
    id: 0,
    name: "cars",
    amount: 1,
  },
  {
    id: 1,
    name: "cars1",
    amount: 1,
  },
  {
    id: 2,
    name: "cars2",
    amount: 1,
  },
];

//const filePath = path.join(__dirname, "public", "index.html");

//routes
route.get("/", (req, res) => {
  res.json(movies);
});

route.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  movies.push({
    id: movies.length + 1,
    name,
  });
  res.json("Successfully created");
});

export default route;
