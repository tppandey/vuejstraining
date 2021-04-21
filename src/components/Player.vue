<template>
  <div>
      i am player
       <video id="video"
           width="640"
           poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
           controls
            ></video>
  </div>
</template>

<script>

import shaka from 'shaka-player'

export default {

mounted () {
    const manifestUri =
    'https://cdn.cloud.altbalaji.com/content/2021-02/7604-6019a29bed613/manifest.mpd';

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}
function setVideoTrackToPlayer(track) {
        if (window.player) {
          let configOfPlayer = window.player.getConfiguration();
          if((track.title) && (track.title).toLowerCase() == "auto") {
            configOfPlayer.abr.enabled = true;
            window.player.configure(configOfPlayer);
          } else {
            configOfPlayer.abr.enabled = false;
            window.player.configure(configOfPlayer);
            window.player.selectVariantTrack(track,true);
          }
        }
  }
function resolution () {
  var videoTracksList = window.player.getVariantTracks();
  console.log("videoTracksList", videoTracksList)
  setVideoTrackToPlayer(videoTracksList[0])

}

 function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;
  // resolution();

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
     player.load(manifestUri).then(() => {
         video.play()
           resolution();

     })
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);

}
}
</script>

<style>

</style>