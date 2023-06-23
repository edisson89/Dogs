const { User } = require("../db");

const userPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userCreate = {
        email,
        password,
      };

      const [usser, created] = await User.findOrCreate({
        where: { email },
        defaults: { email, password },
      });
      
      if (created) {
        res.status(200).json(userCreate);
      } else {
        res.status(204).json({ user: `The ${usser.email} exist already` });
      }
    } else {
      res.status(400).json({ user: "Faltan datos" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = userPost;
