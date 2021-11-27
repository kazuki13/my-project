
<div id="app">
    <div class="drop_area" @dragenter="dragEnter" @dragleave="dragLeave" @dragover.prevent @drop.prevent="dropFile" :class="{enter: isEnter}">
        ファイルアップロード
    </div>
</div>


methods: {
    dragEnter() {
        console.log('Enter Drop Area');
    }
}

