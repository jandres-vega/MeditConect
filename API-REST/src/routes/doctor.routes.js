const {Router} = require('express');
const userDoctors = require('../Models/doctor.models');
const router = Router();

router.post('/', async(req, res) => {
    try {
        const userDoc = await userDoctors(req.body);
        const response = await userDoc.save();
        res.status(200).send(response)
    }catch (e) {
        console.error(e)
    }
})

module.exports = router;