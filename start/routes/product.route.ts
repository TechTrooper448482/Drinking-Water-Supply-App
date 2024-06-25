/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
    router.get('/all', [ProductsController, 'getAllProducts'])
}).prefix('/products')
