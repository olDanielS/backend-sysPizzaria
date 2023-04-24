interface UserInfo {
    name: String,
    email: String,
    password: String
}

class UserService{
    async execute({name,email,password}:UserInfo){
        console.log(name, email, password)
        return {ok: 'true'}
    }
}

export { UserService };