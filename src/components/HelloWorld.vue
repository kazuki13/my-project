

<template id="main">
  <div id="app">
    <canvas ref="canvas" id="emo_canvas" width="400" height="400"></canvas>
    <div>
      <video ref="video" id="video" width="400" height="400" playsinline muted autoplay></video>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Axios from 'axios';
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, Axios)

  export default ({
    template: '#main',
    data() {
      return {
        video: {},
        canvas: {},
        captures: [],
        testTimer: '',
      };
    },
    mounted() {
    //カメラを起動し、映像をvideoタグ内に表示
      this.video = this.$refs.video
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then(stream => {
          this.video.srcObject = stream
          this.video.play()
        })
      }

      console.log(this.$refs.canvas)
      // console.log(this.$refs.canvas)

      this.canvas = this.$refs.canvas 
      this.testTimer = setInterval(() => {
        // console.log(this.$refs.canvas)
        let context = this.canvas.getContext("2d")
        context.drawImage(this.video, 0, 0, 400, 240)
        this.captures.push(this.canvas.toDataURL("image/png")) //撮った画像をcaptures配列に格納する
        let subscriptionKey = "68b45082f3c44c9288802ea2521d7fbb";
        let uriBase = "https://kao.cognitiveservices.azure.com/face/v1.0/detect";
        // let params = {
        //   "returnFaceId": "true",
        //   "returnFaceLandmarks": "false",
        //   "returnFaceAttributes":
        //     "emotion"
        // };
        //配列最後に追加された画像のフォーマットを変換し、imgURL変数に代入する
        const imgURL = this.makeblob(this.captures[this.captures.length - 1])
        //imgURLの画像をFaceAPIに送信
        Axios.post(
          uriBase + "?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,emotion",
          imgURL,
          {
            headers: {
              "Content-Type": "application/octet-stream",
              "Ocp-Apim-Subscription-Key": subscriptionKey,
            }
          },
        )
        .then(response => {
          console.log(response.data[0].faceAttributes.emotion)

        })
        .catch(error => {
          console.log(error.response)
        });
      }, 8000);
    },
    methods: {     
      makeblob: function (dataURL) {
        let BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
          let parts = dataURL.split(',');
          let contentType = parts[0].split(':')[1];
          let raw = decodeURIComponent(parts[1]);
          return new Blob([raw], {type: contentType});
        }
        let parts = dataURL.split(BASE64_MARKER);
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;
        let uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {type: contentType})
      }
    }
  });
</script>  