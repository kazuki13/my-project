




<script src ="./assets/js/pico.js"></script>


<template>
    <div>
      <hr>
              <section>
                  <h3>Using pico.js and lploc.js for real-time localization of eye pupils</h3>
                  <p>Click the button below and allow the page to access your webcam.</p>
                  <p><b>All the processing is done on the client side, i.e., without sending images to a server.</b></p>
                  <p>More information about the algotihm is available <a href="../">here</a>.</p>
              </section>
      <hr>
      <html>
        <body>
          <p><center><input type="button" value="Start webcam feed" onclick="button_callback()"></center></p>
          <p><center><canvas width=640 height=480></canvas></center></p>
          <canvas id="videoElement" width="300" height="300" ></canvas>
        </body>

      </html>




    </div>
     
</template>
