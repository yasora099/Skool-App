import React, { useState } from 'react'
import './AddSchool.css';

type Props = { 
  saveSchool: (e: React.FormEvent, inputData: School | any) => void
  handleClose: () => void;
}

const AddSchool: React.FC<Props> = ({ saveSchool, handleClose }) => {
  const [formData, setFormData] = useState<School | any>({name: "", street: "", suburb: "", postcode: "", state: "", registeredStudents: "" } )
  
  const handleDisable = (formData: School | any)=> {
  if(formData.name !== "" && formData.street !== "" && formData.suburb !== "" && formData.postcode !== "" && formData.registeredStudents !== ""){
    return false;
  }else 
  return true;
  }

  const handleCancel = () => {
    handleClose()
    setFormData({name: "", street: "", suburb: "", postcode: "", state: "", registeredStudents: "" } )}
  
  const handleSubmmit = (e: React.FormEvent, formData: School | any) => {saveSchool(e, formData)
    handleClose()
    setFormData({name: "", street: "", suburb: "", postcode: "", state: "", registeredStudents: "" } )
  }

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' id="add-school-form" onSubmit={(e) => handleSubmmit(e, formData)}>
      <div>
          <h1>Add new school</h1>
        <div>
          <label htmlFor='name'>Name</label>
          <input value={formData.name} onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='street'>Street</label>
          <input value={formData.street} onChange={handleForm} type='text' id='street' />
        </div>
        <div>
          <label htmlFor='suburb'>Suburb</label>
          <input value={formData.suburb} onChange={handleForm} type='text' id='suburb' />
        </div>
        <div>
          <label htmlFor='postcode'>Post Code</label>
          <input value={formData.postcode} onChange={handleForm} type='text' id='postcode' />
        </div>
        <div>
          <label htmlFor='state'>State</label>
          <input value={formData.State} onChange={handleForm} type='text' id='state' />
        </div>
        <div>
          <label htmlFor='registeredStudents'>Number of registered students</label>
          <input value={formData.registeredStudents} onChange={handleForm} type='number' id='registeredStudents' />
        </div>
      </div>
      <div className='button-right'>
      <button className="cancel-button" onClick={()=>handleCancel()} > Cancel</button>
   <button type='submit' disabled={handleDisable(formData)} > Add School</button>
   
   </div>
    </form>
  )
}

export default AddSchool