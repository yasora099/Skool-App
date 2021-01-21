import { Router } from "express"
import { fetchSchools, addSchool } from "../controllers/schoolController"

const router: Router = Router()

router.get("/schools", fetchSchools)

router.post("/add-school", addSchool)

export default router