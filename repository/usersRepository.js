const database = require("../Helpers/ormConnection");
const tbUsers = database.templateDB.tbUsers;
const op = database.templateDB.Sequelize.op;

async function createUsers(Users) {
    console.log("Repo: Create Users");
    console.log(Users);
    await tbUsers.create(Users);
}
async function updateUsers(Users) {
    console.log("Repo: Update Users");
    tbUsers.update(Users, { where: { Id: Users.Id } });
}
async function getUsers() {
    console.log("Repo: Get all the Users");
    return tbUsers.findAll();;
}
async function getUsersById(UsersId) {
    console.log("Repo: Get Users by id");
    return tbUsers.findAll({
        where: { Id: UsersId }
    });
}
async function deleteUsers(UsersId) {
    console.log("Repo: Delete Users");
    return tbUsers.destroy({ where: { Id: UsersId } });
}
async function login(login) {
    console.log("Repo: Login");
    return tbUsers.findAll({
        where: { username: login.UserName,password:login.Password }
    });
}
module.exports = { createUsers, updateUsers, getUsers, getUsersById, deleteUsers,login };