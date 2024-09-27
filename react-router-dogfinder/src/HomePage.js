import React from 'react'

import { Link } from 'react-router-dom'
import './HomePage.css'


const HomePage = ({ dogs }) => {
    return (
        <div>
            <h1>Good luck Dogs!</h1>

            {dogs.map((dog) =>
                <Link to={`/dogs/${dog.name}`}>
                    <div> {dog.name}</div>
                    <img src={dog.src} />
                </Link>)}
        </div>
    )
}

export default HomePage;
