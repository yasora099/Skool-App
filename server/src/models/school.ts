import { School } from "./../types/school"
import { model, Schema } from "mongoose"

const schoolSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    suburb: {
      type: String,
      required: true,
    },

    postcode: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    registeredStudents: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
)

export default model<School>("School", schoolSchema)