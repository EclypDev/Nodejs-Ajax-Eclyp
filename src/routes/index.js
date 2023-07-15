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
    price: 1,
  },
  {
    id: 1,
    name: "cars1",
    price: 1,
  },
  {
    id: 2,
    name: "cars2",
    price: 1,
  },
];

//const filePath = path.join(__dirname, "public", "index.html");

//routes
route.get("/movies", (req, res) => {
  res.json(movies);
});

route.post("/movies", (req, res) => {
  const { name, price } = req.body;
  let nameCount = name.split("").length;
  console.log(typeof price);
  movies.push({
    id: movies.length + 1,
    name: name,
    price: price,
  });

  res.json("Successfully created");
});

route.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  movies.forEach((movie) => {
    if (movie.id == id) {
      movie.name = name;
      movie.price = price;
    }
  });
  res.json("recibido");
});

route.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  movies.forEach((movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.json("recibido");
});

export default route;
