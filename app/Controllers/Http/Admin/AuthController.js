'use strict'

// const User = use('App/Models/User')
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
  
  async logout({ request, response, auth }) {
    try {
      const check = await auth.check();
      if (check) {
        await auth.user
        .tokens()
        .where('type', 'jwt_refresh_token')
        .update( { is_revoked: true })
      }
      return response.send({message: auth.token})
    } catch (error) {
      return response.send({ message: "Invalid jwt token" });
    }
  }
}

module.exports = AuthController
