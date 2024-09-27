import { Routes, Route } from 'react-router-dom'

import HomePage from './HomePage';
import DogPage from './DogPage';
import NotFound from './NotFound';


function RoutesLink({ dogs }) {
    return (
        <Routes>
            <Route path='/dogs' element={<HomePage dogs={dogs} />} />
            <Route path='/dogs/:dogName' element={<DogPage dogs={dogs} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default RoutesLink;
