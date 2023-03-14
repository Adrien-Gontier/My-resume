import React from 'react'

export default function OneExperience({ props }) {
    const nameOfPosition = <h3>{props.nameOfPosition}</h3>
    const nameOfCompany = <p>{props.nameOfCompany}</p>
    const monthAndYearBeginning = <p>{props.monthAndYearBeginning}</p>
    const monthAndYearEnd = <p>{props.monthAndYearEnd}</p>
    const whatIDo = <p>{props.whatIDo}</p>

    return (
        <div className="oneExperience">
            <div>
                {nameOfPosition}
                {nameOfCompany}
                {whatIDo}
            </div>
            <div>
                {monthAndYearBeginning}
                {monthAndYearEnd}
            </div>
        </div>
    )
}
