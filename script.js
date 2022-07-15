const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
//const convert = Document.querySelector('.convertmp3');

app.use('/static', express.static('./static'));

app.listen(3000, () => {
    console.log('It Works!');
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' });
});

//mp4
app.get('/download', async (req, res) => {
    var url = req.query.url;
    let info = await ytdl.getInfo(url);
    res.header('Content-Disposition', `attachment; filename=${info.title}.mp4`);
    ytdl(url, { format: 'mp4' }).pipe(res);
});
