exports.seed = function (knex, Promise) {
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        {id:1, name:'Command Line', description:'i am neo'},
        {id:2, name:'git', description:'the shiz'},
        {id:3, name:'Heroku', decription:'tis I'}
      ]);
    });
};
