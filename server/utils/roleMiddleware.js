import jwt from 'jsonwebtoken';


export function roleMiddleware(roles){
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }

        // const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
           

        try {
            const token = req.headers.authorization.split(' ')[1]
            console.log(token) 

            if (!token) {
                return res.status(403).json({message: "net tokena"})
            }
            const userRoles = jwt.verify(token, process.env.JWT_SECRET)
            let hasRole = false
            console.log(roles)
            // console.log(userRoles)
            console.log(userRoles.role)
            const i=0;
            // roles.forEach(() => {
                for (let i=0; i<roles.length ;i++ )
                if (roles[i]===userRoles.role[0])
                // if (roles.includes(userRoles.role))
                {
                    hasRole = true;
                    // i++;
                   
                }
                console.log(hasRole)
            // })
            if (!hasRole) {
                return res.status(403).json({message: "У вас нет доступа"})
            }
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
};