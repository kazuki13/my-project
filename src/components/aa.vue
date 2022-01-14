
    <!-- ライブラリ -->
<script src="./assets/js2/lib/clmtrackr.js"></script>
<script src="./assets/js2/lib/model_pca_20_svm.js"></script>
<script src="./assets/js2/app.js"></script>

<template>
	<div class="wrapper">
		<video id="video" class="video" autoplay playsinline="true"></video>
		<canvas id="overlay" class="overlay"></canvas>
	</div>
</template>

<style>
    html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0 auto;
}

.wrapper {
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
}

.main {
  width: 100%;
  position: relative;
}

.video {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  margin: 0 auto;
}

.overlay {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>