import UserModel from '../models/user.model.js'
import JobModel from '../models/job.model.js'

export default class UsersController{
   

    getRegister(req,res){
        res.render('register')
    }
    
    postRegister(req, res){
        let { name, email, password, userType} = req.body;
        UserModel.add(
            name, email, password, userType
        );
        res.render('login', { errorMessage: null });
        
    }
    getLogin(req, res){
        res.render('login', { errorMessage: null});
    }

    postLogin(req, res){
        const { email, password} = req.body;
        // console.log('in controller :' + email + password);
        
        let result = UserModel.isValidUser(email, password);
        if(result){
            res.redirect('/jobs');
        }
        else{
            res.render('login', {errorMessage: "Invalid Credentials"})
        }
    }

}