






// <script>


// 'use strict';
// // a  = videoElement
// const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

// //ファイルを利用
// // const fs = require(`fs`);
// const FILE_PATH = `face.png`;

// //画像ファイルをbase64文字列へ
// // const image_data = fs.readFileSync(FILE_PATH);
// // const base64_data = "data:image/jpeg;base64," + image_data.toString('base64');

// async function main() {
//   // Enter your storage account name and shared key
//   const account = process.env.ACCOUNT_NAME || "kaopass2";
//   const accountKey = process.env.ACCOUNT_KEY || "ETuD27jryBN3Ytt3DAXxYaQX0/qgr3D8OAzJlKzN2w1K4nPnytpjsxhtJ7bIM6Rknd7ke5vMlswigxrIvW5LlA==";

//   const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
//   const blobServiceClient = new BlobServiceClient(
//     `https://${account}.blob.core.windows.net`,
//     sharedKeyCredential
//   );

//   //コンテナを作成した名前に指定
//   const containerName = `image`;
//   const containerClient = blobServiceClient.getContainerClient(containerName);

//   // Create a blob
//   const content = FILE_PATH; //変換したbase64文字列を使う
//   const blobName = "test" +  '.png';
//   const blockBlobClient = containerClient.getBlockBlobClient(blobName);
//   const uploadBlobResponse = await blockBlobClient.upload(content, Buffer.byteLength(content));
//   console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
// }
// main().catch((err) => console.error("Error running sample:", err.message));
// </script>
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
          <p><center><input type="button" value="Start webcam feed" onclick="main()"></center></p>
          <p><center><canvas width=640 height=480></canvas></center></p>
          
        </body>
      </html>
    </div>
     
</template>
