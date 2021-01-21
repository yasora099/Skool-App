import { Response, Request } from "express"
import { School } from "../../types/school"
import Schools from "../../models/school"

const fetchSchools = async (req: Request, res: Response): Promise<void> => {
  try {
    const schools: School[] = await Schools.find()
    res.status(200).json({ schools })
  } catch (error) {
    throw error
  }
}

const addSchool = async (req: Request, res: Response): Promise<void> => {
     
    try {
    
      const body = req.body as Pick<School, "name" | "street" | "suburb" | "postcode" | "state" | "registeredStudents">
      
      const school: School = new Schools({
        name: body.name,
        street: body.street,
        suburb: body.suburb,
        postcode: body.postcode,
        state: body.state,
        registeredStudents: body.registeredStudents,
      })
  
      const newSchool: School = await school.save()
      const allSchools: School[] = await Schools.find()
  
      res
        .status(201)
        .json({ message: "School added", school: newSchool, schools: allSchools })
    } catch (error) {
      throw error
    }
  }
  export { fetchSchools, addSchool }