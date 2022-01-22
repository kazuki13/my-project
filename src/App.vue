<template>
  <div id="app">
   
    
    <HelloWorld @click="button_callback('uplode')"></HelloWorld>

  </div>
</template>


<script>
import HelloWorld from './components/uplode.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {

    canvas(message) {
      alert(message);
    },
    snapshot(message) {
      alert(message);
    },
    sleep(message) {
      alert(message);
    },
    button_callback(message) {
      alert(message);
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .enter {
    Sborder: 10px dotted powderblue;
  }
}
</style>
