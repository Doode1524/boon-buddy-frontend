import React from 'react'

const Boons = ({boons}) => {

    const findDuos = () => {
        let duos = boons.filter(boon => boon.duo === true)
        console.log(duos)
    }

    findDuos()

    return (
        <div>
            Hello boons
        </div>
    )
}

export default Boons
