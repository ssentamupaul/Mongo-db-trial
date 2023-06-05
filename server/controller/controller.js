var Userdb = require("../model/model");
//create & save new user

exports.create = (req, res) => {
  // validat request
  if (!req.body) {
    res.status(400).send({ massage: "Content can not be empty!" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    company: req.body.campony,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      //     res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        massage:
          err.massage || "same error occured while creating a create oparation",
      });
    });
};

//retriev & return all users/ retrive & return a single user

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message:
              err.message || "Error Occurred while retriving user information",
          });
      });
  }
};

//update anew user by id
exports.update = (req, res) => {
  exports.update = (req, res) => {};
};

//delete a user with specific user id in the request
exports.delete = (req, res) => {
  exports.delete = (req, res) => {};
};
