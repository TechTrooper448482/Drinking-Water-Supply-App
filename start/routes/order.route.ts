/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import OrdersController from '#controllers/orders_controller'
import { middleware } from '#start/kernel'

import router from '@adonisjs/core/services/router'

router.group(() => {
    router.get('/create', [OrdersController, 'createOrder'])
}).prefix('/orders').middleware(middleware.auth())
