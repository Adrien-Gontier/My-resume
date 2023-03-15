import React from 'react'
import EachExperience from '../components/EachExperience'
import AllExperiencesData from '../assets/datas/experiences_ENG.json'
import PageTitle from '../components/PageTitle'

export default function Experiences() {
    let experiencesData = []
    for (let i = AllExperiencesData.length - 1; i >= 0; i--) {
        experiencesData.push(AllExperiencesData[i])
    }
    return (
        <>
            <PageTitle props="Expriences" />
            {experiencesData.map((eachExperience) => (
                <EachExperience
                    key={eachExperience.id}
                    props={eachExperience}
                />
            ))}
        </>
    )
}
