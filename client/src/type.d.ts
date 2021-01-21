
interface School {
    _id: string
    name: string
    street: string
    suburb: string
    postcode: string 
    state: string
    registeredStudents: number
}

type SchoolProps = {
    school: School
}