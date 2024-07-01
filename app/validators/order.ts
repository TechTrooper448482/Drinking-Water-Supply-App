import vine from '@vinejs/vine'
export const orderValidator = vine.compile(
    vine.object({
        userId: vine.number(),
        supplierId: vine.number(),
        productId: vine.number(),
        qt: vine.number(),
    })
)
