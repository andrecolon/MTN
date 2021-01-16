exports.up = function (knex) {
    return knex.schema.createTable("tmn", (table) => {
        table.increments()
        table.time('firstname', 50).notNull()
        table.string('lastname', 50).notNull()
        table.string('phone', 50).notNull()
        table.string('email', 50).notNull()
        table.string('password', 50).notNull()
        table.string('congregation_name', 50).notNull()
        table.integer('region_town', 50).notNull()

    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("tmn")

};