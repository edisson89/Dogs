require("dotenv").config();
const axios = require("axios");
const {Dog} = require("../db");
const { api_key } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`;

async function getDogData(req, res) {
  try {
  
    const {data} = await axios.get(URL);
    const result = data.slice(0,20)
   
    const character = [
      {
        weight: { imperial: "11.5 - 15.5", metric: "5 - 7" },
        height: { imperial: "11 - 16", metric: "28 - 41" },
        id: 51,
        name: "Border Terrier",
        bred_for: "Fox bolting, ratting",
        breed_group: "Terrier",
        life_span: "12 - 14 years",
        temperament:
          "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
        reference_image_id: "HJOpge9Em",
        image: {
          id: "HJOpge9Em",
          width: 674,
          height: 450,
          url: "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
        },
      },
    ];
    if (data) {
      // Guarda los datos en la base de datos utilizando Sequelize
      
      await Dog.bulkCreate(result);
    return  res.status(200).json(result);
    }
  } catch (error) {
    (error) => res.status(500).json({ error: error.message });
  }
}
module.exports = getDogData;
