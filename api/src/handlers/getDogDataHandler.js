const getDogData = require("../controllers/obtenerDogs");

const getDogDataHandler = async (req, res) => {
  try {
    const result  = await getDogData();
    
    return res.status(200).json(result)
  } catch (error) {
    res.status(404).json({error:error.message})
  }
};
module.exports = getDogDataHandler;
