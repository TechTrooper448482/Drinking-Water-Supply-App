import Order from '#models/order';
import Product from '#models/product';
import { orderValidator } from '#validators/order'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {

    public async createOrder({ response, request }: HttpContext) {

        const data = await orderValidator.validate(request.body());

        const product = await Product.findBy('id', data.productId)
        if (!product) return response.json({ status: 400, message: 'No Product Found' })

        const totalPrice = product.price * data.qt;

        const order = await Order.create({ ...data, totalPrice: totalPrice })

        await order.save()

        return response.json({ status: 200, message: 'Order has been Created.' })



    }




}