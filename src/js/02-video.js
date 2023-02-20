import Player from '@vimeo/player';
import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VideoCurent = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');

});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    // console.log(data.seconds);
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);

};
player.on('timeupdate', onPlay);
let TimeUpdate = localStorage.getItem(VideoCurent);

player.setCurrentTime(TimeUpdate).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
player.on('timeupdate', throttle(onPlay, 1000)); 