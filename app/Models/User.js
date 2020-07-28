'use strict'

const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        id:
*          type: uint
*        username:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - username
*        - email
*        - password
*/
class User extends Model {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'User.hashPassword')
    this.addHook('beforeCreate', 'User.uuid')
  }

  static get hidden () {
    return ['password']
  }

  static get computed () {
    return ['full_name']
  }

  getFullName () {
    let fullName = this.first_name
    if (this.last_name !== null) fullName += ` ${this.last_name}`
    return fullName
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

}

module.exports = User
