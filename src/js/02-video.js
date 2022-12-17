import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}

const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(savedTime || 0);
