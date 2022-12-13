import './styles/style.scss';

const [days, hours, minutes, seconds] = document.querySelectorAll('time');

const formatNum = (_num) => {
  return _num < 10 ? '0' + _num : _num;
};

const count = () => {
  const date = new Date(Date.now());
  seconds.innerHTML = formatNum(60 - date.getSeconds());
  minutes.innerHTML = formatNum(60 - date.getMinutes());
  hours.innerHTML = formatNum(24 - date.getHours());
  days.innerHTML = formatNum(31 - date.getDate());
};

setInterval(() => {
  count();
}, 1000);
