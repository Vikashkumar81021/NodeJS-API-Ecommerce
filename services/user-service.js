const User = require("../model/user-model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    const { firstName, lastName, email, password } = userData;
    const isUserExist = User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exist with email :", email);
    }
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, password });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByid = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("user Not Found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByemail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email", email);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await User.findUserByid(userId);
    if (!user) {
      throw new Error("user not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserByid,
  findUserByemail,
  getAllUsers,
  getUserProfileByToken,
};
