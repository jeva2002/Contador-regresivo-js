import './styles/style.scss';
import timerComponent from './components/timerComponent.js';
import footerComponent from './components/footer.js';

document.body.appendChild(timerComponent());
document.body.appendChild(footerComponent());

const [days, hours, minutes, seconds] = document.querySelectorAll('time');

const formatNum = (_num) => {
  return _num < 10 ? '0' + _num : _num;
};

const count = (_time) => {
  const newYear = new Date(2023, 11, 31, 23, 59, 59, 999)
  const date = new Date(Date.now());
  seconds.innerHTML = formatNum(newYear.getSeconds() - date.getSeconds());
  minutes.innerHTML = formatNum(newYear.getMinutes() - date.getMinutes());
  hours.innerHTML = formatNum(newYear.getHours() - date.getHours());
  days.innerHTML = formatNum(newYear.getDate() - date.getDate());
};

setInterval(() => {
  count();
}, 1000);

