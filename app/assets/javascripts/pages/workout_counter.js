// Counter
// TODO: refactor

document.addEventListener('DOMContentLoaded', makeCounter);

function restTime() {
  return 30;
}

function exerciseTime() {
  return 10;
}

function incrementer() {
  var count = 1;
  var sets = 0;
  var isResting = false;

  setInterval(function() {
    count += 1;
    if (isResting && count > restTime()) {
      count = 0;
      isResting = false;
    }

    if (count > exerciseTime()) {
      count = 0;
      sets += 1;
      getSetsCounterEl().innerHTML = sets;
      isResting = true;
    }
    getTimeCounterEl().innerHTML = count;
  }, 1000);
}

function getEl(elClass) {
  return document.querySelector(elClass);
}

function getTimeCounterEl() {
  return getEl('.js-workout-counter__time');
}

function getSetsCounterEl() {
  return getEl('.js-workout-counter__sets');
}

function makeCounter() {
  incrementer();
}