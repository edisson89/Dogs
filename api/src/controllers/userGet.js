const {User} = require('../db');

const userGet  = async(req,res) => {
    try {
         const {email, password} = req.body;

    if(email && password){
        const validateUser = await User.findOne({
            where:{email: email}});
        if(validateUser && validateUser.dataValues.email === email && validateUser.dataValues.password === password){
            res.status(200).json({user: 'validated'})
        }else{
        res.status(404).json({validate:false})
        }
    }else{
        res.status(404).json({error: 'error not validaded'})
    }
    } catch (error) {
        response.status(404).json({error:error.message})
    }
   
}

module.exports = userGet