const { User } = require("../db");

const userPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userCreate = {
        email,
        password,
      };

      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { email, password },
      });

      if (created) {
        res.status(201).json(userCreate);
      } else {
        res.status(409).json({message:'The user exist already'} );
      }
    } else {
      res.status(400).json({ user: "Faltan datos" });
    }
  } catch (error) {
    res.status(404).json({ error: 'error.message' });
  }
};
module.exports = userPost;
