const { User } = require("@auth0/auth0-react");

const seedDatabase = async (UserModel) => {

  try {
    let adminRecord = UserModel.findOne({ where: { username: 'adminUser' }})

    if(!adminRecord){
      await UserModel.create({
        username: 'adminUser',
        password: 'adminPassword',
        role: 'admin',
      });
    }
    let regularRecord =  UserModel.findOne({ where: { username: 'regularUser' }})

    if(!regularRecord){
      await UserModel.create({
        username: 'regularUser',
        password: 'regularPassword', 
        role: 'user',
      });
    }
    // const users = await UserModel.findAll({});
    // console.log(users);
  } catch (e) {
      console.error("Error seeding DB: ", e);
  }
};

module.exports = {seedDatabase};