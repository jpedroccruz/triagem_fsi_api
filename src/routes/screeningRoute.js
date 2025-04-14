import { Router } from "express"
import continueScreening from "../controllers/screeningController"

const screeningRoute = Router()

screeningRoute.post('/screening', continueScreening)

export default screeningRoute