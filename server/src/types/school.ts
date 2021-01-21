import { Document } from "mongoose"

export interface School extends Document {
  name: string
  street: string
  suburb: string
  postcode: string 
  state: string
  registeredStudents: number
}