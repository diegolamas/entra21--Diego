const users = require("../models/user");



function getAllUsers(req, res, next) {
res.json(users);
}



function getUserById(req, res, next) {
    const userId = req.params.id;
    
     const user = users.find(user => user.id == userId);
    
     if (!user) {
    res.status(404).json({ message: "User not found!" });
    }
    
     res.json(user);
    }









function getUserById(req, res, next) {
}

function deleteUser(req, res,next){
    
}
module.exports = {

getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser


};
 
