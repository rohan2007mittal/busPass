function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function formatHours(hours) {
  if (hours === 0) {
    return 12;
  } else if (hours > 12) {
    return hours - 12;
  }
  return hours;
}

function shortenedMonth(month) {
  const shortenedMonthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return shortenedMonthNames[month - 1];
}

function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = formatHours(hours);

  document.getElementById('current-time').textContent =
    `${formatHours(formattedHours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;

  const expirationTime = new Date(currentTime.getTime() + 70 * 60 * 1000);
  const expHours = expirationTime.getHours();
  const expMinutes = expirationTime.getMinutes();
  const expMonth = expirationTime.getMonth() + 1;
  const expDay = expirationTime.getDate();
  const expYear = expirationTime.getFullYear();
  const formattedExpHours = formatHours(expHours);
  const exp_ampm = expHours >= 12 ? 'PM' : 'AM';
  const monthName = shortenedMonth(expMonth);
  
  document.getElementById('expiration-time').textContent =
    `Expires ${formatTime(monthName)} ${formatTime(expDay)}, ${expYear} at ${formatHours(formattedExpHours)}:${formatTime(expMinutes)} ${exp_ampm}`;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

updateTime();
setInterval(updateTime, 1000);
