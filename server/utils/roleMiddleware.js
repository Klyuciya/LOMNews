import jwt from 'jsonwebtoken';


export function roleMiddleware(roles){
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }

        // const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
            const token = req.headers.authorization.split(' ')[1]

        try {
            const token = req.headers.authorization.split(' ')[1]
            console.log(token) 

            if (!token) {
                return res.status(403).json({message: "Cant define the token"})
            }

            const userRoles = jwt.verify(token, process.env.JWT_SECRET)

            let hasRole = false

            console.log(roles)

            // console.log(userRoles)

            console.log(userRoles.role)

            // const i=0;

                for (let i=0; i<roles.length ;i++ ){

                if (roles[i]===userRoles.role[0]){
                    hasRole = true;}

                console.log(hasRole)
            }

            if(!hasRole) {
                return res.status(403).json({message: "No access"})
            }
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "Admin is not authorized"})
        }
    }
}