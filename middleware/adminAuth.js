const jwt = require("jsonwebtoken");
module.exports = async (request, response, next) => {
    try {
        //   get the token from the authorization header
        const token = await request.headers.authorization.split(" ")[1];
        const role = await request.headers.role;

        //check if the token matches the supposed origin
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

        // retrieve the user details of the logged in user
        const user = await decodedToken;

        // pass the user down to the endpoints here
        request.user = user;
        if(role === "admin"){
            next();
        }else{
            response.status(401).json({
                error: new Error("Invalid request!")
            })
        }

        // pass down functionality to the endpoint
        
    } catch (error) {
        response.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};
