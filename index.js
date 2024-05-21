const { User } = require("./models");

(async () =>{
// const createUser = await User.create ({
//     name: "Aracely",
//     lasname: "Rodriguez",
//     email: "aracely.rodriguez@hotmail.com",
// });

const users = await User.findAll();
console.log(users[0].name);
})();