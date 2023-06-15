import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, 'gulshan1002', {
    expiresIn: '30d',
  })
}

export default generateToken
