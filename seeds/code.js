exports.seed = function (knex, Promise) {
  return knex('code').del()
    .then(function () {
      return Promise.all([
        knex('topics').insert({id:1, text:'git login', description:'will prompt you for your login to github'}),
        knex('topics').insert({id:2, text:'git clone https://www.github.com/username/repo', description:'get a working copy of a repository'}),
        knex('topics').insert({id:3, text:'git checkout -b my-branch', description:'create a branch (-b) and move to (checkout) the branch'}),
        knex('topics').insert({id:4, text:'git branch', description:'will list all the branches that exist on your computer and show you the one you are currently on'}),
        knex('topics').insert({id:5, text:'git add .', description:'will look for any changes in the files, using the one you are in (.) as a base, and add them to be committed'}),
        knex('topics').insert({id:6, text:'git commit -m "some meessage"', description:'adds the commit to HEAD but doesn\'t tell github about it yet'}),
        knex('topics').insert({id:7, text:'git push origin my-branch', description:'sends the changes to github along with a log of the commits'})
      ]);
    });
};
