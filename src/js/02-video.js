import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let interval = throttle((data) => {
		localStorage.setItem('videoplayer-current-time', data.seconds);
	}, 1000)

player.on('timeupdate', interval);

const itemLocalStorage = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(itemLocalStorage).then(function () {

}).catch(function (error) {
	switch (error.name) {
		case 'RangeError':

			break;
		default:

			break;
	}
});
