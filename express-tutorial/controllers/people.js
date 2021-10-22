const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, msg: 'plase provide name value' });
    res.status(200).json({ success: true, person: name });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const found = people.find(person => person.id === Number(id));
    if (!found) return res.status(404).json({ success: false, msg: 'not found person' });
    found.name = name;
    res.status(200).json(people);
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const found = people.find(person => person.id === Number(id));
    if (!found) return res.status(404).json({ success: false, msg: 'not found person' });
    const newPeople = people.filter(person => person !== found);
    res.status(200).json(newPeople);
}

module.exports = {
    createPerson,
    getPeople,
    updatePerson,
    deletePerson
}