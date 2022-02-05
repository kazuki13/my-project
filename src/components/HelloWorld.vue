

<script>
const { AnonymousCredential, BlobServiceClient, newPipeline } = require('@azure/storage-blob');
// const { v1: uuidv1} = require('uuid');
const fs = require("fs");
async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    // Quick start code goes here
    // Retrieve the connection string for use with the application. The storage
    // connection string is stored in an environment variable on the machine
    // running the application called AZURE_STORAGE_CONNECTION_STRING. If the
    // environment variable is created after the application is launched in a
    // console or with Visual Studio, the shell or application needs to be closed
    // and reloaded to take the environment variable into account.
  // Fill in following settings before running this sample
  const account = process.env.ACCOUNT_NAME || "pass";
  const accountSas = process.env.ACCOUNT_SAS || "https://pass.blob.core.windows.net/image?sv=2020-10-02&st=2022-02-05T12%3A50%3A33Z&se=2022-02-06T12%3A50%3A33Z&sr=c&sp=racwdxlt&sig=JyX4nkKgaFBVxapJrizL2LQ0gduCv9Eokiy2Q69D5e8%3D";
  const localFilePath = "face.png";

  const pipeline = newPipeline(new AnonymousCredential(), {
    // httpClient: MyHTTPClient, // A customized HTTP client implementing IHttpClient interface
    retryOptions: { maxTries: 4 }, // Retry options
    userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" }, // Customized telemetry string
    keepAliveOptions: {
      // Keep alive is enabled by default, disable keep alive by setting false
      enable: false
    }
    });
    const blobServiceClient = new BlobServiceClient(
        `https://${account}.blob.core.windows.net${accountSas}`,
        pipeline
    );
    console.log("bjkl;g")
    // Create a unique name for the container
    const containerName = `image`;
    console.log('\nCreating container...');
    console.log('\t', containerName);

    // Get a reference to a container
    
    const containerClient = blobServiceClient.getContainerClient(containerName);
    console.log('\nListing blobs...');

	console.log('\nUploading to Azure storage as blob:\n\t', containerName);

	// Upload data to the blob
  try {
    await containerClient.uploadStream(fs.createReadStream(localFilePath), 4 * 1024 * 1024, 20, {
      abortSignal: AbortController.timeout(30 * 60 * 1000), // Abort uploading with timeout in 30mins
      onProgress: (ev) => console.log(ev)
    });
    console.log("uploadStream succeeds");
  } catch (err) {
    console.log(
      `uploadStream failed, requestId - ${err.details.requestId}, statusCode - ${err.statusCode}, errorCode - ${err.details.errorCode}`
    );
  }

	// console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
}

main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));
</script>
<template>
  <div>
    AZURE_STORAGE_ACCOUNT_ACCESS_KEY
  </div>
</template>
