let song = new Audio();
document.getElementById('progressBar').addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        clickedValue = x * this.max / this.offsetWidth;
    document.getElementById('progressBar').value = clickedValue;
    song.currentTime = (clickedValue / 100) * song.duration;
});

setInterval(() => {
    if (song.currentTime != 0) {
        document.getElementById('progressBar').value = (song.currentTime / song.duration) * 100;
    }
}, 10);

function play() {
    song.play();
}

function pause() {
    song.pause();
}

function stop() {
    song.pause();
    song.currentTime = 0;
    document.getElementById('progressBar').value = 0;
}

document.getElementById('musicUploader').addEventListener('change', function (e) {
    if (this.value != '') {
        let songDurationMinutes, songDurationSeconds, songDuration, songTimeMinutes, songTimeSeconds, songTime = 0;
        song.pause();
        song.currentTime = 0;
        document.getElementById('progressBar').value = 0;
        song = new Audio(URL.createObjectURL(this.files[0]));
        song.addEventListener('loadedmetadata', function () {
            songDurationMinutes = Math.floor(song.duration / 60);
            songDurationSeconds = song.duration / 60 % 1 * 60;
            songDurationSeconds = Math.floor(songDurationSeconds);
            if (songDurationSeconds.toString().length == 1) {
                songDurationSeconds = "0" + songDurationSeconds;
            }
            songDuration = songDurationMinutes + ":" + songDurationSeconds;
            document.getElementById('songDuration').innerHTML = songDuration; //FORMAT IS 00:00 / 00:00
        });
        setInterval(function(){
            songTimeMinutes = Math.floor(song.currentTime / 60);
            songTimeSeconds = song.currentTime / 60 % 1 * 60;
            songTimeSeconds = Math.floor(songTimeSeconds);
            if (songTimeSeconds.toString().length == 1) {
                songTimeSeconds = "0" + songTimeSeconds;
            }
            songTime = songTimeMinutes + ":" + songTimeSeconds;
            document.getElementById('songCurrentTime').innerHTML = songTime;
        }, 10);
    }
});