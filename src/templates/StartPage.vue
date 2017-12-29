<style>
  .main-video {
    width: 100%;
  }
  .video-container {
    position: relative;
  }
  .video-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../assets/video-overlay.png')
  }
</style>
<template>
  <div class="">
    <div class="video-container">
      <div class="video-overlay"></div>
      <video class="main-video" :src="$remoteAddress + '/video/video.mp4'" autoplay muted loop></video>
    </div>

  </div>
</template>
<script></script>

