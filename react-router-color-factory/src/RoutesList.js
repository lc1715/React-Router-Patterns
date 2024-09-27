import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Colors from './Colors'
import Color from './Color'
import NewColorForm from './NewColorForm'


function RoutesList() {
    const [colors, setColors] = useState([
        { id: uuid(), color: 'red', colorHex: '#FF0000' },
        { id: uuid(), color: 'green', colorHex: '#00FF00' },
        { id: uuid(), color: 'blue', colorHex: '#0000FF' }
    ])

    const addNewColor = (newColor) => {
        console.log('newColor', newColor)

        setColors((colorsArr) => (
            [...colorsArr, { id: uuid(), ...newColor }]
        ))

    }

    return (
        <Routes>
            <Route path='/colors' element={<Colors colors={colors} />} />
            <Route path='/colors/:color' element={<Color colors={colors} />} />
            <Route path='/colors/new' element={<NewColorForm addNewColor={addNewColor} />} />
        </Routes>
    )
}

export default RoutesList;