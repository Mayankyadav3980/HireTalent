import UserModel from '../models/user.model.js'
import JobModel from '../models/job.model.js'

export default class UsersController{
    static employers = [
        {

        }
    ]

    getRegister(req,res){
        res.render('register')
    }
    
    postRegister(req, res){
        let { name, email, password, userType} = req.body;
        
        
    }
}