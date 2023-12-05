
const seedDatabase = async (UserModel) => {
  try {
    
    await UserModel.create({
      username: 'adminUser',
      password: 'adminPassword',
      role: 'admin',
    });


    await UserModel.create({
      username: 'regularUser',
      password: 'regularPassword', 
      role: 'user',
    });

    const users = await UserModel.findAll({});
    console.log(users);
  } catch (e) {
      console.error("Error seeding DB: ", e);
  }
};

module.exports = {seedDatabase};