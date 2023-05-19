var player;
  var playPauseImage = document.getElementById('playPauseImage');

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: 'https://www.youtube.com/watch?v=xPHiHTmt2FU',
      playerVars: {
        autoplay: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
      },
    });
  }

  function toggleAudio() {
    if (player.getPlayerState() === 1) { // If the video is playing
      player.pauseVideo();
      playPauseImage.src = 'PLAY_IMAGE_URL';
    } else {
      player.playVideo();
      playPauseImage.src = 'PAUSE_IMAGE_URL';
    }
  }