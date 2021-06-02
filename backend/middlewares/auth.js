const { verifyToken } = require('../helpers/jwt')

module.exports = async (req, res, next) => {
    const authHeaer = req.headers.authorization;
    if(!authHeaer) return res.status(403).json({message: 'Você não possui autorização!'})
    const [, token] = authHeaer.split(" ")

    try {
        const decoded = verifyToken(token)
        const { sub } = decoded
        req.user = {
            id: sub
        }
        return next();
    } catch (error) {
        res.status(403).json({message: 'Você não possui autorização!'})
    }
    
}