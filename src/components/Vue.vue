


<script>
  <div class="hello">
    import vGallery from 'v-gallery'
    Vue.use(vGallery);
    
    new Vue({
        el: '#app',
      data: {
        list: [
          {title:'logo',url:'./assets/logo.png'},
          {title:'Image2',url:'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded2'},
          {title:'Image3',url:'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded3'},
          {title:'Image4',url:'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded4'},
        ]
      }
    });
  </div>  
</script>
<style scoped>
  body {
    background: #20262E;
    padding: 20px;
    font-family: Helvetica;
  }
  
  #app {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }
  </style>