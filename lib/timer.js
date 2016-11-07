'use strict'
const redis = require('./redis.js'),
      uuid = require('node-uuid');

module.exports = {
  start : (callback) => {
    let timerKey = uuid.v4();
    let timeStamp = new Date().getTime();
    redis.setAsync(timerKey, timeStamp).then(() => {
      callback(0, timerKey);
    }).catch((err) => {
      callback(err)
    })
  },

  end : (timerKey, callback) => {
    redis.getAsync(timerKey).then((timeStart) => {
      let timeNow = new Date().getTime();
      let duration = timeNow - timeStart;
      redis.del(timerKey);
      callback(0, duration);
    }).catch((err) => {
      callback(err);
    })
  }
}