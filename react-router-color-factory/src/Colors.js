import React from 'react'

import { Link } from 'react-router-dom'


function Colors({ colors }) {
    return (
        <div>
            <h1>Welcome to the Color Factory</h1>

            <Link to='/colors/new'>Add a color</Link>

            <p>Please select a color</p>

            {colors.map((colorObj) =>
                <div>
                    <Link to={`/colors/${colorObj.color}`}>{colorObj.color}</Link>
                </div>)}
        </div>
    )
}

export default Colors;