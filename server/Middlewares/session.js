
const sessionData = (req, res, next) => {
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    next()
    }

    export default sessionData