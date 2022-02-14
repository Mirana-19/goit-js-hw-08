const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', `${JSON.stringify(currentTime)}`);
  }, 1000),
);

const videoplayerCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (!videoplayerCurrentTime || videoplayerCurrentTime.seconds >= 560) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(videoplayerCurrentTime.seconds);
}
