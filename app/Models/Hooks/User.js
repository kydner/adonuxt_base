'use strict'

const Hash = use('Hash')
const { uuid } = require('uuidv4')

const UserHook = {

  /**
   * Hash using password as a hook.
   *
   * @method
   *
   * @param  {Object} userInstance
   *
   * @return {void}
   */
  hashPassword: async (user) => {
    if (user.password) {
      user.password = await Hash.make(user.password)
    }
  },
  uuid: async (user) => {
    user.id = uuid()
  } 

}

module.exports = UserHook
