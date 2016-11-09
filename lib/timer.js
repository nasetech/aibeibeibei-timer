'use strict'
const redis = require('./redis.js'),
      uuid = require('node-uuid');

module.exports = {
  start : (callback) => {
    let timerKey = uuid.v4();
    let timeStamp = new Date().getTime();
    redis.set(timerKey, timeStamp, (err, rs) => {
      if(err)
        return callback(err);
      redis.expire(timerKey, 3600);
      return callback(0, timerKey);
    })
  },

  end : (timerKey, callback) => {
    redis.get(timerKey, (err, timeStart) => {
      if(err)
        return callback(err);
      let timeNow = new Date().getTime();
      let duration = timeNow - timeStart;
      redis.del(timerKey);
      return callback(0, duration);
    })
  }
}