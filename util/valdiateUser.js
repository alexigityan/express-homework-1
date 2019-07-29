module.exports = function(target) {
    return function (req, res, next) {
        const newUser = res.locals.newUser = req.body;
        const { username, password, gender, agree } = newUser;
        
        const agreeValue = (target === 'form') ? 'on' : true;
        /* in case of parsing html form, checkbox value is "on"
           in case of JSON payload it should be Boolean true */
        res.locals.isUserValid = (
            Object.keys(newUser).length === 4 &&
            typeof username === 'string'      &&
            username.length > 0               &&
            typeof password === 'string'      &&
            password.length > 0               &&
            ['boy', 'girl'].includes(gender)  &&
            agree === agreeValue   
        );
        
        next();
    }
}
