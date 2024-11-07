import express from 'express'
import { placeOrder,placeOrderRoket,placeOrderBikas,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()
//admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/bikas',authUser,placeOrderBikas)
orderRouter.post('/roket',authUser,placeOrderRoket)


// user feature

orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;