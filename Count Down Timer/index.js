// Digital Timer Function
function startDigitalCountdown(targetDate) {
  const daysEl = document.getElementById('digital-days');
  const hoursEl = document.getElementById('digital-hours');
  const minutesEl = document.getElementById('digital-minutes');
  const secondsEl = document.getElementById('digital-seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById('digital-timer').innerHTML = "00 : 00 : 00 : 00";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  updateTimer(); // Initial call to avoid delay
  const interval = setInterval(updateTimer, 1000);
}

// Analog Timer Function
function startAnalogCountdown(targetDate) {
  const secondsHand = document.getElementById('hand-seconds');
  const minutesHand = document.getElementById('hand-minutes');
  const hoursHand = document.getElementById('hand-hours');

  function updateClock() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      secondsHand.style.transform = `rotate(0deg)`;
      minutesHand.style.transform = `rotate(0deg)`;
      hoursHand.style.transform = `rotate(0deg)`;
      clearInterval(interval);
      return;
    }

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    secondsHand.style.transform = `rotate(${seconds * 6}deg)`;
    minutesHand.style.transform = `rotate(${minutes * 6}deg)`;
    hoursHand.style.transform = `rotate(${hours * 30}deg)`;
  }

  updateClock(); // Initial call to avoid delay
  const interval = setInterval(updateClock, 1000);
}

const targetDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; // Example: 2 days from now
startDigitalCountdown(targetDate);
startAnalogCountdown(targetDate);
