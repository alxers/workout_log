// Counter
// TODO: refactor

//document.addEventListener('DOMContentLoaded', makeCounter);
getStartStopBtn().addEventListener('click', startOrStopCounter);

function restTime() {
  return 30;
}

function exerciseTime() {
  return 10;
}

function getRestText() {
  return 'Resting';
}

function getExerciseText() {
  return 'Exercising';
}

function incrementer() {
  var count = 1;
  var sets = 0;
  var isResting = false;

  var intervalId = setInterval(function() {
    count += 1;
    if (isResting && count > restTime()) {
      count = 1;
      getTimeCounterTextEl().innerHTML = '';
      getTimeCounterTextEl().innerHTML = getExerciseText();
      isResting = false;
    }

    if (!isResting && count > exerciseTime()) {
      count = 1;
      sets += 1;
      getSetsCounterEl().innerHTML = sets;
      getTimeCounterTextEl().innerHTML = getRestText();
      isResting = true;
    }
    getTimeCounterEl().innerHTML = count;
  }, 1000);

  return intervalId;
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

function getTimeCounterTextEl() {
  return getEl('.js-workout-counter__time--text');
}

function getStartStopBtn() {
  return getEl('.js-workout-counter__btn');
}

function makeCounter() {
  getTimeCounterTextEl().innerHTML = getExerciseText();
  incrementer();
}

function startOrStopCounter(e) {
  var btnData = e.currentTarget.dataset;
  if (btnData.action === 'stopped') {
    getTimeCounterTextEl().innerHTML = getExerciseText();
    incrementer();
    btnData.action = 'started'
  } else {
    clearInterval(incrementer());
  }
}
