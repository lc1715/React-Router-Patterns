import React from 'react'

import { useParams, Link, Navigate } from 'react-router-dom'
import './Color.css'

function Color({ colors }) {
    const { color } = useParams()

    const colorMatch = colors.filter(colorObj => colorObj.color === color)

    if (colorMatch.length === 0) return Navigate('colors')

    const colorName = colorMatch[0].color
    const { colorHex } = colorMatch[0]

    return (
        <div className='ColorPage' style={{ backgroundColor: `${colorHex}` }}>
            <h2>This is {colorName}</h2>
            <h2>Isn't it beautiful?</h2>
            <Link to='/colors'>Go Back</Link>
        </div>
    )
}

export default Color;