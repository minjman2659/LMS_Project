const videoRouter = require('express').Router();

const url = require('url');
const fs = require('fs');

videoRouter.get('*', (req, res) => {
  const { pathname } = url.parse(req.url, true);
  const filePath = `public/videos${pathname}`;

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const { range } = req.headers;
  console.log(range);

  const MAX_CHUNK_SIZE = 1000 * 1000 * 50;
  // range 헤더 파싱
  const parts = range.replace(/bytes=/, '').split('-');
  // 재생 구간 설정
  const start = parseInt(parts[0], 10);
  const _end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
  const end = Math.min(_end, start + MAX_CHUNK_SIZE - 1);
  // console.log(start, _end, end);

  const header = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': `bytes`,
    'Content-Type': 'video/mp4',
    'Content-Length': end - start + 1,
  };
  res.writeHead(206, header);
  const readStream = fs.createReadStream(filePath, { start, end });
  readStream.pipe(res);
});

module.exports = videoRouter;
