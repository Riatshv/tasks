const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let numberArr = [0,1,2,3,4,5,6,7,8,9];

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    if (seconds > 24*60*60) {
      seconds = 24*60*60 - 1;
    }
    refreshTimer(seconds);
    let timer = setInterval(() => {
      if (seconds - 1 >= 0) {
        seconds-=1;
        refreshTimer(seconds);
        return;
      }
      clearInterval(timer);
    }, 1000);
  };
};

const refreshTimer = (seconds) => {
  let restHours = Math.floor(seconds/3600);
  let restMinutes = Math.floor((seconds - restHours*3600 )/60);
  let restSeconds = Math.floor(seconds - restHours*3600 - restMinutes*60);
  timerEl.innerHTML = `${formatNum(restHours)}:${formatNum(restMinutes)}:${formatNum(restSeconds)}`
};

const formatNum = (number) => {
  return number < 10 ? `0${number}` : `${number}`
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  if (numberArr.includes(parseInt(e.data))) {
    return
  };
  inputEl.value = inputEl.value.replace(e.data, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
