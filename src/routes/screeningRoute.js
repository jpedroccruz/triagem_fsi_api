import { Router } from "express"
import continueScreening from "./continueScreening"

const screeningRoute = Router()

screeningRoute.post('/screening', continueScreening)

export default screeningRoute