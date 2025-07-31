const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const tokenSinBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
    const verificado = jwt.verify(tokenSinBearer, process.env.JWT_SECRET);
    req.usuario = verificado; 
    next();
  } catch (error) {
    res.status(400).json({ mensaje: 'Token inválido.' });
  }
};

module.exports = verificarToken;
