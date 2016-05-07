exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // user s seed
    knex('users').insert({name: 'Bill',email:"clinton@ididnotsleepwiththatwomen.com", hashedPassword:"22"}),
    knex('users').insert({name: 'Ezra', email:"EzraManOfGod@mormon.com", hashedPassword:"33"}),
    knex('users').insert({name: 'Ben', email:"ben@scully.com", hashedPassword:"44"}),
    knex('users').insert({name: 'Tom', email:"tom@hardy.com", hashedPassword:"55"}),
    knex('users').insert({name: 'Jill', email:"jill@little.com", hashedPassword:"66"}),
    knex('users').insert({name: 'Steve', email:"steve@jobs.com", hashedPassword:"77"}),
    knex('users').insert({name: 'Bob', email:"bob@jones.com", hashedPassword:"88"}),
    knex('users').insert({name: 'Harry', email:"Harry@potter.com", hashedPassword:"99"}),
    knex('users').insert({name: 'Eve', email:"Adam@ateapple.com", hashedPassword:"00"}),


    // Deletes ALL existing entries
    knex('events').del(),
    //event s seed
    knex('events').insert({name: "Welly Dinner", date: "21/10",time: "10:00" , description: "Party at my house", location:"The white house" }),
    knex('events').insert({name: "Christchurch Picnic", date: "30/11",time: "23:00", description: "Picnic with the bears", location: "12 orange rd"}),
    knex('events').insert({name: "Wizard Feast", date: "20/12",time: "20:00" , description: "Hermione will be there", location:"Main rd, Tawa"}),
    knex('events').insert({name: "Hot Potato Potluck", date: "23/09",time: "10:00" , description: "Mr Potato head wants you there", location:"The Terrace"}),

    // Deletes ALL existing entries
    knex('hosts').del(),

    // host s seed
    knex('hosts').insert({eventId: 1, userId: 4}),
    knex('hosts').insert({eventId: 2, userId: 3}),
    knex('hosts').insert({eventId: 3, userId: 2}),
    knex('hosts').insert({eventId: 4, userId: 1}),

     // Deletes ALL existing entries
    knex('guests').del(),

    //guest s seed
    knex('guests').insert({eventId: 1, userId: }),
    knex('guests').insert({eventId: 1, userId: }),
    knex('guests').insert({eventId: 2, userId: 4}),
    knex('guests').insert({eventId: 2, userId: 5}),
    knex('guests').insert({eventId: 2, userId: 6}),
    knex('guests').insert({eventId: 2, userId: 7}),
    knex('guests').insert({eventId: 3, userId: 1}),
    knex('guests').insert({eventId: 3, userId: 3}),
    knex('guests').insert({eventId: 3, userId: 4}),
    knex('guests').insert({eventId: 3, userId: 5}),
    knex('guests').insert({eventId: 3, userId: 6}),
    knex('guests').insert({eventId: 3, userId: 7}),
    knex('guests').insert({eventId: 4, userId: 9}),
    knex('guests').insert({eventId: 4, userId: 2}),
    knex('guests').insert({eventId: 4, userId: 3}),
    knex('guests').insert({eventId: 4, userId: 4}),
    knex('guests').insert({eventId: 4, userId: 5}),
    knex('guests').insert({eventId: 4, userId: 6}),
    knex('guests').insert({eventId: 4, userId: 7}),
    knex('guests').insert({eventId: 4, userId: 8}),



    // Deletes ALL existing entries
   knex('dishes').del(),

   //guest s seed
  knex('dishes').insert({course: "Main", name: "Steak, Eggs and Chips", eventId: 1, userId: 1}),
  knex('dishes').insert({course: "Dessert", name: "Chocolate Cake", eventId: 1, userId: 2}),
  knex('dishes').insert({course: "Entree", name: "Oysters", eventId: 2, userId: 4}),
  knex('dishes').insert({course: "Main", name: "Lamb Shanks and Potato Mash", eventId: 2, userId: 5}),
  knex('dishes').insert({course: "Salad", name: "Caeser Salad", eventId: 2, userId: 6}),
  knex('dishes').insert({course: "Dessert", name: "Pavlova", eventId: 2, userId: 7}),
  knex('dishes').insert({course: "Entree", name: "Cheerio Sausages", eventId: 3, userId: 1}),
  knex('dishes').insert({course: "Main", name: "Lasagne", eventId: 3, userId: 3}),
  knex('dishes').insert({course: "Main", name: "Chicken Wings", eventId: 3, userId: }),
  knex('dishes').insert({course: "Dessert", name: "Ice Cream", eventId: 3, userId: }),
  knex('dishes').insert({course: "Dessert", name: "Brownies", eventId: 3, userId: 6}),
  knex('dishes').insert({course: "Salad", name: "Potato Salad", eventId: 3, userId: 7}),
  knex('dishes').insert({course: "Main", name: "Fish and Chips", eventId: 4, userId: 9}),
  knex('dishes').insert({course: "Dessert", name: "Pavlova", eventId: 4, userId: 2}),

  );
};
