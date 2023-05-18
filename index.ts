const time_h1: HTMLInputElement = document.querySelector(".current-time");

const getTime = () => {
  const currentTime: Date = new Date();
  const hours = currentTime.getHours();
  let minutes: number | string = currentTime.getMinutes();
  let seconds: number | string = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time_h1.innerHTML = hours + ":" + minutes + ":" + seconds;
};

const timeInterv = setInterval(() => getTime(), 1000);
timeInterv;
