<template>
    <div class="drop_area">
     ファイルアップロード
    </div>
</template>
<x-invalid-end-tag>
<div id="app">
    <div class="drop_area" @dragenter="dragEnter" @dragleave="dragLeave" @dragover.prevent @drop.prevent="dropFile" :class="{enter: isEnter}">
        ファイルアップロード
    </div>
    <div>
        <ul>
            <li v-for="file in files">{{ file.name }}
            </li>
        </ul>
    </div>
</div>

<script>
const app = new Vue({
    el: "#app",
    data: {
        isEnter: false,
        files: []
    },
    methods: {
        dragEnter() {
            this.isEnter = true;
        },
        dragLeave() {
            this.isEnter = false;
        },
        dropFile() {
            this.files = [...event.dataTransfer.files]
            this.isEnter = false;
        }
    }
})
</script>
<style>
    .enter {
        border: 10px dotted powderblue;
    }
</style>
