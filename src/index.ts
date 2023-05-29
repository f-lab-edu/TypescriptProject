import dayjs from "dayjs";

const time_h1: HTMLInputElement = document.querySelector(".current-time");

const getTime = () => {
  const now = dayjs();

  let hours: string | number = now.get("hour");
  let minutes: string | number = now.get("minutes");
  let seconds: string | number = now.get("seconds");

  if(hours < 10){
    hours = "0" + hours;
  }

  if (minutes < 10){
    minutes = "0" + minutes;
  }

  if (seconds < 10){
    seconds = "0" + seconds
  }
  time_h1.innerHTML = hours + ":" + minutes + ":" + seconds;
};

const timeInterv = setInterval(()=>getTime(),1000)
timeInterv;