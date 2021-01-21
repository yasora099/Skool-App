import React from 'react'
import SchoolCard from '../SchoolCard/SchoolCard';
import './SchoolList.css';

type Props = {
    schools: School[]
}

const SchoolList: React.FC<Props> = ({
    schools
}) => {

    return (
        <>
            <div className="row">
            {schools && schools.map((school: School) => (
                <div className="column">
                <SchoolCard
                    key={school._id}
                    school={school}
                />
                </div>
            ))}
            </div>
        </>
    )

}

export default SchoolList;