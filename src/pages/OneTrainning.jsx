import React from 'react'
import PageTitle from '../components/PageTitle'
import AllTrainning from '../assets/datas/trainning_ENG.json'
import { useParams } from 'react-router-dom'

export default function OneTraining() {
    const { id } = useParams()
    const oneTrainningData = AllTrainning.find((element) => element.id == id)
    const name = <h3>{oneTrainningData.name}</h3>
    const grantedYear = <p>{oneTrainningData.grantedYear}</p>
    const speciality = <p>{oneTrainningData.speciality}</p>
    return (
        <>
            <PageTitle props="One Training" />
            <div className="oneTrainning">
                {name}
                {speciality}
                {grantedYear}
            </div>
        </>
    )
}
