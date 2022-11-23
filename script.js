'use strict';
console.log('Application has started!');

// Select DOM elements
const timerItems = document.querySelectorAll('.timer');
const countdownContainer = document.querySelector('.countdown-clock');

const addZero = function (value) {
  return value > 9 ? value.toString() : `0${value}`;
};

const countdown = function () {
  const futureDate = new Date(2022, 7, 8, 23, 59, 59);
  const presentDate = new Date();
  const time = futureDate.getTime() - presentDate.getTime();

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  const days = Math.floor(time / day);
  const hours = Math.floor((time % day) / hour);
  const minutes = Math.floor((time % hour) / minute);
  const seconds = Math.floor((time % minute) / 1000);

  const values = [
    addZero(days),
    addZero(hours),
    addZero(minutes),
    addZero(seconds),
  ];

  if (time > 0) {
    timerItems.forEach(function (item, i, arr) {
      item.innerHTML = values[i];
    });
  }

  if (time <= 0) {
    countdownContainer.innerHTML = '';
    countdownContainer.innerHTML =
      '<h3 class="countdown-expired">Countdown has expired</h3>';
  }
};

// countdown();
setInterval(countdown, 1000);
