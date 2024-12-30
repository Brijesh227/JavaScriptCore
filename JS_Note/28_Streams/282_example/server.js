const http = require('http');
const fs = require('fs');
const {Transform, pipeline} = require('stream');
const replaceWordProcessing = require('./replaceWordProcessor')
const uppercaseWordProcessing = require('./uppercaseWordProcessor');

function downloadFile() {
    // Downloading big file bad way
    const file = fs.readFileSync('webhooks.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    return res.end(file);

    // Downloading big file using good way (Streams)
    const readableStream = fs.createReadStream('webhooks.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    readableStream.pipe(res);
}

function copyFile() {
    // Copy big file using bad way
    const file = fs.readFileSync('sample.txt');
    fs.writeFileSync('output.txt', file);

    // Copy big file good way
    const readStream = fs.createReadStream('sample.txt');
    const writeStream = fs.createWriteStream('output.txt');

    readStream.on('data', (chunk) => {
        console.log('Chunk: ', chunk.toString());
        writeStream.write(chunk);
    });
}

const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end();
    }

    // String processing
    const sampleFileStream = fs.createReadStream('sample.txt');
    const outputWritableStream = fs.createWriteStream('output.txt');


    // only work for simple logic what if you want to manage every steps in individual package, library or complex data manpulation
    sampleFileStream.on('data', (chunk) => {
        console.log('data received: ', chunk.toString());
        // Process
        const finalString = chunk.toString().replaceAll(/ipsum/gi, 'cool').toUpperCase();
        // Writable stream write
        outputWritableStream.write(finalString);
    })

    // not managabale because for every pipe function you need to write error handler and if error occur on first pipe we need to manually hadle it.
    sampleFileStream
    .pipe(replaceWordProcessing)
    .on('error', (err) => {
        console.log(err)
    })
    .pipe(uppercaseWordProcessing)
    .on('error', (err) => {
        console.log(err)
    })
    .pipe(outputWritableStream)
    .on('error', (err) => {
        console.log(err)
    });

    // better way of doing above task

    pipeline(sampleFileStream,
        replaceWordProcessing,
        uppercaseWordProcessing,
        outputWritableStream,
        (err) => {
            if (err) {
                console.log('Error handling here...', err);
            }
        }
    )

    res.end();
});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));