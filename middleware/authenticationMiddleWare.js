
export function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized - Token missing' });
  }

  const token = authHeader.split(' ')[1];
  const decodedToken = Buffer.from(token, 'base64').toString('utf-8');
  const [username, password] = decodedToken.split(':');
  if (username === 'demo' && password === 'password') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized - Invalid credentials' });
  }
}
