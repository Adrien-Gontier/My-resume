import React from 'react'
import PageTitle from '../components/PageTitle'
import AllDataExperience from '../assets/datas/experiences_ENG.json'
import { useParams } from 'react-router-dom'

export default function OneExperience() {
    const { id } = useParams()

    const oneExperienceData = AllDataExperience.find(
        (element) => (element.id == id)
    )
    const nameOfPosition =
        oneExperienceData != [] ? (
            <h3>{oneExperienceData.nameOfPosition}</h3>
        ) : null
    const nameOfCompany =
        oneExperienceData != [] ? (
            <p>{oneExperienceData.nameOfCompany}</p>
        ) : null
    const monthAndYearBeginning =
        oneExperienceData != [] ? (
            <p>{oneExperienceData.monthAndYearBeginning}</p>
        ) : null
    const monthAndYearEnd =
        oneExperienceData != [] ? (
            <p>{oneExperienceData.monthAndYearEnd}</p>
        ) : null
    const whatIDo =
        oneExperienceData != [] ? <p>{oneExperienceData.whatIDo}</p> : null

    return (
        <>
            <PageTitle props="One Experience" />
            <div className="oneExperience">
                {nameOfPosition}
                {monthAndYearBeginning}
                {monthAndYearEnd}
                {nameOfCompany}
                {whatIDo}
            </div>
        </>
    )
}
