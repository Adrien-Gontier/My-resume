import React, { useEffect, useState } from 'react'
import EachExperience from '../components/EachExperience'
import AllExperiencesData from '../assets/datas/experiences_ENG.json'
import PageTitle from '../components/PageTitle'

export default function Experiences() {
    const [experiencesData, setExperiencesData] = useState([])

    useEffect(() => {
        let experiencesDataArray = []
        for (let i = AllExperiencesData.length - 1; i >= 0; i--) {
            experiencesDataArray.push(AllExperiencesData[i])
        }
        setExperiencesData(experiencesDataArray)
    }, [])

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
