const cors = (req, res, next) => {
  const allowedOrigin = ['http://localhost:3000'];

  // whiteList
  if (allowedOrigin.includes(req.get('origin'))) {
    res.header('Access-Control-Allow-Origin', req.get('origin')); // origin: true
  }

  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }

  next();
};

module.exports = cors;
