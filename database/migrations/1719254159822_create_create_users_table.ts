import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('user_name')
      table.string('password')
      table.string('phone')
      table.string('location')
      table.boolean('is_supplier')
      table.dateTime('created_at')
      table.dateTime('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
