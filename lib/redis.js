var redis = require('redis')
var client = redis.createClient('6379', 'localhost');

client.select(3, function(err, data){
  if(err){
    console.log('Redis Select DB Failed');
    console.log(err);
  }else{
    console.log('Redis client Start Success');
  }
});

module.exports = client;