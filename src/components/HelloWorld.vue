<template>
  <div id="app">
    <div class="drop_area"  @dragenter="dragEnter"  :class="{enter: isEnter}">
      ファイルアップロード
    </div>
  </div>
</template>


methods: {
    dragEnter() {
        console.log('Enter Drop Area');
    }
}

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enter {
    border: 10px dotted powderblue;
}
</style>
