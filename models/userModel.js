const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    uppercase: true,
    minLength: 6,
    trim: true,
    immutable: true,
  },
  age: {
    type: Number,
    required: "age must be between 18 to 50",
    min: 18,
    max: 50,
  },
  phoneNo: { type: Number, default: 1111111111 },
  email: { type: String, required: true },
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String,
  },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
  gender: { type: String, enum: ["Male", "Female"] },
  isActive: { type: String, enum: ["Active", "Deleted"], default: "Active" },
});

userSchema.methods.sayHi = function () {
  console.log(`${this.name}`);
};

module.exports = mongoose.model("User", userSchema);
