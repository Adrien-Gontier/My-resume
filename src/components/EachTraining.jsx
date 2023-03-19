import React from 'react'
import { Link } from 'react-router-dom'

export default function EachTraining({ props }) {
    console.log(props)
    const name = <p>{props.name}</p>
    const grantedYear = <p>{props.grantedYear}</p>
    const speciality = <p>{props.grantedYear}</p>
    return (
        <Link>
            <div>
                {name}
                {grantedYear}
                {speciality}
            </div>
        </Link>
    )
}
