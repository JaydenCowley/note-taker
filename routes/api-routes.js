const router = require("express").Router();
const fs = require("fs");
const path = require("path");
// getting all the notes stored in the database
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = [];
      if (data) {
        notes = JSON.parse(data);
      }
      return res.json(notes);
    }
  });
});
// Getting a route by id
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = [];
      if (data) {
        notes = JSON.parse(data)
      }
    } 
    let note = note.params.id;
   })
})
// post route for adding notes to the database
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = [];
      if (data) {
        notes = JSON.parse(data);
      }
      let note = req.body;
      note.id = notes.length;
      notes.push(note);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes),
        (err, data) => {
          if (err) {
            throw err;
          }
        }
      );
      return res.json(notes);
    }
  });
});
// Delete route for removing notes from the database
router.delete("/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = [];
      if (data) {
        notes = JSON.parse(data);
      }
      let note = req.body;
      note.id = req.params.id;
      notes.splice(note.id, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes),
        (err, data) => {
          if (err) {
            throw err;
          }
        }
      );
      return res.json(notes);
    }
  });
  res.json(req.params.id)
});
module.exports = router;
