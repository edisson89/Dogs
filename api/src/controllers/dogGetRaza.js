require("dotenv").config();
const axios = require("axios");
const { Dog, Temperamento } = require("../db");
const { api_key } = process.env;

const URL = "https://api.thedogapi.com/v1/breeds/search";
const URL_IMG = "https://cdn2.thedogapi.com/images/";
const getDogRaza = async (req, res) => {
  try {
    const { idRaza } = req.params;

    if (idRaza) {
      const bdDog = await Dog.findOne({
        where: { bred_for: `${idRaza}` },
      });
      if (bdDog) {
        res.status(200).json(bdDog);
      } else {
        const result = await axios.get(`${URL}?q=${idRaza}&api_key${api_key}`);
        const data = result.data[0];

        // temperament: data.temperament,
        // const temperament = {
        //   id:id,
        //   name:data.name,
        //   data: data.temperament};
        // const findDog = await Dog.findByPk();
        // if (temperament) {
        //   await createDog.setTemperamentos(temperament);
        // }

        if (data) {
          const referenceImg = data.reference_image_id;
          const image = `${URL_IMG}${referenceImg}.jpg`;

          const dog = {
            weight: data.weight,
            height: data.height,
            id: data.id,
            name: data.name,
            bred_for: data.bred_for,
            breed_group: data.breed_group,
            life_span: data.life_span,
            origin: data.origin,
            reference_image_id: data.reference_image_id,
            image: image,
          };

          await Dog.create({ dog });
          //const createDog = await Dog.create(dog);
          //create the relations
          //await createDog.setTemperamentos(temperament);
          res.status(200).json(dog);
        } else {
          res.status(404).json({ data: "data not found" });
        }
      }
    } else {
      res.status(404).json({ data: "id not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getDogRaza;
