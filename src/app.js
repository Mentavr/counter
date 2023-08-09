const getCounter = () => {
    const number = (numb) => {
      return numb < 10 ? `0${numb}` :  numb;
    }
    const hour = document.querySelector(".hour");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    let hoursCount = 0;
    let minutesCount = 0;
    let secondsCount = 0;
    return setInterval(() => {
        if (minutesCount === 59) {
            hoursCount =+ 1;
            minutesCount = 0;
        }
        if (secondsCount === 59) {
            minutesCount =+ 1;
            secondsCount = 0;
        }
        secondsCount += 1; 
        hour.textContent = `${number(hoursCount)}:`;
        minutes.textContent = `${number(minutesCount)}:`;
        seconds.textContent = `${number(secondsCount)}`;
    }, 1000)
}
export default getCounter;