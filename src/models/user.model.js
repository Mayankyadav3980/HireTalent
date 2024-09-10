var users = [];

export default class UserModel{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(name, email, password){
        const newUser  = new UserModel( users.length+1, name, email, password);
        users.push(newUser);
    }

    static isValidUser(email, password){
        // console.log(users);
        // console.log(email, password);
        
        let result = users.find( user => {
            // console.log(user.email, user.password);
            
            return user.email == email && user.password == password;
        });
        // console.log(result);
        
        return result;
    }
}