import Order from '#models/order'
import Product from '#models/product'
import User from '#models/user'
import { orderValidator } from '#validators/order'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {
  public async createOrder({ response, request }: HttpContext) {
    const data = await orderValidator.validate(request.body())

    const product = await Product.findBy('id', data.productId)
    if (!product) return response.json({ status: 400, message: 'No Product Found' })

    const totalPrice = product.price * data.qt

    const order = await Order.create({ ...data, totalPrice: totalPrice })

    await order.save()

    return response.json({ status: 200, message: 'Order has been Created.' })
  }

  public async fetchOrders({ response, session }: HttpContext) {
    const { userId } = session.get('payload')
    const user = await User.findBy('id', userId)
    if (!user) return response.json({ status: 400, message: 'No User Found.' })

    if (user.isSupplier) {
      const orders = await Order.query()
        .where('supplierId', user.id)
        .preload('customer')
        .preload('product')
      return response.json({ status: 200, data: orders, message: 'Orders fetched Successfully.' })
    }

    const customerOrders = await Order.query()
      .where('userId', user.id)
      .preload('product')
      .preload('supplier')

    return response.json({
      status: 200,
      data: customerOrders,
      message: 'Orders fetched Successfully.',
    })
  }
}
