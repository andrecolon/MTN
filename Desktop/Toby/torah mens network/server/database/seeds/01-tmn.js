exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tmn').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tmn').insert([
        { 
          id: 1,
          firstname: "TOny",
          lastname: "TorahGuy",
          phone: "2156285",
          email: "abc@xyz.com",
          password: '$2a$14$tfV4L3k974AOgx2YT57uQ.8GFyiutqHYI6q0A3E0bOxa4wZctaDSO',
          congregation_name: "TOBY",
          region_town: "Tehachapi"
        },

        { 
          id: 2,
          firstname: "Marty",
          lastname: "Messianic",
          phone: "8554459544",
          email: "martym@aol.com",
          password: '$2a$14$tfV4L3k974AOgx2YT57uQ.8GFyiutqHYI6q0A3E0bOxa4wZctaDSO',
          congregation_name: "TOBY",
          region_town: "Tehachapi"
        }

      ]);
    });
};