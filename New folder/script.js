// script.js

function countdown(num, callback) {
  if (num === 0) {
    callback();
  } else {
    console.log(num);
    setTimeout(function() {
      countdown(num - 1, callback);
    }, 1000);
  }
}

function displayMessage() {
  console.log("Happy Independence Day!");
}

countdown(10, displayMessage);
