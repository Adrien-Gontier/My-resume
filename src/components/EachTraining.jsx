import React from 'react'
import { Link } from 'react-router-dom'

export default function EachTraining({ props }) {
    const name = <h3>{props.name}</h3>
    const grantedYear = <p>{props.grantedYear}</p>
    const speciality = <p>{props.speciality}</p>
    return (
        <Link className="eachTraining">
            <div>
                {name}
                {speciality}
            </div>
            <div>{grantedYear}</div>
        </Link>
    )
}
