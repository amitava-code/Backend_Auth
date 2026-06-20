import userModel from "../models/user.model";


async function register(req, res){

    const { username , email , password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if (isAlreadyRegistered){
        res.status(409).json({
            message:"Username or email already exists"
        })
    }

}