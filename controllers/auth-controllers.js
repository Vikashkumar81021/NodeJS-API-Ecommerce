const userService=require('../services/user-service.js')
const jwtProvider=require('../config/jwtProvider.js')

const register=async(req,res)=>{
    try {
        const user=await userService.createUser(req.body)
        const jwt=jwtProvider.generateToken(user._id)
    } catch (error) {
        
    }
}