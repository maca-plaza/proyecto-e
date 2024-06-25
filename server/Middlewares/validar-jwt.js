import jwt from 'jsonwebtoken';

const validarJWT = (req, res, next) => {
  
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  try {
    
    const decoded = jwt.verify(token, 'tu_secreto');
    req.user = decoded.user;
    next(); 
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido' });
  }
};

export default validarJWT;