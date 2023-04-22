import React from 'react'
import EachTraining from '../components/EachTraining'
import AllTrainingData from '../assets/datas/trainning_ENG.json'
import PageTitle from '../components/PageTitle'

export default function Training() {
    let trainingData = []
    for (let i = AllTrainingData.length - 1; i >= 0; i--) {
        trainingData.push(AllTrainingData[i])
    }
    return (
        <>
            <PageTitle props="Training" />
            {trainingData.map((eachTraining) => (
                <EachTraining key={eachTraining.id} props={eachTraining} />
            ))}
        </>
    )
}
