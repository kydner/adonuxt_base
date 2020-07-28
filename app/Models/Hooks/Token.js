'use strict'

const { uuid } = require('uuidv4')

const TokenHook = {

  /**
   * Hash using password as a hook.
   *
   * @method
   *
   * @param  {Object} userInstance
   *
   * @return {void}
   */
  uuid: async (user) => {
    user.id = uuid()
  } 

}

module.exports = TokenHook
