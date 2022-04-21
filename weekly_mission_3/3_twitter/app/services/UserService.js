const User = require('../models/User')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, 'Biography')
    }

    static getInfo(user){
        let array = new Array();
        array.push(user.getId)
        array.push(user.getUserName)
        array.push(user.getName)
        array.push(user.getBio)
        return array
    }

    static updateUserName(user, userName){
        user.setUserName = userName
    }
}

module.exports = UserService