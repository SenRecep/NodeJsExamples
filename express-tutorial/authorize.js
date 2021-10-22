module.exports = (req, res, next) => {
    const { user } = req.query;
    if (user == 'recep') {
        req.user = { name: 'recep', id: 1 }
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};