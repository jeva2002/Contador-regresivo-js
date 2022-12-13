import './styles/style.scss';
import timerComponent from './components/timerComponent.js';
import footerComponent from './components/footer.js';
import axios from 'axios';

document.body.appendChild(timerComponent());
document.body.appendChild(footerComponent());

const [days, hours, minutes, seconds] = document.querySelectorAll('time');

const formatNum = (_num) => {
  return _num < 10 ? '0' + _num : _num;
};

const count = (_time) => {
  const date = new Date(Date.now());
  seconds.innerHTML = formatNum(60 - date.getSeconds());
  minutes.innerHTML = formatNum(60 - date.getMinutes());
  hours.innerHTML = formatNum(24 - date.getHours());
  days.innerHTML = formatNum(31 - date.getDate());
};

setInterval(() => {
  count();
}, 1000);

axios.get('http://worldtimeapi.org/api/timezone/America/Bogota').then((res) => {
  console.log(res.data.utc_datetime);
});
