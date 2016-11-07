'use strict'
const timer = require('../lib/timer.js')
timer.start((err, timerKey) => {
  if(err)
    return console.log(err);
  console.log(timerKey)
  timer.end(timerKey, (err, timeStamp) => {
    if(err)
      return console.log(err);
    console.log(timeStamp)
  })
});