
exports.validRegister = async (req, res, next) => {
    //  const userId = req.body.userId
    //  const firstName = req.body.firstName
    //  const lastName = req.body.lastName
    //  const position = req.body.position
    //  const email = req.body.email
    //  const password = req.body.password

    const {userId, firstName, lastName, position, email, password} = req.body


    if(!userId){
        return res.status(400).json({msg: "Please add your User ID."})
    } else if( userId.length > 5) {
        return res.status(400).json({msg: "Your User ID must be 5 digits."})}
    else if( userId.length < 5) {
       return res.status(400).json({msg: "Your User ID must be 5 digits."})}
    
    if(!firstName){
        return res.status(400).json({msg: "Please add your name"})
    } else if( firstName.length > 20 ) {
        return res.status(400).json({msg: "Your name is up to 20 chars long"})
    }

    if(!lastName){
        return res.status(400).json({msg: "Please add your surname"})
    } else if( lastName.length > 20 ) {
        return res.status(400).json({msg: "Your surname is up to 20 chars long"})
    }

    if(!position){
        return res.status(400).json({msg: "Please select your position"})
    } 
    
    if(!email){
        return res.status(400).json({msg: "Please add your email address"})
    } else if( !validateEmail(email)){
        return res.status(400).json({msg: "Your email is not valid"})
    }

    if(password.length < 8){
        return res.json({msg: "Password must be at least 8 chars."}) }

    next();

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


    


    


    