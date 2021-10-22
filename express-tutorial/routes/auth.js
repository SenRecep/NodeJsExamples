const router = require('express').Router()

router.post('/login', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(401).json({ msg: 'Please Provide Credentials!' });
    res.status(201).json({ msg: `Welcome ${name}` });
});

module.exports  = router