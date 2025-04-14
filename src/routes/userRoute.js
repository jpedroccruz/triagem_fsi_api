import { Router } from "express"
import getUserData from "./getUserData"
import updateData from "./updateData"

const userRoute = Router()

userRoute.get('/user', getUserData)
userRoute.put('/user', updateData)

export default userRoute