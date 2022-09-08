const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, age, phone, email, hobbies, address, gender } = req.body;

  try {
    const user = await UserModel.create({
      name: name,
      age: age,
      phoneNo: phone,
      email: email,
      hobbies: hobbies,
      address: address,
      gender: gender,
    });
    user.sayHi();
    res.status(200).send({ message: "User Added Successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).send({ data: user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.find({ _id: userId });
    res.status(200).send({ data: user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
