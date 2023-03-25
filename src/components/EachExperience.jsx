import React from 'react'
import { Link } from 'react-router-dom'

export default function EachExperience({ props }) {
    const nameOfPosition = <h3>{props.nameOfPosition}</h3>
    const nameOfCompany = <p>{props.nameOfCompany}</p>
    const monthAndYearBeginning = <p>{props.monthAndYearBeginning}</p>
    const monthAndYearEnd = <p>{props.monthAndYearEnd}</p>
    const whatIDo = <p>{props.whatIDo}</p>

    return (
        <Link to={`/oneexperience/${props.id}`} className="eachExperience">
            <div>
                {nameOfPosition}
                {nameOfCompany}
                {whatIDo}
            </div>
            <div>
                {monthAndYearBeginning}
                {monthAndYearEnd}
            </div>
        </Link>
    )
}
