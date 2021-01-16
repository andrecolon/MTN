const { tmn } = require('../config/dbconfig');
const db = require('../config/dbconfig');

module.exports = {
    find,
    findById,
    findByRegion,
    findByPhone,
    findByName,
    findByEmail,
    findByCongregation
};

function find() {
    return db("tmn")
};

function findById(id) {
    return db("tmn").where({ id }).first();
};

function findByPhone() {
    return db("tmn")
        .select("tmn.phone", "tmn.firstname", "tmn.region_town");
}

function findByName() {
    return db("tmn")
        .select("tmn.firstname", "tmn.lastname");
}

function findByEmail() {
    return db("tmn")
        .select("tmn.email")

}

function findByRegion() {
    return db("tmn")
        .select("tmn.region_town", "tmn.region_town")
}

function findByCongregation() {
    return db("tmn")
        .select("tmn.congregation_name")
}


