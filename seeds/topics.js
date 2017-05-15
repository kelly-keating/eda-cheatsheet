exports.seed = function (knex, Promise) {
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        knex('topics').insert({id:1, name:'Command Line', description:'i am neo'}),
        knex('topics').insert({id:2, name:'git', description:'the shiz'}),
        knex('topics').insert({id:3, name:'Heroku', description:'tis I'})
      ]);
    });
};
