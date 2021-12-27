const defaultCorsHeader = {
  'Access-Control-Allow-Origin': true,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Max-Age': 10,
};

const cors = (req, res, next) => {
  res.writeHead(204, defaultCorsHeader);

  if (req.method === 'OPTIONS') {
    res.end();
  }

  return next();
};

module.exports = cors;
