var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

userRoutes.post("/signup", function (req, res) {
	User.findOne({

		var newUser = new User();

	});
});




module.exports = userRoutes;
