import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import { generateAuthToken } from '../utils/jwt.js'
import { loginValidator, signUpValidator, UserType } from '#validators/auth'

export default class UsersController {
    public async signUp({ request, response }: HttpContext) {

        let requestBody = request.body()
        const body = await signUpValidator.validate(requestBody)
        const user = await User.findBy('userName', body.userName)
        if (user) return response.json({ status: 400, message: 'username already exist.' })

        const isSupplier = body.userType == UserType.SUPPLIER
        const password = await hash.make(body.password)

        const { userType, ...newBody } = body


        const newUser = await User.create({ ...newBody, isSupplier: isSupplier, password: password })
        await newUser.save()
        const token = await generateAuthToken(newUser.id, newUser.userName, userType)
        return response.json({ status: 200, data: token })

    }

    public async login({ request, response }: HttpContext) {
        const requestBody = request.body();
        const { userName, password } = await loginValidator.validate(requestBody);

        const user = await User.findBy('userName', userName);
        if (!user) {
            return response.json({ status: 400, message: 'Invalid username or password.' });
        }

        const isPasswordValid = await hash.verify(user.password, password);
        if (!isPasswordValid) {
            return response.json({ status: 400, message: 'Invalid username or password.' });
        }

        const userType = user.isSupplier ? UserType.SUPPLIER : UserType.CUSTOMER
        const token = await generateAuthToken(user.id, user.userName, userType);
        return response.json({ status: 200, data: token });
    }

}
