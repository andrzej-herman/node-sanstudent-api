const router = require("express").Router();
const User = require("../model/User");
const Code = require("../model/Code");
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
  codeValidation,
} = require("../validation");

// ! Add Activaton Code
router.post("/addcode", async (req, res) => {
  const { error } = codeValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const code = new Code({
    value: req.body.value.trim(),
  });

  await code
    .save()
    .then(() => {
      res.status(200).send("ADDCODE_OK");
    })
    .catch((err) => {
      res.status(400).send(`ADDCODE_ERROR: ${err}`);
    });
});

// ! Register New User
router.post("/register", async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exists
  const email = await User.findOne({ email: req.body.email.trim() }).exec();
  if (email) return res.status(200).send("DUPLICATED_EMAIL");

  // Check Activation Code
  const code = await Code.findOne({
    value: req.body.activationcode.trim(),
    activated: false,
  }).exec();
  if (!code) return res.status(400).send("INVALID_CODE");
  else {
    code.activated = true;
    code.save({ isNew: false });
  }

  // Hash Password
  const salt = await bCrypt.genSaltSync(10);
  const hashedPassword = await bCrypt.hashSync(req.body.password.trim(), salt);
  // Create User
  const user = new User({
    firstname: req.body.firstname.trim(),
    lastname: req.body.lastname.trim(),
    email: req.body.email.trim(),
    password: hashedPassword,
  });

  // Save User to Db
  await user
    .save()
    .then(() => {
      res.status(200).send("REGISTER_OK");
    })
    .catch((err) => {
      res.status(400).send(`REGISTER_ERROR: ${err}`);
    });
});

// ! Login
router.post("/login", async (req, res) => {
  // Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check email
  const user = await User.findOne({
    email: req.body.email.trim(),
  }).exec();
  if (!user) return res.status(400).send("INVALID_LOGIN_ATTEMPT");
  else {
    // Check Password
    const validPass = bCrypt
      .compare(req.body.password.trim(), user.password)
      .then((result) => {
        if (!result) return res.status(400).send("INVALID_LOGIN_ATTEMPT");
        else {
          // Create and assign a token
          const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
          const response = {
            token: token,
            id: user._id,
          };
          res.header("sanstudent-auth-token", token).send(response);
        }
      });
  }
});

module.exports = router;
