require('dotenv').config();
const {Dog} = require('../db');
const { api_key } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDog = async (req,res) => {
    try {
        const  {id} = req.body

    if(id){
        const {data} = await axios.get(URL + id + api_key)
console.log(data)
        if(data){
            const dog = await Dog.create({data})
            res.status(200).json(data)
        }else{
            res.status(404).json('data not found')
        }
    }
    
    } catch (error) {
        res.status(500).json({error : error.message})
    }
    
}
module.exports  = getDog