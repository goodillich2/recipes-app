const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Всі збережені рецепти юзера
app.get("/recipes", (req, res) => {
  fs.readFile("./server/recipes.json", "utf-8", (err, recipes) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading data file");
    } else {
      const jsonRecipes = JSON.parse(recipes);
      res.send(jsonRecipes);
    }
  });
});

// додати рецепт до library юзера
app.post("/recipes", (req, res) => {
  fs.readFile("./server/recipes.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading data file");
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);
      fs.writeFile("./server/recipes.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error writing data file");
        } else {
          res.send(req.body);
        }
      });
    }
  });
});

// видалення рецепту
app.delete("/recipes/:id", (req, res) => {
  console.log("test");
  const id = req.params.id;
  console.log(id);
  fs.readFile("./server/recipes.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    const jsonData = JSON.parse(data);
    const index = jsonData.findIndex((item) => {
      return item.id === parseInt(id);
    });
    if (index === -1) {
      return res.status(404).send("Object not found");
    }
    jsonData.splice(index, 1);
    fs.writeFile("./server/recipes.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      return res.send("Deleted");
    });
  });
});

app.listen(8800, () => {
  console.log("Server listening on port 8800");
});
