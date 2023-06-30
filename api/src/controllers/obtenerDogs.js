require("dotenv").config();
const axios = require("axios");
const { Dog } = require("../db");
const { api_key } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`;
async function getDogData(req, res) {
  
  try {
    const { data } = await axios.get(URL);
    const result = await data.slice(0,20);
    if (result) {
      
      // Guarda los datos en la base de datos utilizando Sequelize
     
      await Dog.bulkCreate(result);
      return res.status(200).json({ result });
    }
  } catch (error) {
    (error) => res.status(500).json({ error: error.message });
  }
}
module.exports = getDogData;
