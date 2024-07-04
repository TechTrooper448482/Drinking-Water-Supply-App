/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
    router.post('/sign-up', [UsersController, 'signUp'])
    router.post('/login', [UsersController, 'login'])
    router.get('/suppliers/fetch', [UsersController, 'fetchSuppliers'])

}).prefix('/auth')

