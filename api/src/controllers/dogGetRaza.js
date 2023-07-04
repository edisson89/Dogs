require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { api_key } = process.env;

const URL = "https://api.thedogapi.com/v1/breeds/";
const URL_IMG = "https://cdn2.thedogapi.com/images/";
const getDogRaza = async (req, res) => {
  try {
    const { idRaza } = req.params;

    if (idRaza) {
      const dbDog = await Dog.findOne({
        where: { id: idRaza },
      });

      if (dbDog) {
        res.status(200).json({ dbDog, data: "db data" });
      } else {
        const result = await axios.get(`${URL}${idRaza}&api_key=${api_key}`);
        const data = result.data;
        if (data) {
          // db temperament,
          const temperament = await data.temperament;
          const resultArray = await temperament.split(",");

          if (!resultArray) {
            const nullTemperament = await Temperament.create({ name: null });
            await Dog.setTemperament([nullTemperament]);
          } else if (resultArray && resultArray.length > 0) {
            for (let i = 0; i < resultArray.length; i++) {
              const stringValue = resultArray[i];
              const id = i + 1;

              await Temperament.findOrCreate({
                where: { name: stringValue },
                defaults: { id: id, name: stringValue },
              });
            }

            const referenceImg = data.reference_image_id;
            const image = `${URL_IMG}${referenceImg}.jpg`;
            const temperamentsArray = await resultArray.map(
              (temperamentName, index) => ({
                id: index + 1,
                name: temperamentName,
              })
            );

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

              temperaments: temperamentsArray,
            };

            await Dog.findOrCreate({
              where: { id: dog.id },
              defaults: dog,
            });

            res.status(200).json({ dog, data: "data api" });
          } else {
            res.status(201).json({ data: "Dog exist already" });
          }
        } else {
          res.status(404).json({ data: "Not found Data" });
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
