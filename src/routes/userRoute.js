import { Router } from "express"
import { getUserData, updateUserData } from "../controllers/userController.js"

const userRoute = Router()

userRoute.get('/user', getUserData)
userRoute.put('/user', updateUserData)

export default userRoute