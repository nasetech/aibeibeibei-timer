'use strict'
const timer = require('../lib/timer.js')
timer.start((err, timerKey) => {
  if(err)
    return console.log(err);
  console.log(timerKey)
  timer.end(timerKey, (err, duration) => {
    if(err)
      return console.log(err);
    console.log(duration);
  })
});