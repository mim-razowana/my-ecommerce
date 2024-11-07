import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";


//placing order using CoD method

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId, items, amount, address, paymentMethod: "COD", payment: false, date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error)
        res.json({ success: true, message: error.message })
    }

}

//placing order using bkash method
const placeOrderBikas = async (req, res) => {

}


//placing order using rocket method
const placeOrderRoket = async (req, res) => {

}



//all orders for the admin pannel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: error.message })
    }

}




//user order data for frontend
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: error.message })
    }
}


//update order status
const updateStatus = async (req, res) => {

    try {
        const { orderId , status } = req.body
        await orderModel.findByIdAndUpdate(orderId ,{ status })
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: error.message })
    }
}

export { placeOrder, placeOrderRoket, placeOrderBikas, allOrders, userOrders, updateStatus }       