const usersRepo = require("../repository/usersRepository");
const { errorConstants } = require("../constants");


async function getUsers() {
    console.log("Service: GetUsers Initiated");
    return await usersRepo.getUsers();
}
async function getUsersById(UsersId) {
    console.log("Service: GetUsersById Initiated");
    return await usersRepo.getUsersById(UsersId);
}
async function createUsers(Users) {
    console.log("Service: CreateUsers Initiated");
    return await usersRepo.createUsers(Users);
}
async function updateUsers(UsersId) {
    console.log("Service: UpdateUsers Initiated");
    return await usersRepo.updateUsers(UsersId);
}
async function deleteUsers(UsersId) {
    console.log("Service: DeleteUsers Initiated");
    return await usersRepo.deleteUsers(UsersId);
}
async function login(UserDetail) {
    console.log("Service: Login Initiated");
    var loginDetails = await usersRepo.login(UserDetail);
    if (loginDetails.length == 0) {
        var errorMessage = "Invalid Credentials";
        return data = {
            Status: errorConstants.VALIDATION_ERROR,
            Result: "Invalid Credentials"
        };
    }
    return data = {
        Status: errorConstants.SUCCESS,
        Result: loginDetails,
        Token:generateToken(loginDetails)
    };
}



module.exports = { getUsers, getUsersById, createUsers, updateUsers, deleteUsers, login }