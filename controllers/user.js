const errorHandler = require("../helpers/error-handler");
const Joi = require("joi"); //use joi validation NPM
const {
  hashPassword,
  comparePassword,
  validatePassword,
} = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
// const { Account } = require("../models/account");
const Account = require("../models").Account

module.exports = {
  getOne: async (req, res) => {
    const data = req.user;
    try {
      const find = await Account.findAll({
        where: {
          id: data.id,
          is_admin: false,
        },
        attributes: ["username", "password", "email", "balance"],
      });

      res.status(200).json({
        
        status: "Success",
        message: "Successfully retrieve the data",
        result: find,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },

  register: async (req, res) => {
    const { username, email, password, balance } = req.body;
    try {

      // const checkPassword = validatePassword(password);
      // if (!checkPassword) {
      //   return res.status(400).json({
      //     status: "Failed",
      //     message:
      //       "Your password must be at least 6 characters with minimal one Lowercase Letter,one Uppercase Letter, Number and Character",
      //   });
      // }

      // const check = await Account.findOne({ where: { email } });
      // const check = await Account.findOne().where({email: req.body.email});
      // const check = await Account.findOne().where({email: req.body.email})
      // console.log(check);

      // if (check) {
      //   return res.status(401).json({
      //     status: "Failed",
      //     message: "This Email Already Used",
      //   });
      // }
      const passwordhashed = hashPassword(password);
      const data = await Account.create({
        username,
        email,
        password: passwordhashed,
        balance,
      });
      if (!data) {
        return res.status(500).json({
          status: "Failed",
          message: "Failed to register",
        });
      }

      const token = generateToken({
        id: data.id,
        email: data.email,
        name: data.username,
      });

      return res.status(201).json({
        status: "Success",
        message: `Registration Success`,
        result: token,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });

      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
        });
      }

      const user = await Account.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Invalid email and password combination",
        });
      }
      const checkPassword = comparePassword(password, user.password);
      if (!checkPassword) {
        return res.status(401).json({
          message: "Incorrect Username or Password",
          status: "Unauthorized",
        });
      }
      const token = generateToken({
        id: user.id,
        email: user.email,
        name: user.username
      });
      // let token = generateToken(payload);

      res.status(200).json({
        status: "Success",
        message: "Logged in successfully",
        result: { token },
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },
};
