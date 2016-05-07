exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // user s seed
    knex('users').insert({name: 'Bill',email:"clinton@ididnotsleepwiththatwomen.com", hashedPassword:"22"}),
    knex('users').insert({name: 'Ezra', email:"EzraManOfGod@mormon.com", hashedPassword:"33"}),
    knex('users').insert({name: 'Ben', email:"ben@scully.com", hashedPassword:"44"}),

    // Deletes ALL existing entries
    knex('events').del(),
    //event s seed
    knex('events').insert({name: "Welly Potluck", date: "21/10",time: "10:00" , description: "party at my house", location:"The white house" }),
    knex('events').insert({name: "Christchurch Picnic", date: "30/11",time: "23:00", description: "party at my house", location: "12 orange rd"}),
    knex('events').insert({name: "Wizard Feast", date: "20/12",time: "20:00" , description: "party at my house", location:"tiananmen square"}),

    // Deletes ALL existing entries
    knex('hosts').del(),

    // host s seed
    knex('hosts').insert({eventId: 1, userId: 3}),
    knex('hosts').insert({eventId: 2, userId: 3}),
    knex('hosts').insert({eventId: 3, userId: 1}),

     // Deletes ALL existing entries
    knex('guests').del(),

    //guest s seed
    knex('guests').insert({eventId: 1, userId: 3}),
    knex('guests').insert({eventId: 2, userId: 2}),
    knex('guests').insert({eventId: 3, userId: 1}),

    // Deletes ALL existing entries
   knex('dishes').del(),

   //guest s seed
   knex('dishes').insert({course: "Main", name: "Butter chicken", eventId:1,userId:3}),
   knex('dishes').insert({course: "Entree", name: "Cheese", eventId:1,userId:3}),
   knex('dishes').insert({course: "Main", name: "Butter chicken", eventId:2,userId:2}),
   knex('dishes').insert({course: "Main", name: "Butter chicken", eventId:3,userId:1})

  );
};
