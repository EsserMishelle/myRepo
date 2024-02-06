const Log = require("../models/Log");
const express = require("express");
const router = express.Router();

// router.get("/", logsController.index);
// router.get("/new", logsController.new);
// router.delete("/:id", logsController.delete);
// router.put("/:id", logsController.update);
// router.post("/", logsController.create);
// router.get("/:id/edit", logsController.edit);
// router.get("/:id", logsController.show);
////turning routes into callback functions

// INDUCES
//// Index
function index(req, res) {
  // find all the logs
  Log.find({})
    // render a template after they are found
    .then((logs) => {
      res.render("Index", { logs });
    })
    // send error as json if they aren't
    .catch((err) => {
      console.error(err);
      res.status(400).json({ err });
    });
}

//// New
function newLog(req, res) {
  res.render("New");
}

////Delete
function deleteLog(req, res) {
  Log.deleteOne({ _id: req.params.id })
    .then((deleteInfo) => {
      console.log(deleteInfo);
      res.redirect("/logs");
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
}

////Update
function update(req, res) {
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  }

  Log.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((updateInfo) => {
      console.log(updateInfo);
      res.redirect(`/logs/${req.params.id}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
}

//// Create
function create(req, res) {
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  }

  Log.create(req.body)
    .then((createdLog) => {
      res.redirect("/logs");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
}

////Edit
function edit(req, res) {
  Log.findOne({ _id: req.params.id })
    .then((foundLog) =>
      res.render("Edit", {
        log: foundLog,
      })
    )
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
}

///Show
function show(req, res) {
  Log.findOne({ _id: req.params.id })
    .then((foundLog) => {
      res.render("Show", {
        log: foundLog,
      });
    })
    .catch((error) => {
      error(error);
      res.json({ error });
    });
}
module.exports = {
  index,
  new: newLog,
  delete: deleteLog,
  update,
  create,
  edit,
  show,
};
// module.exports = router;
