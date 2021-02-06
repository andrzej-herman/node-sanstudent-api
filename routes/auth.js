const router = require("express").Router();
const User = require("../model/User");
const Code = require("../model/Code");
const bCrypt = require("bcryptjs");

// ! VALIDATION
const Joi = require("@hapi/joi");

// ! Add Activaton Code
router.post("/code", async (req, res) => {
  const code = new Code({
    value: req.body.value,
  });

  await code
    .save()
    .then(() => {
      res.status(200).send("Kod został dodany");
    })
    .catch((err) => {
      res.status(400).send(`Błąd połączenia z bazą danych. Błąd: ${err}`);
    });
});

// ! Register New User
router.post("/register", async (req, res) => {
  // Check if email exists

  // Check Activation Code
  const code = await Code.findOne({
    value: req.body.activationcode,
    activated: false,
  }).exec();
  if (code === null) {
    res.status(400).send("Nieprawidłowy kod aktywacyjny");
    return;
  } else {
    code.activated = true;
    code.save({ isNew: false });
    res.status(200).send("Aktywowano");
  }

  const salt = await bCrypt.genSaltSync(10);
  const hashedPassword = await bCrypt.hashSync(req.body.password, salt);
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });

  await user
    .save()
    .then((result) => {
      res
        .status(200)
        .send(`Rejestracja przebiegła pomyślnie. Id Użytkownika: ${result.id}`);
    })
    .catch((err) => {
      res.status(400).send(`Błąd połączenia z bazą danych. Błąd: ${err}`);
    });
});

module.exports = router;
