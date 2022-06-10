const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
router.route("/create").post((req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    
    const newNote = new Note({
        Name,
        Email,
        Password
    });
  newNote.save();
}
)

//

module.exports = router;