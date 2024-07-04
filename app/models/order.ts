import { DateTime } from 'luxon'
import { BaseModel, column, hasOne  } from '@adonisjs/lucid/orm'
import Product from './product.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'
// import { HasOne } from '@adonisjs/lucid/types/relations'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare supplierId: number

  @column()
  declare productId: number

  @hasOne(() => Product, {
    localKey:'productId',
    foreignKey: 'id', // defaults to userId
  })
  declare product: HasOne<typeof Product>
 
  @hasOne(() => User, {
    // foreignKey: 'supplierId', // defaults to userId
    localKey:'supplierId',
    foreignKey: 'id', // defaults to userId
  })
  declare supplier: HasOne<typeof User>

  @hasOne(() => User, {
    localKey:'userId',
    foreignKey: 'id', // defaults to userId
  })
  declare customer: HasOne<typeof User>

  @column()
  declare qt: number

  @column()
  declare totalPrice: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

