import React from 'react'
import './SchoolCard.css';

type SchoolProps = {
  school: School
}

const SchoolCard: React.FC<SchoolProps> = ({
  school,
  ...props
}) => {
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1>{school.name}</h1>
        <h5>Street: {school.street}</h5>
        <h5>Suburb: {school.suburb}</h5>
        <h5>Post Code: {school.postcode}</h5>
        <h5>State: {school.state}</h5>
        <h5>Number of registered students: {school.registeredStudents} </h5>
      </div>  
    </div>
    
  )
}

export default SchoolCard;