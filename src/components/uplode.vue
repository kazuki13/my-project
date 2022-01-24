
<template>

	<div  class="button" @click="button_callback">ボタン</div>
</template>

<html>
  <body>
    <script src = "./assets/js/pico"></script>
  </body>
</html>
<script>
	const FILE_PATH = `face.png`;
	const { BlobServiceClient, StorageSharedKeyCredential, readFileSync} = require('@azure/storage-blob');
	const { v1: uuidv1} = require('uuid');
	function snapshot() {
	console.info('スナップショットをとるよ！');

	var videoElement = document.querySelector('video');
	var canvasElement = document.querySelector('canvas');
	var context = canvasElement.getContext('2d');

	context.drawImage(videoElement, 0, 0, videoElement.width, videoElement.height);
	document.querySelector('img').src = canvasElement.toDataURL('image/png');
	async function  main() {

			console.log('Azure Blob storage v12 - JavaScript quickstart sample');
			// Quick start code goes here

			// const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
			// const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
			const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || "kaopass2";
			const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY || "";;
			// const account = process.env.ACCOUNT_NAME || "kaopass2";
			// const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
			//   const blobServiceClient = new BlobServiceClient(
			//     `https://${account}.blob.core.windows.net`,
			//     sharedKeyCredential
			// );
				// const credentials  = new StorageSharedKeyCredential(STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY);
				
				const blobServiceClient = new BlobServiceClient(
					`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
					STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY
				);
			console.log("OK!")
			// Create a unique name for the blob
			const blobName = "test" +  '.png';

			console.log(blobName)
			// Get a block blob client

			const containerName = `image`;
			const containerClient = blobServiceClient.getContainerClient(containerName);

			console.log('\nUploading to Azure storage as blob:\n\t', containerName);

			// Upload data to the blob
			const content = FILE_PATH; //変換したbase64文字列を使う
			
			const blockBlobClient = containerClient.getBlockBlobClient(blobName);
			console.log("OK!2")
			const uploadBlobResponse = await blockBlobClient.upload( Access-Control-Allow-Origin: "https://localhost8080", content, Buffer.byteLength(content));
			console.log("OK!3")
			console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

			}		
			main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));
}
	// async function  main() {

	// 		console.log('Azure Blob storage v12 - JavaScript quickstart sample');
	// 		// Quick start code goes here

	// 		// const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
	// 		// const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
	// 		const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || "kaopass2";
	// 		const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY || "";;
	// 		// const account = process.env.ACCOUNT_NAME || "kaopass2";
	// 		// const accountKey = process.env.ACCOUNT_KEY || "";
	// 		// const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
	// 		//   const blobServiceClient = new BlobServiceClient(
	// 		//     `https://${account}.blob.core.windows.net`,
	// 		//     sharedKeyCredential
	// 		// );
	// 			// const credentials  = new StorageSharedKeyCredential(STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY);
				
	// 			const blobServiceClient = new BlobServiceClient(
	// 				`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
	// 				STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY
	// 			);
	// 		console.log("OK!")
	// 		// Create a unique name for the blob
	// 		const blobName = "test" +  '.png';
	// 		console.log(blobName)
	// 		// Get a block blob client

	// 		const containerName = `image`;
	// 		const containerClient = blobServiceClient.getContainerClient(containerName);

	// 		console.log('\nUploading to Azure storage as blob:\n\t', containerName);

	// 		// Upload data to the blob
	// 		const content = FILE_PATH; //変換したbase64文字列を使う
			
	// 		const blockBlobClient = containerClient.getBlockBlobClient(blobName);
	// 		const uploadBlobResponse = await blockBlobClient.upload(content, Buffer.byteLength(content));
	// 		console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
	// 		       }
			// const data = 'Hello, World!';
			// const uploadBlobResponse = await containerClient.upload(data, data.length);
			// console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
			
			// 'use strict';
			// const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
			// async function main() {
			// 	// Enter your storage account name and shared key
			// 	const account = process.env.ACCOUNT_NAME || "kaopass2";
			// 	const accountKey = process.env.ACCOUNT_KEY || "ETuD27jryBN3Ytt3DAXxYaQX0/qgr3D8OAzJlKzN2w1K4nPnytpjsxhtJ7bIM6Rknd7ke5vMlswigxrIvW5LlA==";

			// 	const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
			// 	const blobServiceClient = new BlobServiceClient(
			// 		`https://${account}.blob.core.windows.net`,
			// 		sharedKeyCredential
			// 	);
			// 	console.log("OK!");
			// 	//コンテナを作成した名前に指定
			// 	const containerName = `image`;
			// 	const containerClient = blobServiceClient.getContainerClient(containerName);
			// 	console.log(containerName)
			// 	// Create a blob
			// 	const content = canvasElement; //変換したbase64文字列を使う
			// 	const blobName = "test" +  '.png';
			// 	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
			// 	const uploadBlobResponse = await blockBlobClient.upload(content, Buffer.byteLength(content));
			// 	console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
			// 	}

	export default {	
	
			// pico: {},

			// pico,unpack_cascade : function(bytes)
			// {

			// 	const dview = new DataView(new ArrayBuffer(4));

			// 	let p = 8;

			// 	dview.setUint8(0, bytes[p+0]), dview.setUint8(1, bytes[p+1]), dview.setUint8(2, bytes[p+2]), dview.setUint8(3, bytes[p+3]);
			// 	const tdepth = dview.getInt32(0, true);
			// 	p = p + 4

			// 	dview.setUint8(0, bytes[p+0]), dview.setUint8(1, bytes[p+1]), dview.setUint8(2, bytes[p+2]), dview.setUint8(3, bytes[p+3]);
			// 	const ntrees = dview.getInt32(0, true);
			// 	p = p + 4

			// 	const tcodes_ls = [];
			// 	const tpreds_ls = [];
			// 	const thresh_ls = [];
			// 	for(let t=0; t<ntrees; ++t)
			// 	{
			// 		Array.prototype.push.apply(tcodes_ls, [0, 0, 0, 0]);
			// 		Array.prototype.push.apply(tcodes_ls, bytes.slice(p, p+4*Math.pow(2, tdepth)-4));
			// 		p = p + 4*Math.pow(2, tdepth)-4;
			// 		for(let i=0; i<Math.pow(2, tdepth); ++i)
			// 		{
			// 			dview.setUint8(0, bytes[p+0]), dview.setUint8(1, bytes[p+1]), dview.setUint8(2, bytes[p+2]), dview.setUint8(3, bytes[p+3]);
			// 			tpreds_ls.push(dview.getFloat32(0, true));
			// 			p = p + 4;
			// 		}
			// 		dview.setUint8(0, bytes[p+0]), dview.setUint8(1, bytes[p+1]), dview.setUint8(2, bytes[p+2]), dview.setUint8(3, bytes[p+3]);
			// 		thresh_ls.push(dview.getFloat32(0, true));
			// 		p = p + 4;
			// 	}
			// 	const tcodes = new Int8Array(tcodes_ls);
			// 	const tpreds = new Float32Array(tpreds_ls);
			// 	const thresh = new Float32Array(thresh_ls);

			// 	function classify_region(r, c, s, pixels, ldim)
			// 	{
			// 		r = 256*r;
			// 		c = 256*c;
			// 		let root = 0;
			// 		let o = 0.0;
			// 		const pow2tdepth = Math.pow(2, tdepth) >> 0; 

			// 		for(let i=0; i<ntrees; ++i)
			// 		{
			// 			let idx = 1;
			// 			for(let j=0; j<tdepth; ++j)
			// 				idx = 2*idx + (pixels[((r+tcodes[root + 4*idx + 0]*s) >> 8)*ldim+((c+tcodes[root + 4*idx + 1]*s) >> 8)]<=pixels[((r+tcodes[root + 4*idx + 2]*s) >> 8)*ldim+((c+tcodes[root + 4*idx + 3]*s) >> 8)]);

			// 			o = o + tpreds[pow2tdepth*i + idx-pow2tdepth];

			// 			if(o<=thresh[i])
			// 				return -1;

			// 			root += 4*pow2tdepth;
			// 		}
			// 		return o - thresh[ntrees-1];
			// 	}

			// 	return classify_region;
			// },
			// pico,run_cascade : function(image, classify_region, params)
			// {
			// 	const pixels = image.pixels;
			// 	const nrows = image.nrows;
			// 	const ncols = image.ncols;
			// 	const ldim = image.ldim;

			// 	const shiftfactor = params.shiftfactor;
			// 	const minsize = params.minsize;
			// 	const maxsize = params.maxsize;
			// 	const scalefactor = params.scalefactor;

			// 	let scale = minsize;
			// 	const detections = [];

			// 	while(scale<=maxsize)
			// 	{
			// 		const step = Math.max(shiftfactor*scale, 1) >> 0; 
			// 		const offset = (scale/2 + 1) >> 0;

			// 		for(let r=offset; r<=nrows-offset; r+=step)
			// 			for(let c=offset; c<=ncols-offset; c+=step)
			// 			{
			// 				const q = classify_region(r, c, scale, pixels, ldim);
			// 				if (q > 0.0)
			// 					detections.push([r, c, scale, q]);
			// 			}
					
			// 		scale = scale*scalefactor;
			// 	}

			// 	return detections;
			// },

			// pico,cluster_detections : function(dets, iouthreshold)
			// {

			// 	dets = dets.sort(function(a, b) {
			// 		return b[3] - a[3];
			// 	});

			// 	function calculate_iou(det1, det2)
			// 	{
			// 		const r1=det1[0], c1=det1[1], s1=det1[2];
			// 		const r2=det2[0], c2=det2[1], s2=det2[2];
			// 		const overr = Math.max(0, Math.min(r1+s1/2, r2+s2/2) - Math.max(r1-s1/2, r2-s2/2));
			// 		const overc = Math.max(0, Math.min(c1+s1/2, c2+s2/2) - Math.max(c1-s1/2, c2-s2/2));
			// 		return overr*overc/(s1*s1+s2*s2-overr*overc);
			// 	}

			// 	const assignments = new Array(dets.length).fill(0);
			// 	const clusters = [];
			// 	for(let i=0; i<dets.length; ++i)
			// 	{

			// 		if(assignments[i]==0)
			// 		{

			// 			let r=0.0, c=0.0, s=0.0, q=0.0, n=0;
			// 			for(let j=i; j<dets.length; ++j)
			// 				if(calculate_iou(dets[i], dets[j])>iouthreshold)
			// 				{
			// 					assignments[j] = 1;
			// 					r = r + dets[j][0];
			// 					c = c + dets[j][1];
			// 					s = s + dets[j][2];
			// 					q = q + dets[j][3];
			// 					n = n + 1;
			// 				}

			// 			clusters.push([r/n, c/n, s/n, q]);
			// 		}
			// 	}

			// 	return clusters;
			// },
		methods:{
			
			camvas(ctx, callback) {
				var self = this
				this.ctx = ctx
				this.callback = callback
			
				// We can't `new Video()` yet, so we'll resort to the vintage
				// "hidden div" hack for dynamic loading.
				var streamContainer = document.createElement('div')
				this.video = document.createElement('video')
			
				// If we don't do this, the stream will not be played.
				// By the way, the play and pause controls work as usual 
				// for streamed videos.
				this.video.setAttribute('autoplay', '1')
				this.video.setAttribute('playsinline', '1') // important for iPhones
			
				// The video should fill out all of the canvas
				this.video.setAttribute('width', 1)
				this.video.setAttribute('height', 1)
			
				streamContainer.appendChild(this.video)
				document.body.appendChild(streamContainer)
			
				// The callback happens when we are starting to stream the video.
				navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream) {
				// Yay, now our webcam input is treated as a normal video and
				// we can start having fun
				self.video.srcObject = stream
				// Let's start drawing the canvas!
				self.update()
				}, function(err) {
				throw err
				})
			
				// As soon as we can draw a new frame on the canvas, we call the `draw` function 
				// we passed as a parameter.
				this.update = function() {
				var self = this
				var last = Date.now()
				var loop = function() {
					// For some effects, you might want to know how much time is passed
					// since the last frame; that's why we pass along a Delta time `dt`
					// variable (expressed in milliseconds)
					var dt = Date.now() - last
					self.callback(self.video, dt)
					last = Date.now()
					requestAnimationFrame(loop) 
				}
				requestAnimationFrame(loop) 
				} 
			},
			//今日の日付データを変数に格納
					//変数は"today"とする
					


			

			button_callback() {

				

				var initialized = false;

				if(initialized)
					return; 
		
				var update_memory = pico.instantiate_detection_memory(5); 
				var facefinder_classify_region = function(r, c, s, pixels, ldim) {return -1.0;};
				var cascadeurl = 'https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder';
				fetch(cascadeurl).then(function(response) {
					response.arrayBuffer().then(function(buffer) {
						var bytes = new Int8Array(buffer);
						facefinder_classify_region = pico.unpack_cascade(bytes);
						console.log('* facefinder loaded');
					})
				})

				var do_puploc = function(r, c, s, nperturbs, pixels, nrows, ncols, ldim) {return [-1.0, -1.0];};
				var puplocurl = 'https://drone.nenadmarkus.com/data/blog-stuff/puploc.bin'
				fetch(puplocurl).then(function(response) {
					response.arrayBuffer().then(function(buffer) {
						var bytes = new Int8Array(buffer);
						console.log('* puploc loaded');
					})
				})

				var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
				function rgba_to_grayscale(rgba, nrows, ncols) {
					var gray = new Uint8Array(nrows*ncols);
					for(var r=0; r<nrows; ++r)
						for(var c=0; c<ncols; ++c)
							// gray = 0.2*red + 0.7*green + 0.1*blue
							gray[r*ncols + c] = (2*rgba[r*4*ncols+4*c+0]+7*rgba[r*4*ncols+4*c+1]+1*rgba[r*4*ncols+4*c+2])/10;
					return gray;
				}
		
				var processfn = function(video, dt) {
					// render the video frame to the canvas element and extract RGBA pixel data
					ctx.drawImage(video, 0, 0);
					var rgba = ctx.getImageData(0, 0, 640, 480).data;
					// prepare input to `run_cascade`
					let image = {
						"pixels": rgba_to_grayscale(rgba, 480, 640),
						"nrows": 480,
						"ncols": 640,
						"ldim": 640
					}
					let params = {
						"shiftfactor": 0.1, // move the detection window by 10% of its size
						"minsize": 100,     // minimum size of a face
						"maxsize": 1000,    // maximum size of a face
						"scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
					}
					// run the cascade over the frame and cluster the obtained detections
					// dets is an array that contains (r, c, s, q) quadruplets
					// (representing row, column, scale and detection score)
					let dets = pico.run_cascade(image, facefinder_classify_region, params);
					dets = update_memory(dets);
					dets = pico.cluster_detections(dets, 0.2); // set IoU threshold to 0.2
					// draw detections
					for(i=0; i<dets.length; ++i)
						// check the detection score
						// if it's above the threshold, draw it
						// (the constant 50.0 is empirical: other cascades might require a different one)
						if(dets[i][3]>100.0)
						{
							// var r, c, s;
							// ctx.beginPath();
							// ctx.arc(dets[i][1], dets[i][0], dets[i][2]/2, 0, 2*Math.PI, false);
							// ctx.lineWidth = 3;
							// ctx.strokeStyle = 'red';
							// ctx.stroke();
							//
							
							//
							// find the eye pupils for each detected face
							// starting regions for localization are initialized based on the face bounding box
							// (parameters are set empirically)
							// first eye
							// r = dets[i][0] - 0.075*dets[i][2];
							// c = dets[i][1] - 0.175*dets[i][2];
							// s = 0.35*dets[i][2];
							// [r, c] = do_puploc(r, c, s, 63, image)
							// if(r>=0 && c>=0)
							// {
							// 	ctx.beginPath();
							// 	ctx.arc(c, r, 1, 0, 2*Math.PI, false);
							// 	ctx.lineWidth = 3;
							// 	ctx.strokeStyle = 'red';
							// 	ctx.stroke();
								
								
							// }
							// // second eye
							// r = dets[i][0] - 0.075*dets[i][2];
							// c = dets[i][1] + 0.175*dets[i][2];
							// s = 0.35*dets[i][2];
							// [r, c] = do_puploc(r, c, s, 63, image)
							// if(r>=0 && c>=0)
							// {
							// 	ctx.beginPath();
							// 	ctx.arc(c, r, 1, 0, 2*Math.PI, false);
							// 	ctx.lineWidth = 3;
							// 	ctx.strokeStyle = 'red';
							// 	ctx.stroke();
							// }

							snapshot();
								// import { videoElement } from './aaa.js';

							


							
							// take_picture();

							sleep(8000);

						}
				}

				var mycamvas = new camvas(ctx, processfn);

				initialized = true;
				
			}
		}
	}
</script>



