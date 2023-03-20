import React from 'react'
import { Link } from 'react-router-dom'

export default function EachTraining({ props }) {
    const name = <p>{props.name}</p>
    const grantedYear = <p>{props.grantedYear}</p>
    const speciality = <p>{props.speciality}</p>
    return (
        <Link className='eachTraining'>
            <div>
                {name}
                {grantedYear}
                {speciality}
            </div>
        </Link>
    )
}
