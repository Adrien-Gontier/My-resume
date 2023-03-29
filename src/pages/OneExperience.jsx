import React from 'react'
import PageTitle from '../components/PageTitle'
import OneDataExperience from '../assets/datas/experiences_ENG.json'
import { useParams } from 'react-router-dom'

export default function OneExperience() {
    const { id } = useParams()
    const experienceData = OneDataExperience
    const oneExperienceData = experienceData.find(
        (element) => (element.id = id)
    )

    return (
        <>
            <PageTitle props="One Experience" />
            <div className="oneExperience">
                <h3>{oneExperienceData.nameOfPosition}</h3>
                <p>{oneExperienceData.monthAndYearBeginning}</p>
                <p>{oneExperienceData.monthAndYearEnd}</p>
                <p>{oneExperienceData.nameOfCompany}</p>
                <p>{oneExperienceData.whatIDo}</p>
            </div>
        </>
    )
}
