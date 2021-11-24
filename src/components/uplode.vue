
<template>
  <div class="app-container">
    <div id="lightgallery">
      <a href=".\assets\logo.png">
        <img src=".\assets\logo.png" width="100" height="100" />
      </a>
    </div>

  </div>
</template>
import 'lightgallery.js'
import 'lightgallery.js/dist/css/lightgallery.css'

export default {
  name: 'IssueDetail',
  data() {
    return {
      imageList: []
    }
  },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el)
  }
}