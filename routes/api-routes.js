const router = require('express').Router();
const fs = require('fs')

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        }else {
            let notes = [];
            if (data) {
                notes = JSON.parse(data)
            }
            return res.json(notes)
        }
    })
})
// post

module.exports = router;