const User = require("../model/user");

async function handleGetAllUsers(req,res){
    const allUsers = await User.find();
    return res.json(allUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);   
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
}

async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, {last_name: "changed"});
    return res.json({message: "User updated successfully"});
}

async function handleDeleteUserById(req,res) {
   await User.findByIdAndDelete(req.params.id);
   return res.json({message: "User deleted successfully"});
}

async function handleCreateNewUser(req,res){
    const body  = req.body;
    if(!body.first_name || !body.email) {
        return res.status(400).json({ error: "First name and email are required" });
    }
    const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    job_title: body.job_title,
    gender: body.gender
   });
   return res.status(201).json({msg : "success"});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};