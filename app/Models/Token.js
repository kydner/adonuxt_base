'use strict'

const Model = use('Model')

class Token extends Model {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'Token.uuid')
  }

}

module.exports = Token
