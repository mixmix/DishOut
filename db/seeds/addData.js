exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('userTable').del(),

    // user table seed
    knex('userTable').insert({name: 'Bill',email:"clinton@ididnotsleepwiththatwomen.com", hashedPassword:"Bxhqhrhabfcbn1312"}),
    knex('userTable').insert({name: 'Ezra', email:"EzraManOfGod@mormon.com", hashedPassword:"12xhqhrhabfcb13123412"}),
    knex('userTable').insert({name: 'Ben', email:"ben@scully.com", hashedPassword:"341Bxhqhrhabfcbn1312"}),


    // Deletes ALL existing entries
    knex('hostTable').del(),

    // host table seed
    knex('hostTable').insert({eventId: 1, userId: 3}),
    knex('hostTable').insert({eventId: 2, userId: 2}),
    knex('hostTable').insert({eventId: 3, userId: 1}),

     // Deletes ALL existing entries
    knex('guestTable').del(),

    //guest table seed
    knex('guestTable').insert({eventId: 1, userId: 3}),
    knex('guestTable').insert({eventId: 2, userId: 2}),
    knex('guestTable').insert({eventId: 3, userId: 1}),

    // Deletes ALL existing entries
    knex('eventsTable').del(),
    //event table seed
    knex('eventsTable').insert({name: "Bill Clinton", date: "21/10",time: "10:00" , description: "party at my house", location:"The white house" }),
    knex('eventsTable').insert({name: "Jack John", date: "30/11",time: "23:00", description: "party at my house", location: "12 orange rd"}),
    knex('eventsTable').insert({name: "Chairman Liu", date: "20/12",time: "20:00" , description: "party at my house", location:"tiananmen square"})
  );
};
