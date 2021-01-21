import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import schoolRoutes from "./routes"
import bodyParser from "body-parser"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(schoolRoutes)

//const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.i0chn.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri: string = `mongodb+srv://yasora123:MKg3cRvSVdpnH8tu@cluster0.i0chn.mongodb.net/School?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })