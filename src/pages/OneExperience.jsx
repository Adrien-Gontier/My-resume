import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import AllDataExperience from '../assets/datas/experiences_ENG.json'
import { useParams } from 'react-router-dom'

export default function OneExperience() {
    const { id } = useParams()
    const [theExperienceData, setTheExperienceData] = useState([])

    useEffect(() => {
        for (let i = 0; i < AllDataExperience.length; i++) {
            if (AllDataExperience[i].id == parseInt(id)) {
                setTheExperienceData(AllDataExperience[i])
            }
        }
    }, [])
    const nameOfPosition =
        theExperienceData != [] ? (
            <h3>{theExperienceData.nameOfPosition}</h3>
        ) : null
    const nameOfCompany =
        theExperienceData != [] ? (
            <p>{theExperienceData.nameOfCompany}</p>
        ) : null
    const monthAndYearBeginning =
        theExperienceData != [] ? (
            <p>{theExperienceData.monthAndYearBeginning}</p>
        ) : null
    const monthAndYearEnd =
        theExperienceData != [] ? (
            <p>{theExperienceData.monthAndYearEnd}</p>
        ) : null
    const whatIDo =
        theExperienceData != [] ? <p>{theExperienceData.whatIDo}</p> : null

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
