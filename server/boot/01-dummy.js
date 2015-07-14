var async = require('async');

module.exports = function(app) {

  var Person  = app.models.Person;

  if (app.dataSources.db.name !== 'Memory') {
    //check to see if we already imported data
  }else{
    createDefaultData();
  }

  function createDefaultData(){

    var whiplash = {
      email: "whip@lash.com",
      password: "kitten",
      fullname: "Whiplash"
    };

    Person.create(whiplash, function(error, response){
      whiplash = response;
    });

  }

};
