import User from "../models/User";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const userNew = new User({
    username,
    email,
    password: await User.cifrarPassword(password),
  });
  console.log(userNew);

  res.json("signUp");
};

export const signIn = async (req, res) => {
  res.json("signIn");
};
