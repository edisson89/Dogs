const { User } = require("../db");

const userUpdate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validateUser = await User.findOne({
      where: {email}
    });

    if (validateUser && validateUser.dataValues.password !== password) {
        
      const userUpdated = await validateUser.update({ password });
      if (userUpdated) {
       res.status(200).json({ update: userUpdated });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    }else {
        res.status(400).json({ error: "Email and password not update." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = userUpdate;
