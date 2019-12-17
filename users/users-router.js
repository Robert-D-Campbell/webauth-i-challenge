const router = require("express").Router();

const restricted = require("../middleware/restricted-middleware");
const Users = require("./users-model.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({
          message: "you can checkout any time you like, but you can never leave"
        });
      } else {
        res.status(200).json({ message: "logout successful!" });
      }
    });
  } else {
    res.status(200).json({ message: "you were never here to begin with" });
  }
});

module.exports = router;
