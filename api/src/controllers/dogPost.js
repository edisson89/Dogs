const { Dog } = require("../db");

async function dogPost(req, res) {
  try {
    const { weight, height, id, name, life_span } = req.query;
    if ((id, name)) {
      const dog = {
        weight,
        height,
        id,
        name,
        life_span,
      };
      // add db

      await Dog.create(dog);
      return res.status(200).json(dog);
    }
  } catch (error) {
    (error) => res.status(500).json({ error: error.message });
  }
}
module.exports = dogPost;
