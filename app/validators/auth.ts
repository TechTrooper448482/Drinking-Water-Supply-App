import vine from '@vinejs/vine'

export enum UserType {
    CUSTOMER = 'customer',
    SUPPLIER = 'supplier',
}
export const signUpValidator = vine.compile(
    vine.object({
        firstName: vine.string(),
        lastName: vine.string(),
        userName: vine.string(),
        password: vine.string(),
        phone: vine.string(),
        location: vine.string(),
        userType: vine.enum(UserType),
    })
)
export const loginValidator = vine.compile(
    vine.object({
        userName: vine.string(),
        password: vine.string(),
    })
)



