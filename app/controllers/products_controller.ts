import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    public async getAllProducts({ response }: HttpContext) {
        const products = await Product.all();
        return response.json({ status: 200, data: products })
    }
}