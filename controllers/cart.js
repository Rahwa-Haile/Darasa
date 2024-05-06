const Cart = require('../model/cart')

const createCart = async (req, res) => {
    try{
        const cart = await Cart.create({...req.body})
        res.status(201).json({cart})
    }catch(error){
        console.log(error)
    }
}

module.exports = createCart 