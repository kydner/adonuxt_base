'use strict'

class AuthController {
/**
  * @swagger
  * /api/v1/login:
  *   post:
  *     tags:
  *       - Auth
  *     summary: Login User
  *     requestBody:
  *       content:
  *         schema:
  *         type: object
  *         properties:
  *           email: 
  *             type: string
  *           password:
  *             type: string
  *           example:
  *             email: 'string'
  *             password: 'string'
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */
  async login({ request, auth }) {
    const { email, password } = request.all()
    return auth
    .authenticator('jwt')
    .withRefreshToken()
    .attempt(email, password)
    }
}

module.exports = AuthController
