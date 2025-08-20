const express = require("express");
const User = require("../model/user");
const {handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controller/user");

const router = express.Router();


router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById); 


module.exports = router;