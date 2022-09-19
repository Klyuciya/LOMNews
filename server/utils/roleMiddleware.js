import jwt from 'jsonwebtoken';


export function roleMiddleware(roles){
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }

        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
            // const token = req.headers.authorization.split(' ')[1]

        try {
            
            if (!token) {
                return res.status(403).json({message: "net tokena"})
            }
            const {roles:userRoles} = jwt.verify(token, process.env.JWT_SECRET)
            let hasRole = false
            console.log(roles)

            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            })
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