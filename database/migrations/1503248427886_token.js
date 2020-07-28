'use strict'

const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', table => {
      table.uuid('id').primary().notNullable()
      table.uuid('user_id').references('id').inTable('users')
      table.string('token', 40).notNullable().unique()
      table.boolean('is_revoked').defaultTo(false)
      table.string('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
