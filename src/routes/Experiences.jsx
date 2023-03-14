import React from 'react'
import OneExperience from '../components/OneExperience'
import AllExperiences from '../assets/datas/experiences_ENG.json'
import PageTitle from '../components/PageTitle'

export default function Experiences() {
    let test2 = []
    for (let i = AllExperiences.length - 1; i >= 0; i--) {
        test2.push(AllExperiences[i])
    }
    return (
        <>
            <PageTitle props="Expriences" />
            {test2.map((eachExperience) => (
                <OneExperience key={eachExperience.id} props={eachExperience} />
            ))}
        </>
    )
}
