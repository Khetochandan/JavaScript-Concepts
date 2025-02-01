// stop the interval after 10 seconds
let intervalId = setInterval(function () {
  console.log(`This is function is being executed at the interval`),1000})

  // stop the interval after 10 seconds
 setTimeout(function (params) {
    clearInterval(intervalId)
    console.log(`interval Stopped`)},1000)