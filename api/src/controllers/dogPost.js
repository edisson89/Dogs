const { Dog } = require("../db");

async function dogPost(req, res) {
  try {
    const {
      weight,
      height,
      id,
      name,
      bred_for,
      breed_group,
      life_span,
      origin,
      reference_image_id,
      image,
    } = req.query;
    if (id,name,bred_for) {
      const dog = {
        weight,
        height,
        id,
        name,
        bred_for,
        breed_group,
        life_span,
        origin,
        reference_image_id,
        image,
      };
      // Guarda los datos en la base de datos utilizando Sequelize

      await Dog.create(dog);
      return res.status(200).json(dog);
    }
  } catch (error) {
    (error) => res.status(500).json({ error: error.message });
  }
}
module.exports = dogPost;
