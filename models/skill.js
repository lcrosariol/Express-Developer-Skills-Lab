const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'Javascript', done: true},
    {id: 4, skill: 'JQuery', done: true},
    {id: 5, skill: 'Netlify', done: true},
    {id: 6, skill: 'Node', done: true},
    {id: 7, skill: 'Express', done: false},
    {id: 8, skill: 'Mongo DB', done: false}
];
    
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};
    
function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    //URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
} 

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    //New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}