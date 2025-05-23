import { Router } from "express"
import continueScreening from "../controllers/screeningController.js"

const screeningRoute = Router()

screeningRoute.post('/screening', continueScreening)

export default screeningRoute