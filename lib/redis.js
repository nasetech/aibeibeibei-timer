var redis = require('redis')
var bluebird = require('bluebird');
var client = redis.createClient('6379', 'localhost');

client.select(3, function(err, data){
  if(err){
    console.log('Redis Select DB Failed');
    console.log(err);
  }else{
    console.log('Redis client Start Success');
  }
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
module.exports = client;