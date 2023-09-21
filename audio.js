function playAudio(songFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songFile;
    audioPlayer.play();
}
