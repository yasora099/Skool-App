import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SchoolList from '../../components/SchoolList/SchoolList'
import AddSchool from '../../components/AddSchool/AddSchool'
import AddModal from '../../components/AddModal/AddModal'
import Header from '../../components/Header/Header'

const SchoolContainer: React.FC = () => {
    const [schoolList, setSchoolList] = useState<School[]>([])
    const [filteredList, setFilteredList] = useState<School[]>([])
    const [input, setInput] = useState("")
    const [show, setShow] = useState(false)

    const baseUrl: string = 'http://localhost:4000'

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                baseUrl + '/schools'
            );
            setFilteredList(result.data.schools)
            setSchoolList(result.data.schools);
        };

        fetchData();
    }, []);

    const handleSaveSchool = async (e: React.FormEvent, formData: School): Promise<void> => {
        e.preventDefault()
        const school: Omit<School, '_id'> = {
            name: formData.name,
            street: formData.street,
            suburb: formData.suburb,
            postcode: formData.postcode,
            state: formData.state,
            registeredStudents: formData.registeredStudents,
        }
        try {
            const result = await axios.post(
                baseUrl + '/add-school',
                school
            )
            setSchoolList(result.data.schools)
            setFilteredList(result.data.schools)
        } catch {
            throw new Error('Error! school not saved')
        }

    }

    const handleSearch = async (e: any) => {
        setInput(e.target.value);
        console.log(input)
        console.log(e.target.value)
        if (e.target.value !== "") {
            const filtered = schoolList.filter(school => {
                return JSON.stringify(school).toLowerCase().includes(e.target.value.toLocaleLowerCase())
            })
            setFilteredList(filtered);
        } else {
            setFilteredList(schoolList);
        }

    }

    return (
        <main className='App'>
            <Header handleSearch={handleSearch}  inputValue={input} handleShow={() => setShow(true)} />
            <AddModal show={show}>
            <AddSchool saveSchool={handleSaveSchool} handleClose={() => setShow(false)}  />
            </AddModal>
            <SchoolList schools={filteredList} />
        </main>
    )
}

export default SchoolContainer