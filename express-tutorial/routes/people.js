const router = require('express').Router()
const peopleContoller = require('../controllers/people');

// router.get('/', peopleContoller.getPeople);

// router.post('/', peopleContoller.createPerson)

// router.put('/:id', peopleContoller.updatePerson);

// router.delete('/:id', peopleContoller.deletePerson);

router.route('/')
    .get(peopleContoller.getPeople)
    .post(peopleContoller.createPerson);
router.route('/:id')
    .put(peopleContoller.updatePerson)
    .delete(peopleContoller.deletePerson);

module.exports = router