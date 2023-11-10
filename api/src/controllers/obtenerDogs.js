require("dotenv").config();
const axios = require("axios");
const { Dog } = require("../db");
const { api_key } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`;

async function getDogData() {
  try {
    const { data } = await axios.get(URL);
    const result = await data.slice(0, 20);
    
    if (result) {
      
      // await Dog.bulkCreate(result);
      //return res.status(200).json({ result });
      return { result };
    }
    throw new error("The data exist already");
  } catch (error) {
    return error;
  }
}
module.exports = getDogData;
