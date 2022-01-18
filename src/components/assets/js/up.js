// import { videoElement } from './aaa.js';


'use strict';
// a  = videoElement
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

//ファイルを利用
// const fs = require(`fs`);
const FILE_PATH = `face.png`;

//画像ファイルをbase64文字列へ
// const image_data = fs.readFileSync(FILE_PATH);
// const base64_data = "data:image/jpeg;base64," + image_data.toString('base64');

async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "kaopass2";
  const accountKey = process.env.ACCOUNT_KEY || "";

  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );

  //コンテナを作成した名前に指定
  const containerName = `image`;
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Create a blob
  const content = FILE_PATH; //変換したbase64文字列を使う
  const blobName = "test" +  '.png';
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(content, Buffer.byteLength(content));
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
}

main().catch((err) => console.error("Error running sample:", err.message));