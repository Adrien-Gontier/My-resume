import React from 'react'
import PageTitle from '../components/PageTitle'
import OneDataExperience from '../assets/datas/experiences_ENG.json'
import { useParams } from 'react-router-dom'

export default function OneExperience() {
    const { id } = useParams()

    return (
        <div>
            <PageTitle props="One Experience" />
        </div>
    )
}
