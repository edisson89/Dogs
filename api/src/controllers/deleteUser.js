const {User}  = require('../db');

const userDelete = async (req,res)=>{
    try {
         const {email} = req.body 
   const deleteUser = await User.destroy({
    where:{
        email
    }
   });

   if(deleteUser){
    res.status(200).json(deleteUser)
   }else{
    resizeBy.status(404).json({email: 'data not found'})
   }
    } catch (error) {
     res.status(404).json({error:error.message})   
    }
  
}
module.exports = userDelete